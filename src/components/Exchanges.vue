<template>
  <div id="exchanges">
    <p>Overview of cryptocurrencies held on different exchanges</p>
  <table>
    <tbody>

      <tr>
        <th v-for="item in exchangeKeys.slice(0,4)">
          {{item.name | capitalizeFirstLetter}}
        </th>
      </tr>

      <tr>
        <td v-for="item in exchangeKeys.slice(0,4)" v-if="exchangeBalances[item.name]">
          <table class="subtable">
            <tr class="balances" v-for="(balance,token) in exchangeBalances[item.name]">
                <td class="str">{{token}}</td>
                <td class="nr">{{balance | round(3)}}</td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <th v-for="item in exchangeKeys.slice(4,8)">
          <p>{{item.name | capitalizeFirstLetter}}</p>
        </th>
      </tr>

      <tr>
        <td v-for="item in exchangeKeys.slice(4,8)" v-if="exchangeBalances[item.name]">
          <table class="subtable">
            <tr class="balances" v-for="(balance,token) in exchangeBalances[item.name]">
                <td class="str">{{token}}</td>
                <td class="nr">{{balance | round(3)}}</td>
            </tr>
          </table>
        </td>
      </tr>

    </tbody>
  </table>  
  </div>
</template>

<script>
import loadExchangeKeys from '../functions/loadExchangeKeys.js'

export default {
  name: 'exchanges',
  data () {
    return {
      exchangeBalances: JSON.parse(localStorage.getItem('exchangeBalances')),
      exchangeKeys: loadExchangeKeys()
    }
  },
  filters: {
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    round: function (value, decimals) {
      return value.toFixed(decimals)
    }
  }
}
</script>

<style scoped>
.header {
    text-decoration: underline;
    border-bottom: 2px;
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