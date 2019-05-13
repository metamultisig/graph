import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class KeyholderChanged extends EthereumEvent {
  get params(): KeyholderChanged__Params {
    return new KeyholderChanged__Params(this);
  }
}

export class KeyholderChanged__Params {
  _event: KeyholderChanged;

  constructor(event: KeyholderChanged) {
    this._event = event;
  }

  get keyholder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get weight(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ThresholdChanged extends EthereumEvent {
  get params(): ThresholdChanged__Params {
    return new ThresholdChanged__Params(this);
  }
}

export class ThresholdChanged__Params {
  _event: ThresholdChanged;

  constructor(event: ThresholdChanged) {
    this._event = event;
  }

  get threshold(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Transaction extends EthereumEvent {
  get params(): Transaction__Params {
    return new Transaction__Params(this);
  }
}

export class Transaction__Params {
  _event: Transaction;

  constructor(event: Transaction) {
    this._event = event;
  }

  get destination(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get nonce(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get returndata(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get signatories(): Array<Address> {
    return this._event.parameters[5].value.toAddressArray();
  }
}

export class Deposit extends EthereumEvent {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  threshold(): BigInt {
    let result = super.call("threshold", []);
    return result[0].toBigInt();
  }

  keyholders(param0: Address): BigInt {
    let result = super.call("keyholders", [EthereumValue.fromAddress(param0)]);
    return result[0].toBigInt();
  }

  getTransactionHash(
    destination: Address,
    value: BigInt,
    data: Bytes,
    nonce: BigInt
  ): Bytes {
    let result = super.call("getTransactionHash", [
      EthereumValue.fromAddress(destination),
      EthereumValue.fromUnsignedBigInt(value),
      EthereumValue.fromFixedBytes(data),
      EthereumValue.fromUnsignedBigInt(nonce)
    ]);
    return result[0].toBytes();
  }

  nextNonce(): BigInt {
    let result = super.call("nextNonce", []);
    return result[0].toBigInt();
  }
}

export class SubmitCall extends EthereumCall {
  get inputs(): SubmitCall__Inputs {
    return new SubmitCall__Inputs(this);
  }

  get outputs(): SubmitCall__Outputs {
    return new SubmitCall__Outputs(this);
  }
}

export class SubmitCall__Inputs {
  _call: SubmitCall;

  constructor(call: SubmitCall) {
    this._call = call;
  }

  get destination(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get nonce(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get sigs(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }
}

export class SubmitCall__Outputs {
  _call: SubmitCall;

  constructor(call: SubmitCall) {
    this._call = call;
  }
}

export class SetThresholdCall extends EthereumCall {
  get inputs(): SetThresholdCall__Inputs {
    return new SetThresholdCall__Inputs(this);
  }

  get outputs(): SetThresholdCall__Outputs {
    return new SetThresholdCall__Outputs(this);
  }
}

export class SetThresholdCall__Inputs {
  _call: SetThresholdCall;

  constructor(call: SetThresholdCall) {
    this._call = call;
  }

  get _threshold(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetThresholdCall__Outputs {
  _call: SetThresholdCall;

  constructor(call: SetThresholdCall) {
    this._call = call;
  }
}

export class SetKeyholderWeightCall extends EthereumCall {
  get inputs(): SetKeyholderWeightCall__Inputs {
    return new SetKeyholderWeightCall__Inputs(this);
  }

  get outputs(): SetKeyholderWeightCall__Outputs {
    return new SetKeyholderWeightCall__Outputs(this);
  }
}

export class SetKeyholderWeightCall__Inputs {
  _call: SetKeyholderWeightCall;

  constructor(call: SetKeyholderWeightCall) {
    this._call = call;
  }

  get keyholder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get weight(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetKeyholderWeightCall__Outputs {
  _call: SetKeyholderWeightCall;

  constructor(call: SetKeyholderWeightCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get weights(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _threshold(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends EthereumCall {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}
