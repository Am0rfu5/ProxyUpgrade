const { ethers, upgrades } = require("hardhat");
const { verify } = require("../utils.js");
const upgradesCore = require("@openzeppelin/upgrades-core");

const PROXY = "proxy address you deployed"

async function main() {

  const proxyAddress = ""
  const UpgradedFilev2 = await ethers.getContractFactory("UpgradedFilev2")
  const proxy = await upgrades.upgradeProxy(proxyAddress, UpgradedFilev2)
  await proxy.deployed()
  console.log("Proxy address: ", proxy.address)
  
  const implementationAddress = await upgradesCore.getImplementationAddress(ethers.provider, proxy.address)
  console.log("Implementation deployed to: ", implementationAddress)

  verify(implementationAddress, [])
  console.log("Verified")
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });