// import { configureChains, createClient, mainnet } from 'wagmi';
import { configureChains, createClient } from 'wagmi';

// import {
//   Connector,
//   WagmiConfig,
//   configureChains,
//   createClient,
//   erc20ABI,
//   useAccount,
//   useBalance,
//   useBlockNumber,
//   useChainId,
//   useClient,
//   useConnect,
//  useDisconnect,
//   useNetwork,
//   useProvider,
//   useSendTransaction,
//   useSignMessage,
//   useSignTypedData,
//   useSigner,
//   useSwitchNetwork,
//   useToken,
//   useTransaction,
//   useWaitForTransaction,
//   useWebSocketProvider,

// } from 'wagmi'
import { Buffer } from 'buffer';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc';

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { LedgerConnector } from 'wagmi/connectors/ledger';
// import { InjectedConnector } from 'wagmi/dist/connectors/injected';

import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  crossbell,
  evmos,
  evmosTestnet,
  fantom,
  fantomTestnet,
  filecoin,
  filecoinHyperspace,
  foundry,
  gnosis,
  gnosisChiado,
  goerli,
  hardhat,
  iotex,
  iotexTestnet,
  localhost,
  mainnet,
  metis,
  metisGoerli,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia,
  taraxa,
  taraxaTestnet,
  zkSync,
  zkSyncTestnet,
} from 'wagmi/chains';

// 2. Configure wagmi client

const wallet_connect_projectId = 'fa4fe244f13323cd21bd73b70a93856a';
const alchemyApiKey = 'jRhAgeSzRgS2hFsjtg6ITLCCdcpxSoYy';

const infuraId = 'f82937f93a6348d0b39f7a43a80c7974';

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)

if (typeof window !== 'undefined' && !window.Buffer) window.Buffer = Buffer;
//======={Case 3}===============================================================
const { chains, provider, webSocketProvider } = configureChains(
  // [mainnet],
  // [mainnet, polygon, avalanche, arbitrum, bsc, optimism, fantom, zkSync],
  [arbitrum, mainnet, polygon, polygonMumbai, goerli, arbitrumGoerli, bsc],
  [
    // alchemyProvider({ apiKey: alchemyApiKey }),
    // infuraProvider({ infuraId }),
    publicProvider(),
  ]
);
//======={Case 3}===============================================================
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
        shimChainChangedDisconnect: false,
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
    new LedgerConnector({
      chains,
      // options: {
      //   enableDebugLogs: true,
      // },
    }),
  ],
  provider,
  webSocketProvider,
});

export { wagmiClient, chains };
