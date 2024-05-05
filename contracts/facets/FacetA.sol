// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library LibA{
    struct DiamondStorage{
        address owner;
        uint256 dataA;
    }

    function diamondStorage() internal pure returns(DiamondStorage storage ds) {
        bytes32 storagePostion = keccak256("diamond.storage.LibA");
        assembly {
            ds.slot := storagePostion
        }
    }
}

contract FacetA{
    function setDataA(uint256 _dataA) external {
        LibA.DiamondStorage storage ds = LibA.diamondStorage();
        ds.dataA = _dataA;
    }

    function getDataA() external view returns(uint256) {
        return LibA.diamondStorage().dataA;
    }

    function getDoubleDataA() external view returns(uint256) {
        uint256 data = LibA.diamondStorage().dataA;
        data = data * 2;
        return data;
    }
}