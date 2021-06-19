const hre = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { verify } = require("../utils.js");
const upgradesCore = require("@openzeppelin/upgrades-core")

async function main() {
    const UpgradedFile= await ethers.getContractFactory("UpgradedFile");
    const proxy= await upgrades.deployProxy(UpgradedFile, { kind: "uups" });
    await proxy.deployed();
    console.log("UpgradedFile deployed to:", proxy.address);

    const implementationAddress = await upgradesCore.getImplementationAddress(ethers.provider, proxy.address)
    console.log("Implementation deployed to: ", implementationAddress)

    verify(implementationAddress, [])
    verify(proxy.address, [])
    console.log("Verified")
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });