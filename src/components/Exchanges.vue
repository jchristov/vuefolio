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
              <td>{{token}}</td><td>{{balance}}</td>
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
    }
  }
}
</script>

<style scoped>
#exchanges {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

td {
  vertical-align: top;
}

tr {
  vertical-align: top;
}

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