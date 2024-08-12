import { TokenBridge } from '@arbitrum/sdk/dist/lib/dataEntities/networks'
import { NativeCurrencyBase } from '../hooks/useNativeCurrency'
import { ChainWithRpcUrl } from './networks'

export type NetworkType =
  | 'Ethereum'
  | 'Rollup'
  | 'AnyTrust'
  | 'Ethereum Testnet'
  | 'Arbitrum Testnet'

export type BridgeUiConfig = {
  color: `#${string}`
  network: {
    name: string
    logo: string
    description?: string
  }
  nativeTokenData?: NativeCurrencyBase
}

export type AlephZeroChainConfig = Omit<ChainWithRpcUrl, 'tokenBridge'> &
  ChainWithRpcUrl & {
    bridgeUiConfig: BridgeUiConfig
    tokenBridge: TokenBridge & { gifter: string }
  }

export const alephMainnets: {
  [key: number]: AlephZeroChainConfig
} = {
  41455: {
    confirmPeriodBlocks: 150, // 20,
    chainId: 41455,
    parentChainId: 1,
    ethBridge: {
      bridge: '0x41Ec9456AB918f2aBA81F38c03Eb0B93b78E84d9',
      inbox: '0x56D8EC76a421063e1907503aDd3794c395256AEb',
      sequencerInbox: '0xF75206c49c1694594E3e69252E519434f1579876',
      outbox: '0x73bb50c32a3BD6A1032aa5cFeA048fBDA3D6aF6e',
      rollup: '0x1CA12290D954CFe022323b6A6Df92113ed6b1C98'
    },
    nativeToken: '0xdD0ae774F7E300CdAA4EA371cD55169665Ee6AFe',
    explorerUrl: 'https://evm-explorer.alephzero.org/',
    rpcUrl: 'https://rpc.alephzero.raas.gelato.cloud',
    name: 'Aleph Zero EVM',
    slug: 'alephzero',
    retryableLifetimeSeconds: 604800,
    isCustom: true,
    isTestnet: false,
    tokenBridge: {
      parentGatewayRouter: '0xeBb17f398ed30d02F2e8733e7c1e5cf566e17812',
      childGatewayRouter: '0xD296d45171B97720D3aBdb68B0232be01F1A9216',
      parentErc20Gateway: '0xccaF21F002EAF230c9Fa810B34837a3739B70F7B', // StandardGateway
      childErc20Gateway: '0x2A5a79061b723BBF453ef7E07c583C750AFb9BD6',
      parentCustomGateway: '0x23fB23e5917777bDF9006112Db4675821743A08a',
      childCustomGateway: '0x2f70c8E4B7e168869db1bA7c33DDeDC90A0618F8',
      parentWethGateway: '0x0000000000000000000000000000000000000000',
      childWethGateway: '0x0000000000000000000000000000000000000000',
      parentWeth: '0x0000000000000000000000000000000000000000',
      childWeth: '0x0000000000000000000000000000000000000000',
      parentProxyAdmin: '0x80622fe04c5e1c3fbb3A9c62996dB27B53E9F77b',
      childProxyAdmin: '0x8974CcD2c5D4DaB95795aFC69d2Ec5D02F935680',
      parentMultiCall: '0x7cdCB0Cc61f47B8Dd8f47C5A29edaDd84a1BDf5e',
      childMultiCall: '0xadA1e2BD204b976Da39699bd051264425c78D060',
      gifter: '0xE15AEB63EB2bF58A73DD871f4a1CF0D0A97f80f3'
    },
    bridgeUiConfig: {
      color: '#036752',
      network: {
        name: 'Aleph Zero EVM',
        logo: '/images/azero/AzeroLogo.svg',
        description: 'The Aleph Zero EVM.'
      },
      nativeTokenData: {
        name: 'AZERO',
        symbol: 'AZERO',
        decimals: 18,
        logoUrl: '/images/azero/AzeroLogo.svg'
      }
    }
  }
}

export const alpehTestnets: { [key in number]: AlephZeroChainConfig } = {
  2039: {
    confirmPeriodBlocks: 150, // TODO: change value to mach the actual confirmation period of the A0EVM Testnet,
    chainId: 2039,
    parentChainId: 11155111,
    ethBridge: {
      bridge: '0xCB5c0B38C45Fad0C20591E26b0b3C3809123994A',
      inbox: '0xb27fd27987a71a6B77Fb8705bFb6010C411083EB',
      sequencerInbox: '0x16Ef70c48EF4BaaCfdaa4AfdD37F69332832a0bD',
      outbox: '0x1aE032759B823A71e08675Bab2bBaf9d6f26549C',
      rollup: '0xC8C08A4DbbF3367c8441151591c3d935947CB42F'
    },
    nativeToken: '0x88607eBfa048E7898db5ECA9A0fbFf6bd9f959ee',
    explorerUrl: 'https://evm-explorer-testnet.alephzero.org',
    rpcUrl: 'https://rpc.alephzero-testnet.gelato.digital',
    name: 'Aleph Zero EVM Testnet',
    slug: 'alephzero-testnet',
    retryableLifetimeSeconds: 604800,
    isCustom: true,
    isTestnet: true,
    tokenBridge: {
      parentGatewayRouter: '0x834082BD7cF3DaE7e892B4d259DaE8Ed33623f47',
      childGatewayRouter: '0x39420aF084d60834F5BCbF29717cFf9EA57a0a6d',
      parentErc20Gateway: '0xa4FB064D61c993FCa95251fc94AbAd6b57dD87DB', // StandardGateway
      childErc20Gateway: '0x55804f8400F25434626c18BcCBF932BFD0675cC6',
      parentCustomGateway: '0x3f6E38497771d4494F5E15d0EC2c3823A7024737',
      childCustomGateway: '0x8f27844677A4Fb322eE1e90419e7bEe8188D8c56',
      parentWethGateway: '0x0000000000000000000000000000000000000000',
      childWethGateway: '0x0000000000000000000000000000000000000000',
      parentWeth: '0x0000000000000000000000000000000000000000',
      childWeth: '0x0000000000000000000000000000000000000000',
      parentProxyAdmin: '0xf2BB1c98E9530C5367323332e99813508C3eD0B1',
      childProxyAdmin: '0x8F8806B8076EF35841311f044aA05B6e6115444C',
      parentMultiCall: '0x73465577E9FD7Cd585E4270F23A9eBa99B92b6eD',
      childMultiCall: '0x0edFEe11783D9f03cFF25D644f2FB64B1E70c773',
      gifter: '0x0c33916c3ABfB6AA1cd784e22dDea4DBF869Ba64'
    },
    bridgeUiConfig: {
      color: '#07B48F',
      network: {
        name: 'Aleph Zero EVM Testnet',
        logo: '/images/azero/AzeroLogo.svg',
        description: 'The testnet for Alephians.'
      },
      nativeTokenData: {
        name: 'Test AZERO',
        symbol: 'TZERO',
        decimals: 18,
        logoUrl: '/images/azero/AzeroLogo.svg'
      }
    }
  }
}

export const alephChains = { ...alephMainnets, ...alpehTestnets }

export function getAlephChains(
  {
    mainnet,
    testnet
  }: {
    mainnet: boolean
    testnet: boolean
  } = { mainnet: true, testnet: true }
): AlephZeroChainConfig[] {
  const mainnetChains = mainnet ? Object.values(alephMainnets) : []
  const testnetChains = testnet ? Object.values(alpehTestnets) : []

  return [...mainnetChains, ...testnetChains]
}

export function getInboxAddressFromOrbitChainId(chainId: number) {
  return (
    getAlephChains()
      //
      .find(chain => chain.chainId === chainId)?.ethBridge.inbox
  )
}

export function getChainIdFromInboxAddress(inboxAddress: string) {
  return getAlephChains().find(
    chain => chain.ethBridge.inbox.toLowerCase() === inboxAddress.toLowerCase()
  )?.chainId
}
