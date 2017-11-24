import Vue from 'vue'
import Vuex from 'vuex'
import loadExchangeKeys from '../functions/loadExchangeKeys.js'
import loadWalletKeys from '../functions/loadWalletKeys.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    keys: {
      exchanges: loadExchangeKeys(),
      wallets: loadWalletKeys()
    },
    balances: {
    }
  },
  getters: {
    getExchangeKeys: function (state) {
      return state.keys.exchanges
    },
    getWalletKeys: function (state) {
      return state.keys.wallets
    }
  },
  mutations: {
    addWalletKey: function () {},
    changeWalletKey: function (state, payload) {
      // Find index of wallet in list of wallet keys
      console.log(payload)
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
          console.log(state.keys.wallets[walletIndex])
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
    }
  },
  actions: {
  }
}
)
