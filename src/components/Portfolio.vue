<template>
  <div class="hello">
    <span v-if="(portfolio !== null)">
      <p>Switch currency:
        <button @click="(event) => { switchCurrency(event, 'BTC') }">Ƀ</button>
        <button @click="(event) => { switchCurrency(event, 'ETH') }">Ξ</button>
        <button @click="(event) => { switchCurrency(event, 'EUR') }">€</button>
        <button @click="(event) => { switchCurrency(event, 'USD') }">$</button>
      </p>
      <PortfolioTable :portfolio="portfolio" :rates="exchangeRates" :currency="currency"/>
      
      <span id="footer">
        If you enjoy using this web app, please consider donating. 
        BTC: 3BUo1JcBpbG4JuG1QaPqCoPtDzPtGhh 
        ETH: 0x4cf2E9f6DBAd97Fd901568D37Bb7EfAE2F4f3
      </span>
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

var initialCurrency
if (localStorage.preferredCurrency) {
  initialCurrency = localStorage.preferredCurrency
} else {
  initialCurrency = 'BTC'
}

export default {
  name: 'Portfolio',
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
      if (this.walletBalances || this.exchangeBalances) {
        return combineBalances(this.walletBalances, this.exchangeBalances)
      } else {
        return null
      }
    }
  },
  asyncComputed: {
    exchangeRates: {
      get () {
        if (this.portfolio !== null) {
          var rates = requestExchangeRates(Object.keys(this.portfolio))
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

#footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>
