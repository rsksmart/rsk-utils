export interface NativeCurrency {
    name: string;
    symbol: string;
    decimals: number;
  }
  
  export interface Explorer {
    name: string;
    url: string;
    standard: string;
    icon?: string;
  }
  
  export interface Feature {
    name: string;
  }
  
  export interface Ens {
    registry: string;
  }
  
  export interface Network {
    name: string;
    chain: string;
    rpc: string[];
    faucets: string[];
    nativeCurrency: NativeCurrency;
    infoURL: string;
    shortName: string;
    chainId: number;
    networkId: number;
    slip44?: number;
    ens?: Ens;
    explorers?: Explorer[];
    features?: Feature[];
    title?: string;
    icon?: string;
  }
  
  const networks: Network[] = [
    {
      name: "Ethereum Mainnet",
      chain: "ETH",
      icon: "ethereum",
      rpc: [
        "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
        "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
        "https://api.mycryptoapi.com/eth",
        "https://cloudflare-eth.com",
        "https://ethereum-rpc.publicnode.com",
        "wss://ethereum-rpc.publicnode.com",
        "https://mainnet.gateway.tenderly.co",
        "wss://mainnet.gateway.tenderly.co",
        "https://rpc.blocknative.com/boost",
        "https://rpc.flashbots.net",
        "https://rpc.flashbots.net/fast",
        "https://rpc.mevblocker.io",
        "https://rpc.mevblocker.io/fast",
        "https://rpc.mevblocker.io/noreverts",
        "https://rpc.mevblocker.io/fullprivacy",
        "https://eth.drpc.org",
        "wss://eth.drpc.org"
      ],
      features: [
        { name: "EIP155" },
        { name: "EIP1559" }
      ],
      faucets: [],
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
      },
      infoURL: "https://ethereum.org",
      shortName: "eth",
      chainId: 1,
      networkId: 1,
      slip44: 60,
      ens: {
        registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
      },
      explorers: [
        { name: "etherscan", url: "https://etherscan.io", standard: "EIP3091" },
        { name: "blockscout", url: "https://eth.blockscout.com", icon: "blockscout", standard: "EIP3091" },
        { name: "dexguru", url: "https://ethereum.dex.guru", icon: "dexguru", standard: "EIP3091" },
        { name: "Routescan", url: "https://ethereum.routescan.io", standard: "EIP3091" }
      ]
    },
    {
      name: "Ropsten",
      title: "Ethereum Testnet Ropsten",
      chain: "ETH",
      rpc: [
        "https://ropsten.infura.io/v3/${INFURA_API_KEY}",
        "wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}"
      ],
      faucets: [
        "http://fauceth.komputing.org?chain=3&address=${ADDRESS}",
        "https://faucet.ropsten.be?${ADDRESS}"
      ],
      nativeCurrency: {
        name: "Ropsten Ether",
        symbol: "ETH",
        decimals: 18
      },
      infoURL: "https://github.com/ethereum/ropsten",
      shortName: "rop",
      chainId: 3,
      networkId: 3,
      slip44: 1,
      ens: {
        registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
      },
      explorers: [
        { name: "etherscan", url: "https://ropsten.etherscan.io", standard: "EIP3091" }
      ]
    },
    {
      name: "Rinkeby",
      title: "Ethereum Testnet Rinkeby",
      chain: "ETH",
      rpc: [
        "https://rinkeby.infura.io/v3/${INFURA_API_KEY}",
        "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}"
      ],
      faucets: [
        "http://fauceth.komputing.org?chain=4&address=${ADDRESS}",
        "https://faucet.rinkeby.io"
      ],
      nativeCurrency: {
        name: "Rinkeby Ether",
        symbol: "ETH",
        decimals: 18
      },
      infoURL: "https://www.rinkeby.io",
      shortName: "rin",
      chainId: 4,
      networkId: 4,
      slip44: 1,
      ens: {
        registry: "0xe7410170f87102df0055eb195163a03b7f2bff4a"
      },
      explorers: [
        { name: "etherscan-rinkeby", url: "https://rinkeby.etherscan.io", standard: "EIP3091" }
      ]
    },
    {
      name: "Goerli",
      title: "Ethereum Testnet Goerli",
      chain: "ETH",
      rpc: [
        "https://goerli.infura.io/v3/${INFURA_API_KEY}",
        "wss://goerli.infura.io/v3/${INFURA_API_KEY}",
        "https://rpc.goerli.mudit.blog/",
        "https://ethereum-goerli-rpc.publicnode.com",
        "wss://ethereum-goerli-rpc.publicnode.com",
        "https://goerli.gateway.tenderly.co",
        "wss://goerli.gateway.tenderly.co"
      ],
      faucets: [
        "http://fauceth.komputing.org?chain=5&address=${ADDRESS}",
        "https://goerli-faucet.slock.it?address=${ADDRESS}",
        "https://faucet.goerli.mudit.blog"
      ],
      nativeCurrency: {
        name: "Goerli Ether",
        symbol: "ETH",
        decimals: 18
      },
      infoURL: "https://goerli.net/#about",
      shortName: "gor",
      chainId: 5,
      networkId: 5,
      slip44: 1,
      ens: {
        registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
      },
      explorers: [
        { name: "etherscan-goerli", url: "https://goerli.etherscan.io", standard: "EIP3091" },
        { name: "blockscout-goerli", url: "https://eth-goerli.blockscout.com", icon: "blockscout", standard: "EIP3091" }
      ]
    },
    {
      name: "Rootstock Mainnet",
      chain: "Rootstock",
      rpc: ["https://public-node.rsk.co", "https://mycrypto.rsk.co"],
      faucets: [],
      icon: "rootstock",
      nativeCurrency: {
        name: "Smart Bitcoin",
        symbol: "RBTC",
        decimals: 18
      },
      infoURL: "https://rootstock.io",
      shortName: "rsk",
      chainId: 30,
      networkId: 30,
      slip44: 137,
      explorers: [
        { name: "Rootstock Explorer", url: "https://explorer.rsk.co", standard: "EIP3091" },
        { name: "blockscout", url: "https://rootstock.blockscout.com", icon: "blockscout", standard: "EIP3091" }
      ]
    },
    {
      name: "Rootstock Testnet",
      chain: "Rootstock",
      rpc: ["https://public-node.testnet.rsk.co", "https://mycrypto.testnet.rsk.co"],
      faucets: ["https://faucet.rsk.co/"],
      icon: "rootstock",
      nativeCurrency: {
        name: "Testnet Smart Bitcoin",
        symbol: "tRBTC",
        decimals: 18
      },
      infoURL: "https://rootstock.io",
      shortName: "trsk",
      chainId: 31,
      networkId: 31,
      slip44: 1,
      explorers: [
        { name: "RSK Testnet Explorer", url: "https://explorer.testnet.rsk.co", standard: "EIP3091" }
      ]
    },
    {
      name: "Sepolia",
      title: "Ethereum Testnet Sepolia",
      chain: "ETH",
      rpc: [
        "https://rpc.sepolia.org",
        "https://rpc2.sepolia.org",
        "https://rpc-sepolia.rockx.com",
        "https://rpc.sepolia.ethpandaops.io",
        "https://sepolia.infura.io/v3/${INFURA_API_KEY}",
        "wss://sepolia.infura.io/v3/${INFURA_API_KEY}",
        "https://sepolia.gateway.tenderly.co",
        "wss://sepolia.gateway.tenderly.co",
        "https://ethereum-sepolia-rpc.publicnode.com",
        "wss://ethereum-sepolia-rpc.publicnode.com",
        "https://sepolia.drpc.org",
        "wss://sepolia.drpc.org",
        "https://rpc-sepolia.rockx.com",
        "https://eth-sepolia.g.alchemy.com/v2/WddzdzI2o9S3COdT73d5w6AIogbKq4X-"
      ],
      faucets: [
        "http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}"
      ],
      nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "ETH",
        decimals: 18
      },
      infoURL: "https://sepolia.otterscan.io",
      shortName: "sep",
      chainId: 11155111,
      networkId: 11155111,
      slip44: 1,
      explorers: [
        { name: "etherscan-sepolia", url: "https://sepolia.etherscan.io", standard: "EIP3091" },
        { name: "otterscan-sepolia", url: "https://sepolia.otterscan.io", standard: "EIP3091" },
        { name: "Routescan", url: "https://11155111.testnet.routescan.io", standard: "EIP3091" }
      ]
    }
  ];
  
  export default networks;
  