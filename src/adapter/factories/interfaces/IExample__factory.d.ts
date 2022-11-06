import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IExample, IExampleInterface } from "../../interfaces/IExample";
export declare class IExample__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IExampleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IExample;
}
