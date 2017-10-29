<template>
  <div class="hello">
    <button @click="switchCurrency">Switch Currency</button>
    <PortfolioTable :portfolio="portfolio" :rates="exchangeRates" :currency="currency"/>
  </div>
</template>

<script>
import combineBalances from '../functions/combineBalances.js'
import requestExchangeRates from '../functions/requestExchangeRates.js'
import PortfolioTable from './PortfolioTable'

export default {
  name: 'HelloWorld',
  data () {
    return {
      walletBalances: JSON.parse(localStorage.getItem('walletBalances')),
      exchangeBalances: JSON.parse(localStorage.getItem('exchangeBalances')),
      currencies: ['EUR', 'BTC', 'ETH', 'USD'],
      currency: 'ETH'
    }
  },
  computed: {
    portfolio: function () {
      return combineBalances(this.walletBalances, this.exchangeBalances)
    }
  },
  asyncComputed: {
    exchangeRates: {
      get () {
        var rates = requestExchangeRates(Object.keys(this.portfolio))
        console.log(rates)
        return rates
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
    switchCurrency: function () {
      var index = this.currencies.findIndex(cur => (cur === this.currency))
      this.currency = this.currencies[(index + 1) % 4]
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
</style>
