export default function combineBalances (wallets, exchanges, manual) {
  // Input: jsons that contain balances for exchanges and wallets separately
  // Output: json that contains the combined balance for each token
  console.log(wallets)
  console.log(exchanges)
  console.log(manual)

  var combined = {}
  // Add balances from exchanges
  // exchanges json looks like this:
  //
  // exchanges = {
  //   "bittrex": {
  //     "BTC": 10,
  //     "ETH": 100
  //   }
  // }
  if (exchanges !== null) {
    Object.entries(exchanges).forEach(
      ([name, exchange]) => {
        Object.entries(exchange).forEach(
          ([token, balance]) => {
            if (combined.hasOwnProperty(token)) {
              combined[token] += balance
            } else {
              combined[token] = balance
            }
          }
        )
      }
    )
  }
// Add balances from wallets
// wallets json looks like this:
// wallets = {
//      "ethereum": {
//          "0x3A301f5858Da5FaEB424dA2210F3F3a0d949D456": {
//              "ETH": 100,
//              "DNT": 200000
//           }
//      }
// }
  if (wallets !== null) {
    Object.entries(wallets).forEach(
      ([whatever1, wallet]) => {
        Object.entries(wallet).forEach(
            ([whatever2, address]) => {
              Object.entries(address).forEach(
                ([token, balance]) => {
                  if (combined.hasOwnProperty(token)) {
                    combined[token] += balance
                  } else {
                    combined[token] = balance
                  }
                }
              )
            }
        )
      }
    )
  }

// Add balances from manual entries
// manual json looks like this:
// manual = [{'description': '..', 'token': '...', 'balance': '...'}]
  if (manual !== null) {
    Object.entries(manual).forEach(
      (entry) => {
        if (entry[1].token !== '') {
          if (combined.hasOwnProperty(entry[1].token)) {
            combined[entry[1].token] += parseFloat(entry[1].balance)
          } else {
            combined[entry[1].token] = parseFloat(entry[1].balance)
          }
        }
      }
    )
  }

  return combined
}
