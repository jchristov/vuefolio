import Vue from 'vue'
import Vuex from 'vuex'
import loadExchangeKeys from '../functions/loadExchangeKeys.js'
import loadWalletKeys from '../functions/loadWalletKeys.js'
import loadBalancesFromWallets from '../functions/loadBalancesFromWallets.js'
import loadBalancesFromExchanges from '../functions/loadBalancesFromExchanges.js'
import loadManualBalances from '../functions/loadManualBalances.js'
import requestExchangeRates from '../functions/requestExchangeRates'
import combineBalances from '../functions/combineBalances'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    keys: {
      exchanges: loadExchangeKeys(),
      wallets: loadWalletKeys()
    },
    balances: {
      exchanges: JSON.parse(localStorage.getItem('exchangeBalances')),
      wallets: JSON.parse(localStorage.getItem('walletBalances')),
      manual: loadManualBalances()
    },
    portfolio: null, // Combined balances + exchange rates, gets updated after call to "syncExchangeRates",
    baseCurrency: localStorage.baseCurrency ? localStorage.baseCurrency : 'EUR'
  },
  getters: {
    getExchangeKeys: function (state) {
      return state.keys.exchanges
    },
    getWalletKeys: function (state) {
      return state.keys.wallets
    },
    getExchangeBalances: function (state) {
      return state.balances.exchanges
    },
    getWalletBalances: function (state) {
      return state.balances.wallets
    },
    getManualBalances: function (state) {
      return state.balances.manual
    },
    getPortfolio: function (state) {
      return state.portfolio
    },
    getBaseCurrency: function (state) {
      return state.baseCurrency
    }
  },
  mutations: {
    changeWalletKey: function (state, payload) {
      // Find index of wallet in list of wallet keys
      const walletIndex = state.keys.wallets.findIndex(item => {
        return item.name === payload.wallet.name
      })
      // Update state
      if (payload.keyIndex === state.keys.wallets[walletIndex]['publicKeys'].length) {
        state.keys.wallets[walletIndex]['publicKeys'].push(payload.key)
      } else {
        state.keys.wallets[walletIndex]['publicKeys'][payload.keyIndex] = payload.key
        // Remove input line after emptying
        if (payload.key === '') {
          state.keys.wallets[walletIndex]['publicKeys'].splice(payload.keyIndex, 1)
        }
      }
      localStorage.setItem('walletKeys', JSON.stringify(state.keys.wallets))
    },
    changeExchangeKey: function (state, payload) {
      // Find index of exchange in list of exchange keys
      const exchangeIndex = state.keys.exchanges.findIndex(item => {
        return item.name === payload.exchange
      })
      // Update state
      state.keys.exchanges[exchangeIndex][payload.keyType] = payload.key
      // Store in local storage
      localStorage.setItem('exchangeKeys', JSON.stringify(state.keys.exchanges))
    },
    clearKeys: function (state) {
      localStorage.removeItem('exchangeKeys')
      localStorage.removeItem('walletKeys')
      localStorage.removeItem('exchangeBalances')
      localStorage.removeItem('walletBalances')
      state.keys.exchanges = loadExchangeKeys()
      state.keys.wallets = loadWalletKeys()
    },
    mutateBalances: function (state, balances) {
      state.balances.wallets = balances[0]
      state.balances.exchanges = balances[1]
      localStorage.setItem('walletBalances', JSON.stringify(state.balances.wallets))
      localStorage.setItem('exchangeBalances', JSON.stringify(state.balances.exchanges))
    },
    deleteManualBalances: function (state) {
      state.balances.manual = [{'description': '', 'token': '', 'balance': ''}]
      localStorage.setItem('manualBalances', JSON.stringify(state.balances.manual))
    },
    mutateManualBalances: function (state, item) {
      var index = state.balances.manual.indexOf(item)

      // Change and possibly add line only when all three inputs are filled
      if ((item.description !== '') && (item.token !== '') && (item.balance !== '')) {
        // Update the manual entry
        state.balances.manual[index].description = item.description
        state.balances.manual[index].token = item.token
        state.balances.manual[index].balance = item.balance
        // Add new thing add the end
        if (index === (state.balances.manual.length - 1)) {
          state.balances.manual.push({'description': '', 'token': '', 'balance': ''})
        }

        localStorage.setItem('manualBalances', JSON.stringify(state.balances.manual))
      }

      // Remove input line after emptying
      if ((item.description === '') && (item.token === '') && (item.balance === '')) {
        state.balances.manual.splice(index, 1)

        localStorage.setItem('manualBalances', JSON.stringify(state.balances.manual))
      }
    },
    mutatePortfolio: function (state, payload) {
      const balances = payload.balances
      const rates = payload.rates

      var portfolio = {}
      var currencies = ['EUR', 'USD', 'BTC', 'ETH']

      currencies.forEach(cur => {
        portfolio[cur] = []
        Object.keys(balances).forEach(
          (token, index) => {
            portfolio[cur][index] = {
              'name': token,
              'balance': balances[token],
              'rate': rates[token][cur]['rate'],
              'holding': balances[token] * rates[token][cur]['rate'],
              '24hchange': rates[token][cur]['change']
            }
          }
        )
        // Now sort based on 'holding' value
        portfolio[cur].sort(function (a, b) {
          return parseFloat(b.holding) - parseFloat(a.holding)
        })
      })

      // Store sorted portfolio in the state
      state.portfolio = portfolio
    },
    mutateBaseCurrency: function (state, currency) {
      state.baseCurrency = currency
      localStorage.setItem('baseCurrency', currency)
    }
  },
  actions: {
    syncExchangeAndWalletBalances (context) {
      const walletKeys = context.state.keys.wallets
      const exchangeKeys = context.state.keys.exchanges
      const balancesPromise = Promise.all(
        [loadBalancesFromWallets(walletKeys),
          loadBalancesFromExchanges(exchangeKeys)]
      )
      // After loading the balances, call the mutation to change the state accordingly
      balancesPromise.then(balances => {
        context.commit('mutateBalances', balances)
        context.dispatch('syncExchangeRates')
      })
      // I return the promise, so that components that call this action can use .then on it
      return balancesPromise
    },
    syncManualBalances (context, item) {
      context.commit('mutateManualBalances', item)
      context.dispatch('syncExchangeRates')
    },
    deleteManualBalances (context) {
      context.commit('deleteManualBalances')
      context.dispatch('syncExchangeRates')
    },
    syncExchangeRates (context) {
      const combinedBalances = combineBalances(
        context.state.balances.wallets,
        context.state.balances.exchanges,
        context.state.balances.manual
      )

      if (Object.getOwnPropertyNames(combinedBalances).length !== 0) {
        // There's actually something in combinedBalances so it makes sense to get exchange rates
        const ratesPromise = requestExchangeRates(Object.keys(combinedBalances))
        ratesPromise.then(rates => {
          const payload = {
            'rates': rates,
            'balances': combinedBalances
          }
          context.commit('mutatePortfolio', payload)
        })
      }
    }
  }
}
)
