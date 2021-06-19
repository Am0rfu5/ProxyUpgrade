const { upgrades, ethers } = require("hardhat")
const { verify } = require("../utils.js")
const upgradesCore = require("@openzeppelin/upgrades-core")

async function main() {

    const CanUpgradeMe = await ethers.getContractFactory("CanUpgradeMe")
    const proxy = await upgrades.deployProxy(CanUpgradeMe)
    await proxy.deployed()
    console.log("Proxy deployed to:", proxy.address)

    const implementationAddress = await upgradesCore.getImplementationAddress(ethers.provider, proxy.address)
    console.log("Implementation deployed to:", implementationAddress)

    verify(implementationAddress, [])
    verify(proxy.address, [])
    console.log("Done")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    });