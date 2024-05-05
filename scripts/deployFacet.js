async function deployFacet(){
    const FacetA = await ethers.getContractFactory('FacetA');
    const facetA = await FacetA.deploy();
    await facetA.deployed();
    console.log("facetA deployed: ", facetA.address);

    return facetA.address;
}

deployFacet().catch(err => {
    console.error(err);
    //process.exitCode = 1;
})