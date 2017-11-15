<template>
  <div id="exchanges">
    <p>Overview of cryptocurrencies held on different exchanges</p>
  <table>
    <tbody>
      <tr>
        <th class="header" v-for="(exchange, name) in exchangeBalances">
          {{name | capitalizeFirstLetter}}
        </th>
      </tr>
      <tr>
        <td v-for="(exchange, name) in exchangeBalances">
          <tr v-for="(balance,token) in exchange">
              <td>{{token}}</td><td>{{balance | round(6)}}</td>
          </tr>
        </td>
      </tr>
    </tbody>
  </table>  
  </div>
</template>

<script>
export default {
  name: 'exchanges',
  data () {
    return {
      exchangeBalances: JSON.parse(localStorage.getItem('exchangeBalances'))
    }
  },
  filters: {
    pretty: function (value) {
      return JSON.stringify(value, null, 2)
    },
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
  width: 40%;
  text-align: left;
  font-size: 14px;
}
</style>