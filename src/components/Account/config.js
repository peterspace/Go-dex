import Metamask from "./WalletIcons/metamaskWallet.png";
import Coin98 from "./WalletIcons/Coin98.png";
import WalletConnect from "./WalletIcons/wallet-connect.svg";
import MathWallet from "./WalletIcons/MathWallet.svg";
// import TokenPocket from "./WalletIcons/TokenPocket.svg";
// import SafePal from "./WalletIcons/SafePal.svg";
import TrustWallet from "./WalletIcons/TrustWallet.png";

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "metamask",
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
    priority: 2,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: "injected",
    priority: 3,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: "injected",
    priority: 999,
  },
//   {
//     title: "TokenPocket",
//     icon: TokenPocket,
//     connectorId: "injected",
//     priority: 999,
//   },
//   {
//     title: "SafePal",
//     icon: SafePal,
//     connectorId: "injected",
//     priority: 999,
//   },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: "injected",
    priority: 999,
  },
];


export const chains = [
    {
        title: "eth",
        currency: "ETH",
        priority: 1,
        hex: "0x1"
      },
    {
        title: "ropsten",
        currency: "ETH",
        priority: 2,
        hex: "0x3"
      },
    {
        title: "rinkeby",
        currency: "ETH",
        priority: 3,
        hex: "0x4"
      },
    {
        title: "goerli",
        currency: "ETH",
        priority: 4,
        hex: "0x5"
      },
    {
        title: "kovan",
        currency: "ETH",
        priority: 5,
        hex: "0x2a"
      },
    {
        title: "polygon",
        currency: "MATIC",
        priority: 6,
        hex: "0x89"
      },
    {
        title: "mumbai",
        currency: "MATIC",
        priority: 7,
        hex: "0x13881"
      },
    {
        title: "bsc",
        currency: "BNB",
        priority: 8,
        hex: "0x38"
      },
    {
        title: "avalanche",
        currency: "AVAX",
        priority: 9,
        hex: "0xa86a"
      },
    {
        title: "fantom",
        currency: "FTM",
        priority: 10,
        hex: "0xfa"
      },
    {
        title: "chronos",
        currency: "CRO",
        priority: 11,
        hex: "0x19"
      },
];