<template>
  <div id="wallets">
    <p>Overview of cryptocurrencies held in different wallets</p>
    <table>
      <tbody>
        <!-- <th class="header" v-for="(wallet, name) in walletBalances">{{name | capitalizeFirstLetter}}</th> -->
        <th> <i class="cc BTC largeicon"/> Bitcoin </th>
        <th> <i class="cc ETH largeicon"/> Ethereum </th>
        <th> <i class="cc NEO largeicon"/> Neo </th>
        <th> <i class="cc IOTA-alt largeicon"/> Iota </th>
        <tr>
          <td v-for="(blockchain, name) in walletBalances">
            <table class="subtable" v-for="(balances, address) in blockchain">
              <tr> 
                <td colspan="2" :title="address" class="str address">
                  <a href="http://etherscan.io/address/ + address">
                    <div style="height:100%;width:100%">
                      {{address | trimString(22)}}
                    </div>          
                  </a>
                </td>
              <tr>
              <tr v-for="(balance, token) in balances">
                <td class="str">{{token}} </td>
                <td class="nr">{{balance | round(3)}}</td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
asd
<script>
export default {
  data () {
    return {
      walletBalances: JSON.parse(localStorage.getItem('walletBalances'))
    }
  },
  name: 'Wallets',
  filters: {
    pretty: function (value) {
      return JSON.stringify(value, null, 2)
    },
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
      return value.toFixed(decimals)
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

/* th.str, td.str {
  text-align: left;
}

th.nr, td.nr {
  text-align: right;
} */
</style>