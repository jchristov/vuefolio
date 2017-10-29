<template>
  <div id="settings">
    <p>Enter API keys for exchanges and public keys for cryptocurrencies held in your own wallets</p>
    <p>For Bitcoin: export xpub key using your wallet software. Does not work with Segwit (yet?)</p>
    <p>Ark not implemented yet</p>
    <table>
      <tbody>
        <tr>
          <th v-for="item in exchangeKeys">
              <p>{{capitalizeFirstLetter(item.name)}}</p>
          </th>
        </tr>
        <tr>
          <td v-for="item in exchangeKeys">
              <input class="input" type="text" placeholder="Enter API Key" v-model="item.apiKey" v-on:change="changeExchangeKey">
              <input class="input" type="text" placeholder="Enter API Secret" v-model="item.apiSecret" v-on:change="changeExchangeKey">
          </td>
        </tr>
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
    <button v-on:click="clearKeys">Clear</button>
    <button v-on:click="sync">Synchronize</button>
  </div>
</template>

<script>

import loadBalancesFromWallets from '../functions/loadBalancesFromWallets.js'
import loadBalancesFromExchanges from '../functions/loadBalancesFromExchanges.js'

function loadExchangeKeys () {
  let exchangeKeys

  if (localStorage.exchangeKeys) {
    exchangeKeys = JSON.parse(localStorage.exchangeKeys)
  } else {
    exchangeKeys = [
      {'name': 'bittrex', 'apiKey': '', 'apiSecret': ''},
      {'name': 'liqui', 'apiKey': '', 'apiSecret': ''},
      {'name': 'coinbase', 'apiKey': '', 'apiSecret': ''},
      {'name': 'bl3p', 'apiKey': '', 'apiSecret': ''}
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
      this.walletKeys = loadWalletKeys()
      this.exchangeKeys = loadExchangeKeys()
    },
    sync () {
      loadBalancesFromWallets(this.walletKeys).then(r => alert('Loaded balances from wallets'))
      loadBalancesFromExchanges(this.exchangeKeys).then(r => alert('Loaded balances from exchanges'))
    },
    capitalizeFirstLetter (string) {
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

</style>