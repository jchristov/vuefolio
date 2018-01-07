<template>
  <div id="wallets">
    <p>Overview of cryptocurrencies held in different wallets</p>

    <table v-if="walletBalances">

    <!-- Display Exchange Balances -->
    <tr v-for="i in Math.ceil(Object.keys(walletBalances).length / 4)">
      <td v-for="walletName in Object.keys(walletBalances).slice((i - 1) * 4, i * 4)">
        <table class="subtable">
          <th class="header">
            <i :class="getIcon(walletName)"></i>
            {{walletName | capitalizeFirstLetter}}
          </th>
          <tr>
            <table class="subtable" v-for="(balances, address) in walletBalances[walletName]">
              <tr class="blank_row"></tr> 
                <td colspan="2" :title="address" class="str address">
                  <a href="http://etherscan.io/address/ + address">
                    <div style="height:100%;width:100%">
                      {{address | trimString(22)}}
                    </div>          
                  </a>
                </td>
              <tr>
              <tr class="balances" v-for="(balance, token) in balances">
                <td class="str">{{token}} </td>
                <td class="nr">{{balance | round(3)}}</td>
              </tr>
            </table>
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
import getIcon from '../functions/getIcon.js'

export default {
  name: 'Wallets',
  computed: mapGetters({
    walletBalances: 'getWalletBalances'
  }),
  methods: {
    getIcon (token) {
      return getIcon(token)
    }
  },
  filters: {
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    trimString: function (str, maxStrLength) {
      var trimStr
      if (str.length > maxStrLength) {
        trimStr = str.substring(0, (maxStrLength / 2)) + '...' + str.substring(str.length - (maxStrLength / 2))
      } else {
        trimStr = str
      }
      return trimStr
    },
    round: function (value, decimals) {
      return parseFloat(value).toFixed(decimals)
    }
  }
}
</script>

<style scoped>

.address{
  color: #42b983;
}

table{
  margin: auto;
  width: 40%;
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

th.wallet {
  text-align: center;
}


</style>