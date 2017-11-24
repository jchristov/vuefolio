<template>
  <div id="settings">
    <p>
      <i :class="mySyncIcon" aria-hidden="true" v-on:click="sync"></i>
      <span>&nbsp&nbsp&nbsp</span>
      <i class="fa fa-trash-o fa-2x" aria-hidden="true" v-on:click="clearKeys"></i>
    </p>
    <table>

        <!-- Display Exchange Keys -->
        <tr v-for="i in Math.ceil(exchangeKeys.length / 4)">
          <td v-for="item in exchangeKeys.slice((i - 1) * 4, i * 4)">
            <table class="subtable">
              <th class="myheader">{{item.name | capitalizeFirstLetter}}</th>
              <tr class="blank_row"></tr>
              <tr class="blank_row"></tr>
              <tr>
                <input class="input" type="text" placeholder="Enter API Key" v-on:input="changeExchangeKey(item.name,'apiKey',$event)">
              </tr>
              <tr>
                <input class="input" type="text" placeholder="Enter API Secret" v-on:input="changeExchangeKey(item.name,'apiSecret',$event)">
              </tr>
              <tr class="blank_row"></tr>
              <tr class="blank_row"></tr>
            </table>
          </td>
        </tr>

        <!-- Display Wallet Keys -->
        <tr v-for="i in Math.ceil(walletKeys.length / 4)">
          <td v-for="wallet in walletKeys.slice((i - 1) * 4, i * 4)">
            <table class="subtable">
              
              <th class="myheader">
                <i :class="getIcon(wallet.name)"></i>
                {{wallet.name | capitalizeFirstLetter}}
              </th>
              <tr class="blank_row"></tr>
              <tr class="blank_row"></tr>
              <tr v-for="(key,index) in wallet.publicKeys">
                <input class="input" v-model="wallet.publicKeys[index]" v-on:input="changeWalletKey(wallet,index,$event)">
              </tr>
              <input class="input" value= '' placeholder="Enter Public Key" v-on:change="changeWalletKey(wallet, wallet.publicKeys.length, $event)">
              <tr class="blank_row"></tr>
              <tr class="blank_row"></tr>
            </table>
          </td>
        </tr>

    </table>

    <!-- <h3>Instructions</h3>
      <p>Enter API keys for exchanges and public keys for cryptocurrencies held in your own wallets and press the sync button</p>
      <p>Then go back to "Portfolio"</p>
      <p>For Bitcoin: export xpub key using your wallet software. Does not work with Segwit (yet?)</p>
      <p>For Ethereum: all ERC20 token balances are loaded as well</p>
      <p>Ark not implemented yet</p>
    </p>
    <h3>If you enjoy using this web app, please consider donating. </h3>
      <p><i class="cc BTC"></i>&nbsp 3BUo1JcBpbG4JuG1QaPqCoPtDzPtGhh</p> 
      <p><i class="cc ETH"></i>&nbsp 0x4cf2E9f6DBAd97Fd901568D37Bb7EfAE2F4f3</p> -->
  </div>
</template>

<script>

import loadBalances from '../functions/loadBalances.js'
import getIcon from '../functions/getIcon.js'

import {mapGetters} from 'vuex'

export default {
  name: 'settings',
  data () {
    return {
      mySyncIcon: 'fa fa-refresh fa-2x'
    }
  },
  computed: mapGetters({
    exchangeKeys: 'getExchangeKeys',
    walletKeys: 'getWalletKeys'
  }),
  methods: {
    changeExchangeKey (exchange, keyType, event) {
      const payload = {
        'exchange': exchange,
        'keyType': keyType,
        'key': event.target.value
      }
      this.$store.commit('changeExchangeKey', payload)
    },
    changeWalletKey (wallet, keyIndex, event) {
      const payload = {
        'wallet': wallet,
        'keyIndex': keyIndex,
        'key': event.target.value
      }
      if (wallet.publicKeys.length === keyIndex) {
        event.target.value = ''
      }
      this.$store.commit('changeWalletKey', payload)
    },
    clearKeys () {
      this.$store.commit('clearKeys')
    },
    sync () {
      this.startRotating()
      loadBalances(this.walletKeys, this.exchangeKeys).then(r => this.stopRotating())
    },
    startRotating () {
      this.mySyncIcon = 'fa fa-spin fa-refresh fa-2x'
    },
    stopRotating () {
      this.mySyncIcon = 'fa fa-refresh fa-2x'
    },
    getIcon (token) {
      return getIcon(token)
    }
  },
  filters: {
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
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
  margin: auto;
  width: 60%;
  text-align: left;
  font-size: 14px;
  table-layout: fixed;
  padding: 50px
}

th.myheader{
  text-align: center;
}

table.subtable{
  margin: auto;
  width: 100%;
  /* text-align: left; */
  font-size: 14px;
}
</style>