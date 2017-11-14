<template>
  <div id="portfoliotable">
    <h1> Total Value of Portfolio: {{totalValue | round(2)}} {{currency}} </h1>
    <table>
      <tbody>
        <tr>
          <th class="str">Name</th>
          <th class="nr">Balance</th>
          <th class="nr">Price in {{currency}}</th>
          <th class="nr">Value in {{currency}}</th>
          <th class="nr">24h% Change</th>
        </tr>
        <tr v-if="!(rates === null)" v-for="balance,token,index in portfolio">
          <td class="str">{{token}}</td>
          <td class="nr">{{balance | round(3) }}</td>
          <td class="nr">{{rates[token][currency]['rate'] | round(5)}}</td>
          <td class="nr">{{balance * rates[token][currency]['rate'] | round(2) }}</td>

          <td v-if="rates[token][currency]['change'] > 0.0" class="nrpos">{{rates[token][currency]['change'] | round(2) }}</td>
          <td v-else-if="rates[token][currency]['change'] < 0.0" class="nrneg">{{rates[token][currency]['change'] | round(2) }}</td>
          <td v-else class="nr">{{rates[token][currency]['change'] | round(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'portfoliotable',
  data () {
    return {
      total: 0.0
    }
  },
  props: ['portfolio', 'rates', 'currency'],
  computed: {
    totalValue: function () {
      var total = 0.0
      var portfolio = this.portfolio
      var rates = this.rates
      var currency = this.currency

      if (!(rates === null)) {
        Object.keys(portfolio).forEach(function (token, index) {
          total += portfolio[token] * rates[token][currency]['rate']
        })
      }
      return total
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

.str {
  text-align: left;
}

.nr {
  text-align: right;
}

.nrpos {
  text-align: right;
  color: #42b983; 
}

.nrneg {
  text-align: right;
  color: red; 
}
</style>