export default async function loadBalanceBTC (address) {
//   const url = 'https://api.BTCplorer.io/getAddressInfo/' + address
  const url = 'https://cors-anywhere.herokuapp.com/https://blockchain.info/q/addressbalance/' + address + '?confirmations=6'
  const response = await fetch(url, {})
  const json = await response.json()

  var balance = {}
  balance['BTC'] = json * Math.pow(10, -8) // From satoshi to bitcoin

  return balance
}
