# Subgraph for the Meta Multisig 

Graph explorer is deployed here: https://thegraph.com/explorer/subgraph/radek1st/multisig

Sample queries:

* List transaction details for a given multisig:

```
{
  transactions(
    where: {
      multisig: "0x7993c2776ccfc2be1270ea7b1df739f2c478afa0"
    }
  ) {
    destination
    value
    data
    #returndata
    #nonce
    signatories
  }
}
```

* List all multisigs for a given keyholder:

```
{
  keyholders(
    where: {
      address: "0xd4a0d9531bf28c26869c526b2cad2f2eb77d3844",
    	weight_gt: 0}) {
    #id
    #address
    multisig
    #weight
  }
}
```
