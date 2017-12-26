// Import libraries
var web3            = require('web3'),
    contract        = require("truffle-contract"),
    path            = require('path'),
    VotingContractJSON  = require(path.join(__dirname, '../build/contracts/Voting.json'));

// Setup RPC connection   
web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"));
var provider = new web3.providers.HttpProvider("http://localhost:8545");

//console.log(VotingContractJSON);

// Read JSON and attach RPC connection (Provider)
var VotingContract = contract(VotingContractJSON);
VotingContract.setProvider(provider);

console.log('provider is set');

// Use Truffle as usual
VotingContract.deployed().then(function(instance) {
    console.log('instance is found');
    console.log(web3.eth.accounts[0]);
    instance.voteForCandidate("Ram", {from: web3.eth.accounts[0]}, function() {
        console.log("successfull voting");
      });
    return "successfull voting";
}).then(function(result) {
    console.log(result);

}, function(error) {
    console.log(error);
}); 


