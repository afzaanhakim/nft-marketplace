require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString()
const id = process.env.PROJECT_ID

console.log(id)
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });


module.exports = {

  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${id}`,
      accounts: [privateKey]
    },
    mainnet: {
      URL: `https://polygon-mainnet.infura.io/v3/${id}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
