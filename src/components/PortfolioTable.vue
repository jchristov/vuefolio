<template>
  <div id="portfoliotable">
    <h1> Total Value of Portfolio: {{totalValue | round(2)}} {{currency}} </h1>
    <table>
      <tbody>
        <tr>
          <th class="str"></th>
          <th class="str">Name</th>
          <th class="nr">Balance</th>
          <th class="nr">Price in {{currency}}</th>
          <th class="nr">Value in {{currency}}</th>
          <th class="nr">24h% Change</th>
        </tr>
        <tr class="portfolio" v-if="!(portfolio === null)" v-for="token in portfolio">
          <td ><i :class="getIcon(token['name'])"></i></td>
          <td class="str">{{token['name']}}</td>
          <td class="nr">{{token['balance'] | round(3) }}</td>
          <td class="nr">{{token['rate'] | round(5)}}</td>
          <td class="nr">{{token['holding'] | round(2) }}</td>

          <td v-if="token['24hchange'] > 0.0" class="nrpos">{{token['24hchange'] | round(2) }}</td>
          <td v-else-if="token['24hchange'] < 0.0" class="nrneg">{{token['24hchange'] | round(2) }}</td>
          <td v-else class="nr">{{token['24hchange'] | round(2) }}</td>
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

      if (portfolio !== null) {
        portfolio.forEach(function (tokenInfo) {
          total += tokenInfo['holding']
        })
      }
      return total
    }
  },
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
</style>