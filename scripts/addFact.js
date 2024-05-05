// import { diamondABI, facetA_ABI } from "./ABI";
// import { getSelectors, FacetCutAction } from "./libraries/diamond.js"

const { getSelectors, FacetCutAction } = require('./libraries/diamond.js')
const { diamondABI, facetA_ABI } = require("./ABI");
const { ethers } = require('hardhat');

async function addFact(){

    // const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    const accounts = await ethers.getSigners();
    const signer = accounts[0];

    // const facetAContract = new ethers.Contract("0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e", facetA_ABI, provider);

    // let diamondCutContract = await ethers.getContractFactory('DiamondCutFacet')
    // diamondCutContract = diamondCutContract.connect(signer)
    // diamondCutContract = diamondCutContract.attach("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9")

    // const facetCuts = []
    // facetCuts.push({
    //     facetAddress: facetAContract.address,
    //     action: FacetCutAction.Add,
    //     functionSelectors: getSelectors(facetAContract)
    // })

    // 创建calldata
    // let functionCall = facetAContract.interface.encodeFunctionData('getDoubleDataA')
    // console.log(functionCall)
    // let emptyBytes = new Uint8Array(0)
    // await diamondCutContract.diamondCut(facetCuts, facetAContract.address, functionCall)

    // 测试facet是否安装成功！
    let facetA = await ethers.getContractFactory('FacetA')
    facetA = facetA.connect(signer)
    facetA = facetA.attach("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9")
    let res = await facetA.getDataA()
    console.log("res:", res)
    let crf = await facetA.getDoubleDataA()
    console.log("crf:", crf)
}

addFact().catch(err => {
    console.error(err)
})