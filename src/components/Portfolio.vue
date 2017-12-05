<template>
  <div class="hello">
    <span v-if="(myPortfolio !== null)">
      <PortfolioTable :portfolio="myPortfolio" :currency="baseCurrency"/>
      <p>Switch base currency:</p>
      <p>
        <button @click="(event) => { switchBaseCurrency(event, 'BTC') }">BTC</button>
        <button @click="(event) => { switchBaseCurrency(event, 'ETH') }">ETH</button>
        <button @click="(event) => { switchBaseCurrency(event, 'EUR') }">EUR</button>
        <button @click="(event) => { switchBaseCurrency(event, 'USD') }">USD</button>
      </p>
    </span>
    <span v-else>
      <p>Hi. Go to Settings</p>
    </span>
  </div>
</template>

<script>
import PortfolioTable from './PortfolioTable'
import {mapGetters} from 'vuex'

export default {
  name: 'Portfolio',
  computed: mapGetters({
    myPortfolio: 'getPortfolio',
    baseCurrency: 'getBaseCurrency'
  }),
  components: {
    PortfolioTable
  },
  methods: {
    switchBaseCurrency (event, currency) {
      this.$store.commit('mutateBaseCurrency', currency)
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
