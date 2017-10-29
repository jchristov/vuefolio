<template>
  <div class="hello">
    <p>Switch currency:
      <button @click="(event) => { switchCurrency(event, 'BTC') }">Ƀ</button>
      <button @click="(event) => { switchCurrency(event, 'ETH') }">Ξ</button>
      <button @click="(event) => { switchCurrency(event, 'EUR') }">€</button>
      <button @click="(event) => { switchCurrency(event, 'USD') }">$</button>
    </p>
    <PortfolioTable :portfolio="portfolio" :rates="exchangeRates" :currency="currency"/>
  </div>
</template>

<script>
import combineBalances from '../functions/combineBalances.js'
import requestExchangeRates from '../functions/requestExchangeRates.js'
import PortfolioTable from './PortfolioTable'

var initialCurrency
if (localStorage.preferredCurrency) {
  initialCurrency = localStorage.preferredCurrency
} else {
  initialCurrency = 'BTC'
}

export default {
  name: 'HelloWorld',
  data () {
    return {
      walletBalances: JSON.parse(localStorage.getItem('walletBalances')),
      exchangeBalances: JSON.parse(localStorage.getItem('exchangeBalances')),
      currencies: ['EUR', 'BTC', 'ETH', 'USD'],
      currency: initialCurrency
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
    switchCurrency (event, cur) {
      this.currency = cur
      localStorage.setItem('preferredCurrency', cur)
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
