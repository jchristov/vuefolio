<template>
  <div id="settings">
    <p>
      <i :class="myIcon" aria-hidden="true" v-on:click="sync"></i>
      <span>&nbsp&nbsp&nbsp</span>
      <i class="fa fa-trash-o fa-2x" aria-hidden="true" v-on:click="clearKeys"></i>
    </p>
    <table>
      <tbody>
        <!-- <tr><td colspan="4"><h2>Supported Exchanges</h2></td></tr> -->
        <tr>
          <th v-for="item in exchangeKeys.slice(0,4)">
              <p>{{capitalizeFirstLetter(item.name)}}</p>
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
              <p>{{capitalizeFirstLetter(item.name)}}</p>
          </th>
        </tr>
        <tr>
          <td v-for="item in exchangeKeys.slice(4,8)">
            <input class="input" type="text" placeholder="Enter API Key" v-model="item.apiKey" v-on:change="changeExchangeKey">
            <input class="input" type="text" placeholder="Enter API Secret" v-model="item.apiSecret" v-on:change="changeExchangeKey">
          </td>
          <td> <i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i> </td>
        </tr>
        <!-- <tr><td colspan="4"><h2>Supported Wallets</h2></td></tr> -->
        <tr>
          <th vertical-align="top" v-for="wallet in walletKeys">
              <p>{{capitalizeFirstLetter(wallet.name)}}</p>
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

    <h3>Instructions</h3>
      <p>Enter API keys for exchanges and public keys for cryptocurrencies held in your own wallets and press the sync button</p>
      <p>Then go back to "Portfolio"</p>
      <p>For Bitcoin: export xpub key using your wallet software. Does not work with Segwit (yet?)</p>
      <p>For Ethereum: all ERC20 token balances are loaded as well</p>
      <p>Ark not implemented yet</p>
    </p>
  </div>
</template>

<script>

import loadBalances from '../functions/loadBalances.js'
// import loadBalancesFromWallets from '../functions/loadBalancesFromWallets.js'
// import loadBalancesFromExchanges from '../functions/loadBalancesFromExchanges.js'

function loadExchangeKeys () {
  let exchangeKeys

  if (localStorage.exchangeKeys) {
    exchangeKeys = JSON.parse(localStorage.exchangeKeys)
  } else {
    exchangeKeys = [
      {'name': 'bittrex', 'apiKey': '', 'apiSecret': ''},
      {'name': 'liqui', 'apiKey': '', 'apiSecret': ''},
      {'name': 'coinbase', 'apiKey': '', 'apiSecret': ''},
      {'name': 'bl3p', 'apiKey': '', 'apiSecret': ''},
      {'name': 'bitfinex', 'apiKey': '', 'apiSecret': ''},
      {'name': 'poloniex', 'apiKey': '', 'apiSecret': ''}
    ]
  }
  return exchangeKeys
}

function loadWalletKeys () {
  let walletKeys

  if (localStorage.walletKeys) {
    walletKeys = JSON.parse(localStorage.walletKeys)
  } else {
    walletKeys = [
      {'name': 'Bitcoin', 'publicKeys': []},
      {'name': 'Ethereum', 'publicKeys': []},
      {'name': 'Neo', 'publicKeys': []},
      {'name': 'Ark', 'publicKeys': []}
    ]
  }
  return walletKeys
}

export default {
  name: 'settings',
  data () {
    return {
      myIcon: 'fa fa-refresh fa-2x',
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
      // var stopRotating = this.stopRotating
      loadBalances(this.walletKeys, this.exchangeKeys).then(r => this.stopRotating())
      // loadBalancesFromWallets(this.walletKeys).then(r => stopRotating())
      // loadBalancesFromExchanges(this.exchangeKeys).then(r => stopRotating())
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    startRotating () {
      this.myIcon = 'fa fa-spin fa-refresh fa-2x'
    },
    stopRotating () {
      this.myIcon = 'fa fa-refresh fa-2x'
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
  width: 200px;
  color: #42b983;
}

.fa:hover {
    color: #42b983;
}
</style>