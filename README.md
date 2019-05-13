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

## Credits

Project [icon](wallet.png) made by <a href="https://www.freepik.com/" title="Freepik" target="_blank">Freepik</a> 
from <a href="https://www.flaticon.com/free-icon/wallet_1660895" title="Flaticon" target="_blank">www.flaticon.com</a> 
is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
