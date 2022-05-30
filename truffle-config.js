const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = process.env.mnemonic || "orange apple banana ... ";
// or
const privateKey = process.env.privateKey || "abcde.....";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
    },

    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", //match any network id
    },

    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKey,
          // or mnemonic,
          `https://rinkeby.infura.io/v3/${process.env.infuraProjectID}`
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      version: "^0.8.0",
    },
  },
};
