<template>
  <div id="manual">
    <table>
      <tbody>
        <tr class="blank_row"/>
        <tr class="blank_row"/>
        <tr>
          <td colspan="3"> 
          <i class="fa fa-trash-o fa-2x" aria-hidden="true" v-on:click="deleteManualEntries"></i>
          </td>
        </tr>
        <tr class="blank_row">
        <tr v-for="item in manualBalances">
          <td><input class="input" type="text" placeholder="Description" v-model="item.description" v-on:change="changeManualEntry(item)"></td>
          <td><input class="input" type="text" placeholder="Token" v-model="item.token" v-on:change="changeManualEntry(item)"></td>
          <td><input class="input" type="text" placeholder="Balance" v-model="item.balance" v-on:change="changeManualEntry(item)"></td>
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
      // localStorage.removeItem('manualBalances')
      // this.manualBalances = loadManualEntries()
      this.manualBalances = [{'description': '', 'token': '', 'balance': ''}]
      localStorage.setItem('manualBalances', JSON.stringify(this.manualBalances))
    }
  }
}
</script>

<style scoped>
input.input {
  width: 100%;
}

td {
  padding-left: 0px;
  padding-right: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
}

table{
  /* margin: auto; */
  width: 40%;
}
</style>