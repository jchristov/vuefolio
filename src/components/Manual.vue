<template>
  <div id="manual">
    <p>Manually enter balances for tokens held in wallets or on exchanges that are not supported</p> 
    <p>
      <i class="fa fa-trash-o fa-2x" aria-hidden="true" v-on:click="deleteManualBalances"></i>
    </p>
    <table>
      <tr v-for="item in manualBalances">
        <td><input class="input" type="text" placeholder="Description" v-model="item.description"></td>
        <td><input class="input" type="text" placeholder="Token" v-model="item.token" v-on:change="syncManualBalances(item)"></td>
        <td><input class="input" type="text" placeholder="Balance" v-model="item.balance" v-on:change="syncManualBalances(item)"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Manual',
  computed: mapGetters({
    manualBalances: 'getManualBalances'
  }),
  methods: {
    syncManualBalances (item) {
      if (item.token && item.balance) {
        this.$store.dispatch('syncManualBalances', item)
      }
    },
    deleteManualBalances () {
      this.$store.dispatch('deleteManualBalances')
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
  width: 40%;
}
</style>