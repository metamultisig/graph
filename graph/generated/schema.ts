import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

// export class Multisig extends Entity {
//     constructor(address: Bytes) {
//         super();
//         //this.set("address", Value.fromBytes(address));
//         let id = Value.fromString(address.toHexString());
//         this.set("id", id);
//     }
//
//     save(): void {
//         let id = this.get("id");
//         assert(id !== null, "Cannot save Multisig entity without an ID");
//         assert(
//             id.kind == ValueKind.STRING,
//             "Cannot save Multisig entity with non-string ID. " +
//             'Considering using .toHex() to convert the "id" to a string.'
//         );
//         store.set("Multisig", id.toString(), this);
//     }
//
//     static load(id: Bytes): Multisig | null {
//         return store.get("Multisig", id.toHexString()) as Multisig | null;
//     }
//
//     get id(): string {
//         let value = this.get("id");
//         return value.toString();
//     }
//
//     // set updateKeyholder(value: Keyholder) {
//     //   //this.set("id", Value.fromString(value));
//     // }
//   //list keyholders
//
//     // get address(): Bytes {
//     //     let value = this.get("address");
//     //     return value.toBytes();
//     // }
//
//     get threshold(): BigInt {
//         let value = this.get("weight");
//         return value.toBigInt();
//     }
//
//     set threshold(value: BigInt) {
//         this.set("threshold", Value.fromBigInt(value));
//     }
// }

export class Keyholder extends Entity {
  constructor(multisigAddress: Bytes, keyholderAddress: Bytes) {
    super();
    this.set("address", Value.fromBytes(keyholderAddress));
    this.set("multisig", Value.fromBytes(multisigAddress));

    let id = Value.fromString(multisigAddress.toHexString() + "-" + keyholderAddress.toHexString());
    this.set("id", id);
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Keyholder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Keyholder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Keyholder", id.toString(), this);
  }

  static load(keyholderAddress: Bytes, multisigAddress: Bytes): Keyholder | null {
    let id = multisigAddress.toHexString() + "-" + keyholderAddress.toHexString();
    return store.get("Keyholder", id) as Keyholder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  // set id(value: string) {
  //   this.set("id", Value.fromString(value));
  // }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  get multisig(): Bytes {
      let value = this.get("multisig");
      return value.toBytes();
  }

  get weight(): BigInt {
    let value = this.get("weight");
    return value.toBigInt();
  }

  set weight(value: BigInt) {
    this.set("weight", Value.fromBigInt(value));
  }
}

// export class ThresholdChanged extends Entity {
//   constructor(id: string) {
//     super();
//     this.set("id", Value.fromString(id));
//   }
//
//   save(): void {
//     let id = this.get("id");
//     assert(id !== null, "Cannot save ThresholdChanged entity without an ID");
//     assert(
//       id.kind == ValueKind.STRING,
//       "Cannot save ThresholdChanged entity with non-string ID. " +
//         'Considering using .toHex() to convert the "id" to a string.'
//     );
//     store.set("ThresholdChanged", id.toString(), this);
//   }
//
//   static load(id: string): ThresholdChanged | null {
//     return store.get("ThresholdChanged", id) as ThresholdChanged | null;
//   }
//
//   get id(): string {
//     let value = this.get("id");
//     return value.toString();
//   }
//
//   set id(value: string) {
//     this.set("id", Value.fromString(value));
//   }
//
//   get threshold(): BigInt {
//     let value = this.get("threshold");
//     return value.toBigInt();
//   }
//
//   set threshold(value: BigInt) {
//     this.set("threshold", Value.fromBigInt(value));
//   }
// }

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get destination(): Bytes {
    let value = this.get("destination");
    return value.toBytes();
  }

  set destination(value: Bytes) {
    this.set("destination", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get multisig(): Bytes {
      let value = this.get("multisig");
      return value.toBytes();
  }

  set multisig(value: Bytes) {
      this.set("multisig", Value.fromBytes(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    return value.toBigInt();
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get returndata(): Bytes {
    let value = this.get("returndata");
    return value.toBytes();
  }

  set returndata(value: Bytes) {
    this.set("returndata", Value.fromBytes(value));
  }

  get signatories(): Array<Bytes> {
    let value = this.get("signatories");
    return value.toBytesArray();
  }

  set signatories(value: Array<Address>) {
    this.set("signatories", Value.fromAddressArray(value));
  }
}

//
// export class Deposit extends Entity {
//   constructor(id: string) {
//     super();
//     this.set("id", Value.fromString(id));
//   }
//
//   save(): void {
//     let id = this.get("id");
//     assert(id !== null, "Cannot save Deposit entity without an ID");
//     assert(
//       id.kind == ValueKind.STRING,
//       "Cannot save Deposit entity with non-string ID. " +
//         'Considering using .toHex() to convert the "id" to a string.'
//     );
//     store.set("Deposit", id.toString(), this);
//   }
//
//   static load(id: string): Deposit | null {
//     return store.get("Deposit", id) as Deposit | null;
//   }
//
//   get id(): string {
//     let value = this.get("id");
//     return value.toString();
//   }
//
//   set id(value: string) {
//     this.set("id", Value.fromString(value));
//   }
//
//   get sender(): Bytes {
//     let value = this.get("sender");
//     return value.toBytes();
//   }
//
//   set sender(value: Bytes) {
//     this.set("sender", Value.fromBytes(value));
//   }
//
//   get value(): BigInt {
//     let value = this.get("value");
//     return value.toBigInt();
//   }
//
//   set value(value: BigInt) {
//     this.set("value", Value.fromBigInt(value));
//   }
// }
