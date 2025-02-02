import { Chain } from 'wagmi'
import * as chains from 'wagmi/chains'

import {
  ChainId,
  getCustomChainFromLocalStorageById,
  getSupportedChainIds
} from '../util/networks'
import * as customChains from '../util/wagmi/wagmiAdditionalNetworks'
import { getAlephChains, alephChains } from '../util/alephChainsList'
import { chainToWagmiChain } from '../util/wagmi/wagmiAdditionalNetworks'

const chainQueryParams = [
  'ethereum',
  'sepolia',
  'arbitrum-one',
  'arbitrum-nova',
  'arbitrum-sepolia',
  'custom-localhost',
  'arbitrum-localhost',
  'l3-localhost'
] as const

export type ChainKeyQueryParam = (typeof chainQueryParams)[number]
export type ChainQueryParam = ChainKeyQueryParam | ChainId | number | string

export function isValidChainQueryParam(value: string | number): boolean {
  if (typeof value === 'string') {
    const isValidCoreChainSlug = (
      chainQueryParams as readonly string[]
    ).includes(value)
    const isValidOrbitChainSlug = getAlephChains().some(
      chain => chain.slug === value
    )
    return isValidCoreChainSlug || isValidOrbitChainSlug
  }

  const supportedNetworkIds = getSupportedChainIds({ includeTestnets: true })
  return supportedNetworkIds.includes(value)
}

export function getChainQueryParamForChain(chainId: ChainId): ChainQueryParam {
  switch (chainId) {
    case ChainId.Ethereum:
      return 'ethereum'

    case ChainId.ArbitrumOne:
      return 'arbitrum-one'

    case ChainId.ArbitrumNova:
      return 'arbitrum-nova'

    case ChainId.Sepolia:
      return 'sepolia'

    case ChainId.ArbitrumSepolia:
      return 'arbitrum-sepolia'

    case ChainId.Local:
      return 'custom-localhost'

    case ChainId.ArbitrumLocal:
      return 'arbitrum-localhost'

    case ChainId.L3Local:
      return 'l3-localhost'

    default:
      const customChain = getCustomChainFromLocalStorageById(chainId)

      const orbitChain = alephChains[chainId]

      if (customChain) {
        return customChain.chainId
      }

      if (orbitChain) {
        return orbitChain.slug ?? orbitChain.chainId
      }

      throw new Error(
        `[getChainQueryParamForChain] Unexpected chain id: ${chainId}`
      )
  }
}

export function getChainForChainKeyQueryParam(
  chainKeyQueryParam: ChainKeyQueryParam
): Chain {
  switch (chainKeyQueryParam) {
    case 'ethereum':
      return chains.mainnet

    case 'sepolia':
      return chains.sepolia

    case 'arbitrum-one':
      return chains.arbitrum

    case 'arbitrum-nova':
      return customChains.arbitrumNova

    case 'arbitrum-sepolia':
      return customChains.arbitrumSepolia

    case 'custom-localhost':
      return customChains.localL1Network

    case 'arbitrum-localhost':
      return customChains.localL2Network

    case 'l3-localhost':
      return customChains.localL3Network

    default:
      const orbitChain = getAlephChains().find(
        chain =>
          chain.slug === chainKeyQueryParam ??
          chain.chainId === Number(chainKeyQueryParam)
      )

      if (orbitChain) {
        return chainToWagmiChain(orbitChain)
      }

      throw new Error(
        `[getChainForChainKeyQueryParam] Unexpected chainKeyQueryParam: ${chainKeyQueryParam}`
      )
  }
}
