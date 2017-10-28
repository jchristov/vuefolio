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
              <span class="address">{{address}}</span>
              <tr v-for="(balance, token) in balances">
                <td>{{token}} </td><td>{{balance}}</td>
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
    }
  }
}
</script>

<style scoped>
#wallets {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  margin: auto;
  width: 40%;
  text-align: left;
  font-size: 14px;
}

ul {
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

td {
  vertical-align: top;
}

tr {
  vertical-align: top;
}

.address{
  color: #42b983;
}

.header {
    text-decoration: underline;
    border-bottom: 2px;
}


.myjson{
  margin: auto;
  width: 40%;
  text-align: left;
}

</style>