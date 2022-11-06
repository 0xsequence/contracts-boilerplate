import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Migrations, MigrationsInterface } from "../../migrations/Migrations";
declare type MigrationsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Migrations__factory extends ContractFactory {
    constructor(...args: MigrationsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Migrations>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Migrations;
    connect(signer: Signer): Migrations__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610239806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100665780638da5cb5b14610082578063fdacd576146100c7575b600080fd5b61006461005f3660046101ad565b6100da565b005b61006f60015481565b6040519081526020015b60405180910390f35b6000546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610079565b6100646100d53660046101ea565b610189565b60005473ffffffffffffffffffffffffffffffffffffffff163303610186576001546040517ffdacd576000000000000000000000000000000000000000000000000000000008152829173ffffffffffffffffffffffffffffffffffffffff83169163fdacd576916101529160040190815260200190565b600060405180830381600087803b15801561016c57600080fd5b505af1158015610180573d6000803e3d6000fd5b50505050505b50565b60005473ffffffffffffffffffffffffffffffffffffffff16330361018657600155565b6000602082840312156101bf57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101e357600080fd5b9392505050565b6000602082840312156101fc57600080fd5b503591905056fea26469706673582212200bd91a284fe418a54e3798a9bb247144ad51a07861deb8eb29d849414e38683e64736f6c63430008110033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MigrationsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Migrations;
}
export {};
