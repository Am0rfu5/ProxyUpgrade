# ProxyUpgrade: Smart Contract Upgrade Mechanism

ProxyUpgrade is a blockchain project that is meant to be used as an educational example of how to implement an upgradeable smart contract system. This system allows for the seamless upgrade of contract logic while preserving the state, providing a robust solution for evolving blockchain applications.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager)
- An Ethereum wallet with Ether on the Rinkeby test network
- Hardhat development environment

### Installation

1. **Clone the repository:**

```bash
git clone github.com/Am0rfu5/ProxyUpgrade.git
```

2. **Install dependencies:**

Navigate to the project directory and install the required npm packages:

```bash
npm install
```

3. **Environment Setup:**

Create a `.env` file in the root of the project by copying the `.env.example` file. Update the `.env` file with your `API_KEY`s, including your Ethereum node access key and your Etherscan API key for contract verification.

```plaintext
# Example .env content
API_KEY=<your_api_key_here>
ETHERSCAN_API_KEY=<your_etherscan_api_key_here>
```

### Compile and Deploy Contracts

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

Deploy the contracts to the Rinkeby test network:

```bash
npx hardhat run --network rinkeby scripts/<nameOfFile>.js
```

### Deploy Proxy

For deploying a proxy contract:

```bash
npx hardhat run scripts/<name_of_file> --network <network_name>
```

### Manual Verification

To verify the implementation manually on the network:

```bash
npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
```

### Verify on Etherscan

Ensure you have an `ETHERSCAN_API_KEY` environment variable set. Your deploy script will attempt to verify the contracts on Etherscan automatically if the key is available.

## Contracts Overview

The project includes several contracts designed for upgradability and management of tasks:

- **CanUpgradeMe**: Initial version with basic functionalities including pausing, minting, and task management.
- **UpgradedFile**: An upgraded contract introducing a new file management system.

Each contract is built on OpenZeppelin's upgradeable contract suite, ensuring security and flexibility.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
