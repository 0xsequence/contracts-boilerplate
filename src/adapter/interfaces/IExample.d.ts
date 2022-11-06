import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IExampleInterface extends utils.Interface {
    functions: {
        "isExample(bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isExample"): FunctionFragment;
    encodeFunctionData(functionFragment: "isExample", values: [PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "isExample", data: BytesLike): Result;
    events: {};
}
export interface IExample extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IExampleInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        isExample(isExample: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    isExample(isExample: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isExample(isExample: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isExample(isExample: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isExample(isExample: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
