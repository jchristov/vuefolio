import loadBalancesFromWallets from '../functions/loadBalancesFromWallets.js'
import loadBalancesFromExchanges from '../functions/loadBalancesFromExchanges.js'

export default async function loadBalances (walletKeys, exchangeKeys) {
  return Promise.all(
    [loadBalancesFromWallets(walletKeys), loadBalancesFromExchanges(exchangeKeys)]
  )
}
