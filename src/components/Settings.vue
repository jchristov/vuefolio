<template>
  <div id="settings">
    <p>
      <i :class="mySyncIcon" aria-hidden="true" v-on:click="sync"></i>
      <span>&nbsp&nbsp&nbsp</span>
      <i class="fa fa-trash-o fa-2x" aria-hidden="true" v-on:click="clearKeys"></i>
    </p>
    <table>
      <tbody>
        <!-- <tr><td colspan="4"><h2>Supported Exchanges</h2></td></tr> -->
        <tr>
          <th v-for="item in exchangeKeys.slice(0,4)">
              <p>{{item.name | capitalizeFirstLetter}}</p>
          </th>
        </tr>
        <tr>
          <td v-for="item in exchangeKeys.slice(0,4)">
            <input class="input" type="text" placeholder="Enter API Key" v-model="item.apiKey" v-on:change="changeExchangeKey">
            <input class="input" type="text" placeholder="Enter API Secret" v-model="item.apiSecret" v-on:change="changeExchangeKey">
          </td>
        </tr>
        <tr>
          <th v-for="item in exchangeKeys.slice(4,8)">
              <p>{{item.name | capitalizeFirstLetter}}</p>
          </th>
        </tr>
        <tr>
          <td v-for="item in exchangeKeys.slice(4,8)">
            <input class="input" type="text" placeholder="Enter API Key" v-model="item.apiKey" v-on:change="changeExchangeKey">
            <input class="input" type="text" placeholder="Enter API Secret" v-model="item.apiSecret" v-on:change="changeExchangeKey">
          </td>
          <!-- <td> <i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i> </td> -->
        </tr>
        <!-- <tr><td colspan="4"><h2>Supported Wallets</h2></td></tr> -->
        <tr>
          <th vertical-align="top" v-for="wallet in walletKeys">
              <p><i :class="getIcon(wallet.name)"></i>
              {{wallet.name | capitalizeFirstLetter}}</p>
          </th>
        </tr>
        <tr> 
          <td vertical-align="top" v-for="wallet in walletKeys">
              <span v-for="(key,index) in wallet.publicKeys">
                <input class="input" v-model="wallet.publicKeys[index]" v-on:change="changeWalletKey(wallet,index,$event)">
              </span>
              <input class="input" value= '' placeholder="Enter Public Key" v-on:change="addWalletKey(wallet, $event)">
          </td>
        </tr>
      </tbody>
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
import loadExchangeKeys from '../functions/loadExchangeKeys.js'
import loadWalletKeys from '../functions/loadWalletKeys.js'
import getIcon from '../functions/getIcon.js'

export default {
  name: 'settings',
  data () {
    return {
      mySyncIcon: 'fa fa-refresh fa-2x',
      exchangeKeys: loadExchangeKeys(),
      walletKeys: loadWalletKeys()
    }
  },
  methods: {
    changeExchangeKey () {
      localStorage.setItem('exchangeKeys', JSON.stringify(this.exchangeKeys))
    },
    addWalletKey (wallet, event) {
      wallet.publicKeys.push(event.target.value)
      localStorage.setItem('walletKeys', JSON.stringify(this.walletKeys))
      event.target.value = ''
    },
    changeWalletKey (wallet, index, event) {
      wallet.publicKeys[index] = event.target.value

      // Remove input line after emptying
      if (event.target.value === '') {
        wallet.publicKeys.splice(index, 1)
      }
      localStorage.setItem('walletKeys', JSON.stringify(this.walletKeys))
    },
    clearKeys () {
      localStorage.removeItem('exchangeKeys')
      localStorage.removeItem('walletKeys')
      localStorage.removeItem('exchangeBalances')
      localStorage.removeItem('walletBalances')
      this.walletKeys = loadWalletKeys()
      this.exchangeKeys = loadExchangeKeys()
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
</style>