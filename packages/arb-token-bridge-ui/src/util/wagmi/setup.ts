import { createClient, configureChains } from 'wagmi'
import { mainnet } from '@wagmi/core/chains'
import { publicProvider } from 'wagmi/providers/public'
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { trustWallet, okxWallet } from '@rainbow-me/rainbowkit/wallets'

import {
  sepolia
  // arbitrumNova,
  // arbitrumSepolia,
  // localL1Network as local,
  // localL2Network as arbitrumLocal,
  // localL3Network as l3Local,
  // holesky
} from './wagmiAdditionalNetworks'
import { isTestingEnvironment } from '../CommonUtils'
import { getCustomChainsFromLocalStorage, ChainId } from '../networks'
import { getAlephChains } from '../alephChainsList'
import { getWagmiChain } from './getWagmiChain'
import { customInfuraProvider } from '../infura'

const customChains = getCustomChainsFromLocalStorage().map(chain =>
  getWagmiChain(chain.chainId)
)
const wagmiOrbitChains = getAlephChains().map(chain =>
  getWagmiChain(chain.chainId)
)

const chainList = isTestingEnvironment
  ? [
      // mainnet, arb1, & arb nova are for network switch tests
      mainnet,
      // arbitrum,
      // arbitrumNova,
      // // sepolia & arb sepolia are for tx history panel tests
      sepolia,
      // arbitrumSepolia,
      // holesky,
      // Orbit chains
      ...wagmiOrbitChains,
      // // add local environments during testing
      // local,
      // arbitrumLocal,
      // l3Local,
      // user-added custom chains
      ...customChains
    ]
  : [
      mainnet,
      // arbitrum,
      // arbitrumNova,
      sepolia,
      // arbitrumSepolia,
      // holesky,
      ...wagmiOrbitChains,
      ...customChains
    ]

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

if (!projectId) {
  console.error('NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID variable missing.')
}

const appInfo = {
  appName: 'AlephZero EVM',
  projectId
}

enum TargetChainKey {
  Ethereum = 'mainnet',
  ArbitrumOne = 'arbitrum-one',
  ArbitrumNova = 'arbitrum-nova',
  Sepolia = 'sepolia',
  ArbitrumSepolia = 'arbitrum-sepolia'
}

function sanitizeTargetChainKey(targetChainKey: string | null): TargetChainKey {
  // Default to Ethereum Mainnet if nothing passed in
  if (targetChainKey === null) {
    return TargetChainKey.Ethereum
  }

  // Default to Ethereum Mainnet if invalid
  if (!(Object.values(TargetChainKey) as string[]).includes(targetChainKey)) {
    return TargetChainKey.Ethereum
  }

  return targetChainKey as TargetChainKey
}

function getChainId(targetChainKey: TargetChainKey): number {
  switch (targetChainKey) {
    case TargetChainKey.Ethereum:
      return ChainId.Ethereum

    case TargetChainKey.ArbitrumOne:
      return ChainId.ArbitrumOne

    case TargetChainKey.ArbitrumNova:
      return ChainId.ArbitrumNova

    case TargetChainKey.Sepolia:
      return ChainId.Sepolia

    case TargetChainKey.ArbitrumSepolia:
      return ChainId.ArbitrumSepolia
  }
}

function getChains(targetChainKey: TargetChainKey) {
  const targetChainId = getChainId(targetChainKey)

  // Doing `Array.filter` instead of `Array.find` in case it's empty, just in case.
  const target = chainList.filter(chain => chain.id === targetChainId)
  const others = chainList.filter(chain => chain.id !== targetChainId)

  return [...target, ...others]
}

export function getProps(targetChainKey: string | null) {
  const { chains, provider } = configureChains(
    // Wagmi selects the first chain as the one to target in WalletConnect, so it has to be the first in the array.
    //
    // https://github.com/wagmi-dev/references/blob/main/packages/connectors/src/walletConnect.ts#L114
    getChains(sanitizeTargetChainKey(targetChainKey)),
    [customInfuraProvider(), publicProvider()]
  )

  const { wallets } = getDefaultWallets({
    ...appInfo,
    chains
  })

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: 'More',
      wallets: [
        trustWallet({ chains, projectId }),
        okxWallet({ chains, projectId })
      ]
    }
  ])

  const client = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return {
    rainbowKitProviderProps: {
      appInfo,
      chains
    },
    wagmiConfigProps: {
      client
    }
  }
}
