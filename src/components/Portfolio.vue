<template>
  <div class="hello">
    <span v-if="(combinedBalances !== null)">
      <p>Switch base currency:</p>
      <p>
        <button @click="(event) => { switchBaseCurrency(event, 'BTC') }">BTC</button>
        <button @click="(event) => { switchBaseCurrency(event, 'ETH') }">ETH</button>
        <button @click="(event) => { switchBaseCurrency(event, 'EUR') }">EUR</button>
        <button @click="(event) => { switchBaseCurrency(event, 'USD') }">USD</button>
      </p>
      <PortfolioTable :portfolio="myPortfolio" :currency="baseCurrency"/>
    </span>
    <span v-else>
      <p>Hi. Go to Settings</p>
    </span>
  </div>
</template>

<script>
import combineBalances from '../functions/combineBalances.js'
import requestExchangeRates from '../functions/requestExchangeRates.js'
import PortfolioTable from './PortfolioTable'

var initialBaseCurrency
if (localStorage.baseCurrency) {
  initialBaseCurrency = localStorage.baseCurrency
} else {
  initialBaseCurrency = 'BTC'
}

export default {
  name: 'Portfolio',
  data () {
    return {
      walletBalances: JSON.parse(localStorage.getItem('walletBalances')),
      exchangeBalances: JSON.parse(localStorage.getItem('exchangeBalances')),
      manualBalances: JSON.parse(localStorage.getItem('manualBalances')),
      baseCurrency: initialBaseCurrency
      // baseCurrencies: ['EUR', 'BTC', 'ETH', 'USD'],
    }
  },
  computed: {
    combinedBalances: function () {
      if (this.walletBalances || this.exchangeBalances || this.manualBalances) {
        return combineBalances(this.walletBalances, this.exchangeBalances, this.manualBalances)
      } else {
        return null
      }
    },
    myPortfolio: function () {
      if (this.exchangeRates !== null) { // exchangeRates is an async thingy that returns null if its not ready
        var portfolio = []
        Object.keys(this.combinedBalances).forEach(
          (token, index) => {
            portfolio[index] = {
              'name': token,
              'balance': this.combinedBalances[token],
              'rate': this.exchangeRates[token][this.baseCurrency]['rate'],
              'holding': this.combinedBalances[token] * this.exchangeRates[token][this.baseCurrency]['rate'],
              '24hchange': this.exchangeRates[token][this.baseCurrency]['change']
            }
          }
        )
        // Now sort based on 'holding' value
        return portfolio.sort(function (a, b) {
          return parseFloat(b.holding) - parseFloat(a.holding)
        }
        )
      } else {
        return null
      }
    }
  },
  asyncComputed: {
    exchangeRates: {
      get () {
        if (this.combinedBalances !== null) {
          var rates = requestExchangeRates(Object.keys(this.combinedBalances))
          return rates
        }
      },
      default: null
    }
  },
  filters: {
    pretty: function (value) {
      return JSON.stringify(value, null, 2)
    },
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  components: {
    PortfolioTable
  },
  methods: {
    switchBaseCurrency (event, cur) {
      this.baseCurrency = cur
      localStorage.setItem('baseCurrency', cur)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#footer {
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>
