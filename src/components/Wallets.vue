<template>
  <div id="wallets">
    <p>Overview of cryptocurrencies held in different wallets</p>
    <table>
      <tbody>
        <tr>
          <th class="header" v-for="(wallet, name) in walletBalances">{{name | capitalizeFirstLetter}}</th>
        </tr>
        <tr>
          <td v-for="(blockchain, name) in walletBalances">
            <ul v-for="(balances, address) in blockchain">
              <span :title="address" class="address">{{address | trimString(25)}}</span>
              <tr v-for="(balance, token) in balances">
                <td>{{token}} </td><td>{{balance | round(6)}}</td>
              </tr>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
        trimStr = str.substring(0, maxStrLength) + '...'
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

ul {
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

.header {
    text-decoration: underline;
    border-bottom: 2px;
}
</style>