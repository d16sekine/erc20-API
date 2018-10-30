// You can include this file into your client-side javascript application to gain access to the "human_standard_token_abi" variable.
// This ABI can be used to interact with any Standard ERC-20 or Human Standard Token on the Ethereum Blockchain
module.exports.human_standard_token_abi = 
    {
        "contractName": "MyTokens",
        "abi": [
          {
            "constant": false,
            "inputs": [
              {
                "name": "_spender",
                "type": "address"
              },
              {
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_from",
                "type": "address"
              },
              {
                "name": "_to",
                "type": "address"
              },
              {
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "INITIAL_SUPPLY",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "_decimals",
            "outputs": [
              {
                "name": "",
                "type": "uint8"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_spender",
                "type": "address"
              },
              {
                "name": "_subtractedValue",
                "type": "uint256"
              }
            ],
            "name": "decreaseApproval",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_to",
                "type": "address"
              },
              {
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "_symbol",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "_name",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_spender",
                "type": "address"
              },
              {
                "name": "_addedValue",
                "type": "uint256"
              }
            ],
            "name": "increaseApproval",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              },
              {
                "name": "_spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          }
        ],
        "bytecode": "0x60806040526040805190810160405280600e81526020017f53616d706c6544617070436f696e00000000000000000000000000000000000081525060039080519060200190620000519291906200011c565b506040805190810160405280600381526020017f5344430000000000000000000000000000000000000000000000000000000000815250600490805190602001906200009f9291906200011c565b506012600560006101000a81548160ff021916908360ff1602179055506103e8600655348015620000cf57600080fd5b50600654600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001cb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200015f57805160ff191683800117855562000190565b8280016001018555821562000190579182015b828111156200018f57825182559160200191906001019062000172565b5b5090506200019f9190620001a3565b5090565b620001c891905b80821115620001c4576000816000905550600101620001aa565b5090565b90565b61133780620001db6000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b3146100bf57806318160ddd1461012457806323b872dd1461014f5780632ff2e9dc146101d457806332424aa3146101ff578063661884631461023057806370a0823114610295578063a9059cbb146102ec578063b09f126614610351578063d28d8852146103e1578063d73dd62314610471578063dd62ed3e146104d6575b600080fd5b3480156100cb57600080fd5b5061010a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061054d565b604051808215151515815260200191505060405180910390f35b34801561013057600080fd5b5061013961063f565b6040518082815260200191505060405180910390f35b34801561015b57600080fd5b506101ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610649565b604051808215151515815260200191505060405180910390f35b3480156101e057600080fd5b506101e9610a04565b6040518082815260200191505060405180910390f35b34801561020b57600080fd5b50610214610a0a565b604051808260ff1660ff16815260200191505060405180910390f35b34801561023c57600080fd5b5061027b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a1d565b604051808215151515815260200191505060405180910390f35b3480156102a157600080fd5b506102d6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610caf565b6040518082815260200191505060405180910390f35b3480156102f857600080fd5b50610337600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cf7565b604051808215151515815260200191505060405180910390f35b34801561035d57600080fd5b50610366610f17565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103a657808201518184015260208101905061038b565b50505050905090810190601f1680156103d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103ed57600080fd5b506103f6610fb5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561043657808201518184015260208101905061041b565b50505050905090810190601f1680156104635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047d57600080fd5b506104bc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611053565b604051808215151515815260200191505060405180910390f35b3480156104e257600080fd5b50610537600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061124f565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561069857600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561072357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561075f57600080fd5b6107b0826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112d690919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610843826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112ef90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061091482600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112d690919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b600560009054906101000a900460ff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610b2f576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bc3565b610b4283826112d690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610d4657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d8257600080fd5b610dd3826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112d690919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e66826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112ef90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fad5780601f10610f8257610100808354040283529160200191610fad565b820191906000526020600020905b815481529060010190602001808311610f9057829003601f168201915b505050505081565b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561104b5780601f106110205761010080835404028352916020019161104b565b820191906000526020600020905b81548152906001019060200180831161102e57829003601f168201915b505050505081565b60006110e482600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112ef90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008282111515156112e457fe5b818303905092915050565b6000818301905082811015151561130257fe5b809050929150505600a165627a7a72305820267ee02d7e2b3c7746f89554f62276dec89347ae955c6b4d67cbeef8d45d4fd70029",
        "deployedBytecode": "0x6080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b3146100bf57806318160ddd1461012457806323b872dd1461014f5780632ff2e9dc146101d457806332424aa3146101ff578063661884631461023057806370a0823114610295578063a9059cbb146102ec578063b09f126614610351578063d28d8852146103e1578063d73dd62314610471578063dd62ed3e146104d6575b600080fd5b3480156100cb57600080fd5b5061010a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061054d565b604051808215151515815260200191505060405180910390f35b34801561013057600080fd5b5061013961063f565b6040518082815260200191505060405180910390f35b34801561015b57600080fd5b506101ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610649565b604051808215151515815260200191505060405180910390f35b3480156101e057600080fd5b506101e9610a04565b6040518082815260200191505060405180910390f35b34801561020b57600080fd5b50610214610a0a565b604051808260ff1660ff16815260200191505060405180910390f35b34801561023c57600080fd5b5061027b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a1d565b604051808215151515815260200191505060405180910390f35b3480156102a157600080fd5b506102d6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610caf565b6040518082815260200191505060405180910390f35b3480156102f857600080fd5b50610337600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cf7565b604051808215151515815260200191505060405180910390f35b34801561035d57600080fd5b50610366610f17565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103a657808201518184015260208101905061038b565b50505050905090810190601f1680156103d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103ed57600080fd5b506103f6610fb5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561043657808201518184015260208101905061041b565b50505050905090810190601f1680156104635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047d57600080fd5b506104bc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611053565b604051808215151515815260200191505060405180910390f35b3480156104e257600080fd5b50610537600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061124f565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561069857600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561072357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561075f57600080fd5b6107b0826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112d690919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610843826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112ef90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061091482600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112d690919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b600560009054906101000a900460ff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610b2f576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bc3565b610b4283826112d690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610d4657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d8257600080fd5b610dd3826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112d690919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e66826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112ef90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fad5780601f10610f8257610100808354040283529160200191610fad565b820191906000526020600020905b815481529060010190602001808311610f9057829003601f168201915b505050505081565b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561104b5780601f106110205761010080835404028352916020019161104b565b820191906000526020600020905b81548152906001019060200180831161102e57829003601f168201915b505050505081565b60006110e482600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112ef90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008282111515156112e457fe5b818303905092915050565b6000818301905082811015151561130257fe5b809050929150505600a165627a7a72305820267ee02d7e2b3c7746f89554f62276dec89347ae955c6b4d67cbeef8d45d4fd70029",
        "sourceMap": "99:363:1:-;;;141:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;201:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;276:2;251:27;;;;;;;;;;;;;;;;;;;;313:4;284:33;;388:71;8:9:-1;5:2;;;30:1;27;20:12;5:2;388:71:1;440:14;;416:9;:21;426:10;416:21;;;;;;;;;;;;;;;:38;;;;99:363;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
        "deployedSourceMap": "99:363:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:188:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1814:188:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;389:83:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;389:83:3;;;;;;;;;;;;;;;;;;;;;;;726:470:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;726:470:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;284:33:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;284:33:1;;;;;;;;;;;;;;;;;;;;;;;251:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;251:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;3679:432:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3679:432:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1149:99:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1149:99:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;626:321;;8:9:-1;5:2;;;30:1;27;20:12;5:2;626:321:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;201:29:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;201:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;201:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;141:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;141:38:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;141:38:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2926:296:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2926:296:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2321:153:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:188;1881:4;1925:6;1893:7;:19;1901:10;1893:19;;;;;;;;;;;;;;;:29;1913:8;1893:29;;;;;;;;;;;;;;;:38;;;;1963:8;1942:38;;1951:10;1942:38;;;1973:6;1942:38;;;;;;;;;;;;;;;;;;1993:4;1986:11;;1814:188;;;;:::o;389:83:3:-;433:7;455:12;;448:19;;389:83;:::o;726:470:6:-;832:4;864:8;:15;873:5;864:15;;;;;;;;;;;;;;;;854:6;:25;;846:34;;;;;;;;904:7;:14;912:5;904:14;;;;;;;;;;;;;;;:26;919:10;904:26;;;;;;;;;;;;;;;;894:6;:36;;886:45;;;;;;;;960:1;945:17;;:3;:17;;;;937:26;;;;;;;;988:27;1008:6;988:8;:15;997:5;988:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;970:8;:15;979:5;970:15;;;;;;;;;;;;;;;:45;;;;1037:25;1055:6;1037:8;:13;1046:3;1037:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;:41;;;;1097:38;1128:6;1097:7;:14;1105:5;1097:14;;;;;;;;;;;;;;;:26;1112:10;1097:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1068:7;:14;1076:5;1068:14;;;;;;;;;;;;;;;:26;1083:10;1068:26;;;;;;;;;;;;;;;:67;;;;1162:3;1146:28;;1155:5;1146:28;;;1167:6;1146:28;;;;;;;;;;;;;;;;;;1187:4;1180:11;;726:470;;;;;:::o;284:33:1:-;;;;:::o;251:27::-;;;;;;;;;;;;;:::o;3679:432:6:-;3785:4;3799:16;3818:7;:19;3826:10;3818:19;;;;;;;;;;;;;;;:29;3838:8;3818:29;;;;;;;;;;;;;;;;3799:48;;3877:8;3857:16;:28;;3853:165;;;3927:1;3895:7;:19;3903:10;3895:19;;;;;;;;;;;;;;;:29;3915:8;3895:29;;;;;;;;;;;;;;;:33;;;;3853:165;;;3981:30;3994:16;3981:8;:12;;:30;;;;:::i;:::-;3949:7;:19;3957:10;3949:19;;;;;;;;;;;;;;;:29;3969:8;3949:29;;;;;;;;;;;;;;;:62;;;;3853:165;4049:8;4028:61;;4037:10;4028:61;;;4059:7;:19;4067:10;4059:19;;;;;;;;;;;;;;;:29;4079:8;4059:29;;;;;;;;;;;;;;;;4028:61;;;;;;;;;;;;;;;;;;4102:4;4095:11;;3679:432;;;;;:::o;1149:99:3:-;1205:7;1227:8;:16;1236:6;1227:16;;;;;;;;;;;;;;;;1220:23;;1149:99;;;:::o;626:321::-;689:4;719:8;:20;728:10;719:20;;;;;;;;;;;;;;;;709:6;:30;;701:39;;;;;;;;769:1;754:17;;:3;:17;;;;746:26;;;;;;;;802:32;827:6;802:8;:20;811:10;802:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;779:8;:20;788:10;779:20;;;;;;;;;;;;;;;:55;;;;856:25;874:6;856:8;:13;865:3;856:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;840:8;:13;849:3;840:13;;;;;;;;;;;;;;;:41;;;;913:3;892:33;;901:10;892:33;;;918:6;892:33;;;;;;;;;;;;;;;;;;938:4;931:11;;626:321;;;;:::o;201:29:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;141:38::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2926:296:6:-;3027:4;3081:46;3115:11;3081:7;:19;3089:10;3081:19;;;;;;;;;;;;;;;:29;3101:8;3081:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3041:7;:19;3049:10;3041:19;;;;;;;;;;;;;;;:29;3061:8;3041:29;;;;;;;;;;;;;;;:87;;;;3160:8;3139:61;;3148:10;3139:61;;;3170:7;:19;3178:10;3170:19;;;;;;;;;;;;;;;:29;3190:8;3170:29;;;;;;;;;;;;;;;;3139:61;;;;;;;;;;;;;;;;;;3213:4;3206:11;;2926:296;;;;:::o;2321:153::-;2420:7;2444;:15;2452:6;2444:15;;;;;;;;;;;;;;;:25;2460:8;2444:25;;;;;;;;;;;;;;;;2437:32;;2321:153;;;;:::o;1060:116:2:-;1120:7;1148:2;1142;:8;;1135:16;;;;;;1169:2;1164;:7;1157:14;;1060:116;;;;:::o;1238:128::-;1298:9;1324:2;1319;:7;1315:11;;1344:2;1339:1;:7;;1332:15;;;;;;1360:1;1353:8;;1238:128;;;;:::o",
        "source": "pragma solidity ^0.4.22;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\n\ncontract MyTokens is StandardToken {\n\n    string public _name = \"SampleDappCoin\";  //変更可能\n    string public _symbol = \"SDC\"; //変更可能\n    uint8 public _decimals = 18;\n    uint public INITIAL_SUPPLY = 1000; //変更可能\n\n    mapping(address => uint) private _balances;\n\n    constructor() public {\n     _balances[msg.sender] = INITIAL_SUPPLY;\n  }\n\n}\n",
        "sourcePath": "C:\\Users\\Daisuke\\Documents\\truffle-sample\\token\\contracts\\MyTokens.sol",
        "ast": {
          "absolutePath": "/C/Users/Daisuke/Documents/truffle-sample/token/contracts/MyTokens.sol",
          "exportedSymbols": {
            "MyTokens": [
              89
            ]
          },
          "id": 90,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 58,
              "literals": [
                "solidity",
                "^",
                "0.4",
                ".22"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:24:1"
            },
            {
              "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
              "file": "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
              "id": 59,
              "nodeType": "ImportDirective",
              "scope": 90,
              "sourceUnit": 602,
              "src": "26:71:1",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "baseContracts": [
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 60,
                    "name": "StandardToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 601,
                    "src": "120:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_StandardToken_$601",
                      "typeString": "contract StandardToken"
                    }
                  },
                  "id": 61,
                  "nodeType": "InheritanceSpecifier",
                  "src": "120:13:1"
                }
              ],
              "contractDependencies": [
                279,
                322,
                354,
                601
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "id": 89,
              "linearizedBaseContracts": [
                89,
                601,
                279,
                322,
                354
              ],
              "name": "MyTokens",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "141:38:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "141:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "53616d706c6544617070436f696e",
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "163:16:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_23c6ba973f0aac7927db2aac7840c39461dadea72a1f42cb64ff658593f802ad",
                      "typeString": "literal_string \"SampleDappCoin\""
                    },
                    "value": "SampleDappCoin"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 67,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "201:29:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 65,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "201:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "534443",
                    "id": 66,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "225:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_dfb4c68fd6fd41fd66c88a48056f4c58314a6e78371fd06ce8b0b7c800976f41",
                      "typeString": "literal_string \"SDC\""
                    },
                    "value": "SDC"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 70,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "251:27:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "3138",
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "276:2:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 73,
                  "name": "INITIAL_SUPPLY",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "284:33:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "31303030",
                    "id": 72,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "313:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1000_by_1",
                      "typeString": "int_const 1000"
                    },
                    "value": "1000"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 77,
                  "name": "_balances",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "339:42:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 76,
                    "keyType": {
                      "id": 74,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "347:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "339:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 75,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "358:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "body": {
                    "id": 87,
                    "nodeType": "Block",
                    "src": "409:50:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 80,
                              "name": "_balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 77,
                              "src": "416:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 83,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 81,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 616,
                                "src": "426:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 82,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "426:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "416:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "INITIAL_SUPPLY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "440:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "416:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 86,
                        "nodeType": "ExpressionStatement",
                        "src": "416:38:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 88,
                  "implemented": true,
                  "isConstructor": true,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 78,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "399:2:1"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 79,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "409:0:1"
                  },
                  "scope": 89,
                  "src": "388:71:1",
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                }
              ],
              "scope": 90,
              "src": "99:363:1"
            }
          ],
          "src": "0:463:1"
        },
        "legacyAST": {
          "absolutePath": "/C/Users/Daisuke/Documents/truffle-sample/token/contracts/MyTokens.sol",
          "exportedSymbols": {
            "MyTokens": [
              89
            ]
          },
          "id": 90,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 58,
              "literals": [
                "solidity",
                "^",
                "0.4",
                ".22"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:24:1"
            },
            {
              "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
              "file": "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
              "id": 59,
              "nodeType": "ImportDirective",
              "scope": 90,
              "sourceUnit": 602,
              "src": "26:71:1",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "baseContracts": [
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 60,
                    "name": "StandardToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 601,
                    "src": "120:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_StandardToken_$601",
                      "typeString": "contract StandardToken"
                    }
                  },
                  "id": 61,
                  "nodeType": "InheritanceSpecifier",
                  "src": "120:13:1"
                }
              ],
              "contractDependencies": [
                279,
                322,
                354,
                601
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "id": 89,
              "linearizedBaseContracts": [
                89,
                601,
                279,
                322,
                354
              ],
              "name": "MyTokens",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "141:38:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "141:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "53616d706c6544617070436f696e",
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "163:16:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_23c6ba973f0aac7927db2aac7840c39461dadea72a1f42cb64ff658593f802ad",
                      "typeString": "literal_string \"SampleDappCoin\""
                    },
                    "value": "SampleDappCoin"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 67,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "201:29:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 65,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "201:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "534443",
                    "id": 66,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "225:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_dfb4c68fd6fd41fd66c88a48056f4c58314a6e78371fd06ce8b0b7c800976f41",
                      "typeString": "literal_string \"SDC\""
                    },
                    "value": "SDC"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 70,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "251:27:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "3138",
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "276:2:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 73,
                  "name": "INITIAL_SUPPLY",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "284:33:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "31303030",
                    "id": 72,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "313:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1000_by_1",
                      "typeString": "int_const 1000"
                    },
                    "value": "1000"
                  },
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 77,
                  "name": "_balances",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "339:42:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 76,
                    "keyType": {
                      "id": 74,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "347:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "339:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 75,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "358:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "body": {
                    "id": 87,
                    "nodeType": "Block",
                    "src": "409:50:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 80,
                              "name": "_balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 77,
                              "src": "416:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 83,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 81,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 616,
                                "src": "426:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 82,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "426:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "416:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "INITIAL_SUPPLY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "440:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "416:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 86,
                        "nodeType": "ExpressionStatement",
                        "src": "416:38:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 88,
                  "implemented": true,
                  "isConstructor": true,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 78,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "399:2:1"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 79,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "409:0:1"
                  },
                  "scope": 89,
                  "src": "388:71:1",
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                }
              ],
              "scope": 90,
              "src": "99:363:1"
            }
          ],
          "src": "0:463:1"
        },
        "compiler": {
          "name": "solc",
          "version": "0.4.24+commit.e67f0147.Emscripten.clang"
        },
        "networks": {
          "4447": {
            "events": {},
            "links": {},
            "address": "0xf204a4ef082f5c04bb89f7d5e6568b796096735a",
            "transactionHash": "0xa4126257b00cad3cefb63b0e9c736cf63e9e705ca141d2a92e4cb36894b4f243"
          },
          "5494": {
            "events": {},
            "links": {},
            "address": "0x938b93e2a496b6c6d079b824712a81635cfc4eb4",
            "transactionHash": "0x04ca929a270ba4c32881816863feac44fd8035c211f35eb1fc2e7c87d86bbaf5"
          }
        },
        "schemaVersion": "2.0.1",
        "updatedAt": "2018-10-29T12:34:12.797Z"
      }
