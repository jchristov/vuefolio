<template>
  <div id="portfoliotable">
    <!-- <h1> Total: </h1> -->
    <table class="thin">
     
       <tr><td rowspan="4">Total:</td><td class="nr">{{totalValue['BTC'] | round(3)}} BTC</td></tr>
       <tr><td class="nr">{{totalValue['EUR'] | round(0)}} EUR</td></tr>
       <tr><td class="nr">{{totalValue['ETH'] | round(3)}} ETH</td></tr>
       <tr><td class="nr">{{totalValue['USD'] | round(0)}} USD</td></tr>
    
              <tr class="blank_row"></tr>
          <tr class="blank_row"></tr>
                    <tr class="blank_row"></tr>
          <tr class="blank_row"></tr>
    </table>
    <table v-if="!(portfolio === null)">
      <tbody>
        <tr>
          <th class="str"></th>
          <th class="str">Name</th>
          <th class="nr">Balance</th>
          <th class="nr">Price {{currenct}}</th>
          <th class="nr">Holding {{currency}}</th>
          <th class="nr">24h% Change</th>
        </tr>
        <template class="portfolio" v-for="(token, tokenIndex) in portfolio[currency]" v-if="token['holding'] > 0.001">
          <!-- Display BTC prices -->
          <tr class="portfolio">
          <td ><i :class="getIcon(token['name'])"></i></td>
          <td class="str">{{token['name']}}</td>
          <td class="nr">{{token['balance'] | round(3) }}</td>
          <td class="nr">{{token['rate'] | round(5)}}</td>
          <td class="nr">{{token['holding'] | round(2) }}</td>

          <td v-if="token['24hchange'] > 0.0" class="nrpos">{{token['24hchange'] | round(2) }}</td>
          <td v-else-if="token['24hchange'] < 0.0" class="nrneg">{{token['24hchange'] | round(2) }}</td>
          <td v-else class="nr">{{token['24hchange'] | round(2) }}</td>
          </tr>
          <!-- Display EUR prices -->
          <!-- </tr>
            <td></td>
            <td></td>
            <td></td>
            <td class="nr">{{portfolio['EUR'][tokenIndex]['rate'] | round(2)}} EUR</td>
            <td class="nr">{{portfolio['EUR'][tokenIndex]['holding'] | round(2) }} EUR</td>
            <td v-if="token['24hchange'] > 0.0" class="nrpos">{{portfolio['EUR'][tokenIndex]['24hchange'] | round(2) }}</td>
            <td v-else-if="token['24hchange'] < 0.0" class="nrneg">{{portfolio['EUR'][tokenIndex]['24hchange'] | round(2) }}</td>
            <td v-else class="nr">{{portfolio['EUR'][tokenIndex]['24hchange'] | round(2) }}</td>

          </tr> -->
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'portfoliotable',
  data () {
    return {
      total: 0.0
    }
  },
  props: ['portfolio', 'currency'],
  computed: mapGetters({
    totalValue: 'getTotal'
  }),
  methods: {
    getIcon: function (name) {
      return 'cc ' + name.toUpperCase()
    }
  },
  filters: {
    round: function (value, decimals) {
      return value.toFixed(decimals)
    }
  }
}
</script>

<style scoped>

tr.portfolio:hover {
    background-color: lightgrey;
}

.nrpos {
  text-align: right;
  color: #42b983; 
}

.nrneg {
  text-align: right;
  color: red; 
}

table{
  margin: auto;
  width: 50%;
  text-align: left;
  font-size: 16px;
  padding: 0px
}

table.thin{
  margin: auto;
  width: 15%;
  text-align: left;
  font-size: 16px;
  padding: 0px
}
</style>