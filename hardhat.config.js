require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  
  // Hardhat Deploy plugin configuration
  
  networks: {
    hardhat: {
      chainId: 1337 // Customize the chain ID if needed
    }
    // Add other network configurations here if needed
  }
};
//0x5FbDB2315678afecb367f032d93F642f64180aa3
