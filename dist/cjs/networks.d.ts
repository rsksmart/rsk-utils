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
declare const networks: Network[];
export default networks;
