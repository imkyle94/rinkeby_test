const Tickets = artifacts.require("./Tickets.sol");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Tickets, { from: accounts[0] });
};
