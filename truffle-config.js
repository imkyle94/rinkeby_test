const path = require("path");

const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "orange apple banana ... ";
// or
const privateKey = "....";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
    },

    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKey,
          // or mnemonic,
          "https://rinkeby.infura.io/v3/<INFURA_Access_Token>"
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};
