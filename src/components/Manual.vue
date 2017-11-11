<template>
  <div id="manual">
    <table>
      <tbody>
          ASDASDAS
        <tr> 
          <i class="fa fa-trash-o fa-2x" aria-hidden="true" v-on:click="deleteManualEntries"></i>
        </tr>
        <tr v-for="item in manualBalances">
          <input class="input" type="text" placeholder="Description" v-model="item.description" v-on:change="changeManualEntry(item)">
          <input class="input" type="text" placeholder="Token" v-model="item.token" v-on:change="changeManualEntry(item)">
          <input class="input" type="text" placeholder="Balance" v-model="item.balance" v-on:change="changeManualEntry(item)">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

function loadManualEntries () {
  if (localStorage.manualBalances) {
    return JSON.parse(localStorage.getItem('manualBalances'))
  } else {
    return [{'description': '', 'token': '', 'balance': ''}]
  }
}

export default {
  data () {
    return {
      manualBalances: loadManualEntries()
    }
  },
  name: 'Manual',
  methods: {
    changeManualEntry (item) {
      // Remove input line after emptying
      if ((item.description === '') && (item.token === '') && (item.balance === '')) {
        var index = this.manualBalances.indexOf(item)
        this.manualBalances.splice(index, 1)
        localStorage.setItem('manualBalances', JSON.stringify(this.manualBalances))
      }
      // Add line only when all three inputs are filled
      if ((item.description !== '') && (item.token !== '') && (item.balance !== '')) {
        if (this.manualBalances.indexOf(item) === (this.manualBalances.length - 1)) {
          this.manualBalances.push({'description': '', 'token': '', 'balance': ''})
          localStorage.setItem('manualBalances', JSON.stringify(this.manualBalances))
        }
      }
    },
    deleteManualEntries () {
      localStorage.removeItem('manualBalances')
      this.manualBalances = loadManualEntries()
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

ul{
  width: 40%;
  text-align: center;
}

table{
  margin: auto;
  width: 40%;
  vertical-align: top;
}

td {
  vertical-align: top;
}

tr {
  vertical-align: top;
}

.input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  /* width: 50px; */
  color: #42b983;
}

</style>