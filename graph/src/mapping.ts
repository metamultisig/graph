import {
  KeyholderChanged as KeyholderChangedEvent,
  // ThresholdChanged as ThresholdChangedEvent,
  Transaction as TransactionEvent,
  // Deposit as DepositEvent
} from "../generated/Contract/Contract"
import {
  Keyholder, Transaction
} from "../generated/schema"

export function handleKeyholderChanged(event: KeyholderChangedEvent): void {
    let keyholder = Keyholder.load(event.address, event.params.keyholder);
    if (keyholder == null) {
        keyholder = new Keyholder(event.address, event.params.keyholder);
    }
    keyholder.weight = event.params.weight;
    keyholder.save();
}

// export function handleThresholdChanged(event: ThresholdChangedEvent): void {
//     let multisig = Multisig.load(event.address);
//     if (multisig == null) {
//         multisig = new Multisig(event.address);
//     }
//     multisig.threshold = event.params.threshold;
//     multisig.save();
// }

export function handleTransaction(event: TransactionEvent): void {
  let entity = new Transaction(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.multisig = event.address
  entity.destination = event.params.destination
  entity.value = event.params.value
  entity.data = event.params.data
  entity.nonce = event.params.nonce
  entity.returndata = event.params.returndata
  entity.signatories = event.params.signatories
  entity.save()
}
//
// export function handleDeposit(event: DepositEvent): void {
//   let entity = new Deposit(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.sender = event.params.sender
//   entity.value = event.params.value
//   entity.save()
// }
