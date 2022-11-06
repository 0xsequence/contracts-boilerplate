import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Example, ExampleInterface } from "../Example";
declare type ExampleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Example__factory extends ContractFactory {
    constructor(...args: ExampleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Example>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Example;
    connect(signer: Signer): Example__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060ac8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b49a6f5c14602d575b600080fd5b603b6038366004604f565b90565b604051901515815260200160405180910390f35b600060208284031215606057600080fd5b81358015158114606f57600080fd5b939250505056fea2646970667358221220da1fff60ffdb09d93570bc575a9ec975e493c6ad30514723acdc8f6657c9189c64736f6c63430008110033";
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
    static createInterface(): ExampleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Example;
}
export {};
