<template>
  <div id="exchanges">
    <p>Overview of cryptocurrencies held on different exchanges</p>
  <table v-if="exchangeBalances">

    <!-- Display Exchange Balances -->
    <tr v-for="i in Math.ceil(Object.keys(exchangeBalances).length / 4)">
      <td v-for="exchangeName in Object.keys(exchangeBalances).slice((i - 1) * 4, i * 4)">
        <table class="subtable">
          <th class="header">
            {{exchangeName | capitalizeFirstLetter}}
          </th>
          <tr class="blank_row"></tr>
          <tr class="blank_row"></tr>
          <tr class="balances" v-for="(balance,token) in exchangeBalances[exchangeName]">
            <td class="str">{{token}}</td>
            <td class="nr">{{balance | round(3)}}</td>
          </tr>
          <tr class="blank_row"></tr>
          <tr class="blank_row"></tr>
        </table>
      </td>
    </tr>
    
  </table>  
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'exchanges',
  computed: mapGetters({
    exchangeBalances: 'getExchangeBalances',
    exchangeKeys: 'getExchangeKeys'
  }),
  filters: {
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    round: function (value, decimals) {
      return parseFloat(value).toFixed(decimals)
    }
  }
}
</script>

<style scoped>
.header {
    text-align: center;
}

table{
  margin: auto;
  width: 60%;
  text-align: left;
  font-size: 14px;
  table-layout: fixed;
  padding: 50px
}

table.subtable{
  margin: auto;
  width: 100%;
  text-align: left;
  font-size: 14px;
}

td {
  padding-left: 0px;
  padding-right: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
}

tr.balances:hover {
    background-color: lightgrey;
}

</style>