/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Gifter, GifterInterface } from "../Gifter";

const _abi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "UPGRADE_INTERFACE_VERSION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "azero",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "gasPriceBid",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_azero",
        type: "address",
        internalType: "address",
      },
      {
        name: "_router",
        type: "address",
        internalType: "address",
      },
      {
        name: "_maxGas",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_gasPriceBid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "maxGas",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "outboundTransfer",
    inputs: [
      {
        name: "_token",
        type: "address",
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_retryable",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "router",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setAzero",
    inputs: [
      {
        name: "_azero",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setGasPriceBid",
    inputs: [
      {
        name: "_gasPriceBid",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMaxGas",
    inputs: [
      {
        name: "_maxGas",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRouter",
    inputs: [
      {
        name: "_router",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeToAndCall",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withdrawAzero",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967InvalidImplementation",
    inputs: [
      {
        name: "implementation",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967NonPayable",
    inputs: [],
  },
  {
    type: "error",
    name: "EnforcedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "ExpectedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedInnerCall",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "TransactionPerBlock",
    inputs: [],
  },
  {
    type: "error",
    name: "UUPSUnauthorizedCallContext",
    inputs: [],
  },
  {
    type: "error",
    name: "UUPSUnsupportedProxiableUUID",
    inputs: [
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100d4565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100725760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d15780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516116ec6100fd60003960008181610b3601528181610b5f0152610ca501526116ec6000f3fe6080604052600436106101355760003560e01c80638ce44b99116100ab578063bb3422c81161006f578063bb3422c814610332578063c0d7865514610352578063e30c397814610372578063e74a315514610387578063f2fde38b1461039a578063f887ea40146103ba57600080fd5b80638ce44b99146102675780638da5cb5b1461029f5780638e928076146102b4578063ad3cb1cc146102d4578063af8008881461031257600080fd5b806357fb25cc116100fd57806357fb25cc146101c25780635c975abb146101e25780635d942ac114610212578063715018a61461022857806379ba50971461023d5780638456cb591461025257600080fd5b80633f4ba83a1461013a57806347df2599146101515780634f1ef28614610171578063501d815c1461018457806352d1902d146101ad575b600080fd5b34801561014657600080fd5b5061014f6103da565b005b34801561015d57600080fd5b5061014f61016c366004611292565b6103ec565b61014f61017f36600461131e565b610416565b34801561019057600080fd5b5061019a60025481565b6040519081526020015b60405180910390f35b3480156101b957600080fd5b5061019a610435565b3480156101ce57600080fd5b5061014f6101dd3660046113b1565b610452565b3480156101ee57600080fd5b506000805160206116978339815191525460ff1660405190151581526020016101a4565b34801561021e57600080fd5b5061019a60035481565b34801561023457600080fd5b5061014f6105a8565b34801561024957600080fd5b5061014f6105ba565b34801561025e57600080fd5b5061014f610607565b34801561027357600080fd5b50600054610287906001600160a01b031681565b6040516001600160a01b0390911681526020016101a4565b3480156102ab57600080fd5b50610287610617565b3480156102c057600080fd5b5061014f6102cf366004611410565b61064c565b3480156102e057600080fd5b50610305604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516101a49190611479565b34801561031e57600080fd5b5061014f61032d36600461148c565b610659565b34801561033e57600080fd5b5061014f61034d366004611410565b610678565b34801561035e57600080fd5b5061014f61036d366004611292565b610685565b34801561037e57600080fd5b506102876106af565b6103056103953660046114c6565b6106d8565b3480156103a657600080fd5b5061014f6103b5366004611292565b610a14565b3480156103c657600080fd5b50600154610287906001600160a01b031681565b6103e2610a99565b6103ea610acb565b565b6103f4610a99565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b61041e610b2b565b61042782610bd0565b6104318282610bd8565b5050565b600061043f610c9a565b5060008051602061167783398151915290565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156104985750825b905060008267ffffffffffffffff1660011480156104b55750303b155b9050811580156104c3575080155b156104e15760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561050b57845460ff60401b1916600160401b1785555b600080546001600160a01b03808d166001600160a01b03199283161790925560018054928c16929091169190911790556002889055600387905561054e86610ce3565b610556610cf4565b831561059c57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050565b6105b0610a99565b6103ea6000610d04565b33806105c46106af565b6001600160a01b0316146105fb5760405163118cdaa760e01b81526001600160a01b03821660048201526024015b60405180910390fd5b61060481610d04565b50565b61060f610a99565b6103ea610d3c565b6000807f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005b546001600160a01b031692915050565b610654610a99565b600255565b610661610a99565b600054610431906001600160a01b03168383610d85565b610680610a99565b600355565b61068d610a99565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000807f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c0061063c565b60606106e2610de4565b3360009081526004602052604090205443900361071257604051637a30312360e01b815260040160405180910390fd5b336000818152600460205260409020439055859061073c906001600160a01b038316903087610e15565b600154604051635ed004ff60e11b81526001600160a01b03888116600483015290911690600090829063bda009fe90602401602060405180830381865afa15801561078b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107af9190611519565b60405163095ea7b360e01b81526001600160a01b038083166004830152602482018990529192509084169063095ea7b3906044016020604051808303816000875af1158015610802573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108269190611536565b5060006003546002546108399190611553565b60005460405163095ea7b360e01b81526001600160a01b03858116600483015260248201849052929350911690819063095ea7b3906044016020604051808303816000875af1158015610890573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b49190611536565b506040805160006020820181905260609282018390526080820181905291810184905260a0016040516020818303038152906040529050871561097f57846001600160a01b0316634fb1a07b348d8d8e8e600180896040518963ffffffff1660e01b815260040161092b9796959493929190611578565b60006040518083038185885af1158015610949573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f1916820160405261097291908101906115ca565b9650505050505050610a0c565b846001600160a01b0316634fb1a07b348d8d8e8e600254600354896040518963ffffffff1660e01b81526004016109bc9796959493929190611578565b60006040518083038185885af11580156109da573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f19168201604052610a0391908101906115ca565b96505050505050505b949350505050565b610a1c610a99565b7f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c0080546001600160a01b0319166001600160a01b0383169081178255610a60610617565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a35050565b33610aa2610617565b6001600160a01b0316146103ea5760405163118cdaa760e01b81523360048201526024016105f2565b610ad3610e54565b600080516020611697833981519152805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610bb257507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610ba6600080516020611677833981519152546001600160a01b031690565b6001600160a01b031614155b156103ea5760405163703e46dd60e11b815260040160405180910390fd5b610604610a99565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610c32575060408051601f3d908101601f19168201909252610c2f91810190611641565b60015b610c5a57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016105f2565b6000805160206116778339815191528114610c8b57604051632a87526960e21b8152600481018290526024016105f2565b610c958383610e84565b505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103ea5760405163703e46dd60e11b815260040160405180910390fd5b610ceb610eda565b61060481610f23565b610cfc610eda565b6103ea610f55565b7f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c0080546001600160a01b031916815561043182610f76565b610d44610de4565b600080516020611697833981519152805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833610b0d565b6040516001600160a01b03838116602483015260448201839052610c9591859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050610fe7565b6000805160206116978339815191525460ff16156103ea5760405163d93c066560e01b815260040160405180910390fd5b6040516001600160a01b038481166024830152838116604483015260648201839052610e4e9186918216906323b872dd90608401610db2565b50505050565b6000805160206116978339815191525460ff166103ea57604051638dfc202b60e01b815260040160405180910390fd5b610e8d8261104a565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115610ed257610c9582826110af565b610431611127565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff166103ea57604051631afcd79f60e31b815260040160405180910390fd5b610f2b610eda565b6001600160a01b0381166105fb57604051631e4fbdf760e01b8152600060048201526024016105f2565b610f5d610eda565b600080516020611697833981519152805460ff19169055565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000610ffc6001600160a01b03841683611146565b9050805160001415801561102157508080602001905181019061101f9190611536565b155b15610c9557604051635274afe760e01b81526001600160a01b03841660048201526024016105f2565b806001600160a01b03163b60000361108057604051634c9c8ce360e01b81526001600160a01b03821660048201526024016105f2565b60008051602061167783398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516110cc919061165a565b600060405180830381855af49150503d8060008114611107576040519150601f19603f3d011682016040523d82523d6000602084013e61110c565b606091505b509150915061111c85838361115b565b925050505b92915050565b34156103ea5760405163b398979f60e01b815260040160405180910390fd5b6060611154838360006111b7565b9392505050565b6060826111705761116b82611254565b611154565b815115801561118757506001600160a01b0384163b155b156111b057604051639996b31560e01b81526001600160a01b03851660048201526024016105f2565b5092915050565b6060814710156111dc5760405163cd78605960e01b81523060048201526024016105f2565b600080856001600160a01b031684866040516111f8919061165a565b60006040518083038185875af1925050503d8060008114611235576040519150601f19603f3d011682016040523d82523d6000602084013e61123a565b606091505b509150915061124a86838361115b565b9695505050505050565b8051156112645780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6001600160a01b038116811461060457600080fd5b6000602082840312156112a457600080fd5b81356111548161127d565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156112ee576112ee6112af565b604052919050565b600067ffffffffffffffff821115611310576113106112af565b50601f01601f191660200190565b6000806040838503121561133157600080fd5b823561133c8161127d565b9150602083013567ffffffffffffffff81111561135857600080fd5b8301601f8101851361136957600080fd5b803561137c611377826112f6565b6112c5565b81815286602083850101111561139157600080fd5b816020840160208301376000602083830101528093505050509250929050565b600080600080600060a086880312156113c957600080fd5b85356113d48161127d565b945060208601356113e48161127d565b9350604086013592506060860135915060808601356114028161127d565b809150509295509295909350565b60006020828403121561142257600080fd5b5035919050565b60005b8381101561144457818101518382015260200161142c565b50506000910152565b60008151808452611465816020860160208601611429565b601f01601f19169290920160200192915050565b602081526000611154602083018461144d565b6000806040838503121561149f57600080fd5b82356114aa8161127d565b946020939093013593505050565b801515811461060457600080fd5b600080600080608085870312156114dc57600080fd5b84356114e78161127d565b935060208501356114f78161127d565b925060408501359150606085013561150e816114b8565b939692955090935050565b60006020828403121561152b57600080fd5b81516111548161127d565b60006020828403121561154857600080fd5b8151611154816114b8565b808202811582820484141761112157634e487b7160e01b600052601160045260246000fd5b600060018060a01b03808a16835280891660208401528088166040840152508560608301528460808301528360a083015260e060c08301526115bd60e083018461144d565b9998505050505050505050565b6000602082840312156115dc57600080fd5b815167ffffffffffffffff8111156115f357600080fd5b8201601f8101841361160457600080fd5b8051611612611377826112f6565b81815285602083850101111561162757600080fd5b611638826020830160208601611429565b95945050505050565b60006020828403121561165357600080fd5b5051919050565b6000825161166c818460208701611429565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbccd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300a2646970667358221220572ebe99806383bc876fc084b20f5bbfc1dd31429be5b95a9d237a29ab64825064736f6c63430008190033";

type GifterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GifterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Gifter__factory extends ContractFactory {
  constructor(...args: GifterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Gifter> {
    return super.deploy(overrides || {}) as Promise<Gifter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Gifter {
    return super.attach(address) as Gifter;
  }
  override connect(signer: Signer): Gifter__factory {
    return super.connect(signer) as Gifter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GifterInterface {
    return new utils.Interface(_abi) as GifterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Gifter {
    return new Contract(address, _abi, signerOrProvider) as Gifter;
  }
}
