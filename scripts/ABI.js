

const diamondABI = [
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "facetAddress",
              "type": "address"
            },
            {
              "internalType": "enum IDiamond.FacetCutAction",
              "name": "action",
              "type": "uint8"
            },
            {
              "internalType": "bytes4[]",
              "name": "functionSelectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct IDiamond.FacetCut[]",
          "name": "_diamondCut",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "init",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "initCalldata",
              "type": "bytes"
            }
          ],
          "internalType": "struct DiamondArgs",
          "name": "_args",
          "type": "tuple"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotAddFunctionToDiamondThatAlreadyExists",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4[]",
          "name": "_selectors",
          "type": "bytes4[]"
        }
      ],
      "name": "CannotAddSelectorsToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotRemoveFunctionThatDoesNotExist",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotRemoveImmutableFunction",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotReplaceFunctionThatDoesNotExists",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4[]",
          "name": "_selectors",
          "type": "bytes4[]"
        }
      ],
      "name": "CannotReplaceFunctionsFromFacetWithZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotReplaceImmutableFunction",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "FunctionNotFound",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_action",
          "type": "uint8"
        }
      ],
      "name": "IncorrectFacetCutAction",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_initializationContractAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_calldata",
          "type": "bytes"
        }
      ],
      "name": "InitializationFunctionReverted",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_contractAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "NoBytecodeAtAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_facetAddress",
          "type": "address"
        }
      ],
      "name": "NoSelectorsProvidedForFacetForCut",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_facetAddress",
          "type": "address"
        }
      ],
      "name": "RemoveFacetAddressMustBeZeroAddress",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "facetAddress",
              "type": "address"
            },
            {
              "internalType": "enum IDiamond.FacetCutAction",
              "name": "action",
              "type": "uint8"
            },
            {
              "internalType": "bytes4[]",
              "name": "functionSelectors",
              "type": "bytes4[]"
            }
          ],
          "indexed": false,
          "internalType": "struct IDiamond.FacetCut[]",
          "name": "_diamondCut",
          "type": "tuple[]"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_init",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "_calldata",
          "type": "bytes"
        }
      ],
      "name": "DiamondCut",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
  
const facetA_ABI = [
  {
    "inputs": [],
    "name": "getDoubleDataA",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

  exports.diamondABI = diamondABI
  exports.facetA_ABI = facetA_ABI