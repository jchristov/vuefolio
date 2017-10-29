import loadBalanceBTC from './Wallets/loadBalanceBTC'
import loadBalanceETH from './Wallets/loadBalanceETH'
import loadBalanceNEO from './Wallets/loadBalanceNEO'

export default async function loadBalancesFromWallets (walletKeys) {
  var walletBalances = {}

  for (let index in walletKeys) {
    let wallet = walletKeys[index]

    if (wallet.name === 'Bitcoin') {
      walletBalances['btc'] = {}

      await Promise.all(
        wallet.publicKeys.map(
          async address => {
            walletBalances['btc'][address] = await loadBalanceBTC(address)
          }
        )
      )
    }

    if (wallet.name === 'Ethereum') {
      walletBalances['ethereum'] = {}

      await Promise.all(
        wallet.publicKeys.map(
          async address => {
            walletBalances['ethereum'][address] = await loadBalanceETH(address)
          }
        )
      )
    }

    if (wallet.name === 'Neo') {
      walletBalances['neo'] = {}

      await Promise.all(
        wallet.publicKeys.map(
          async address => {
            walletBalances['neo'][address] = await loadBalanceNEO(address)
          }
        )
      )
    }
  }

  localStorage.setItem('walletBalances', JSON.stringify(walletBalances))
}
