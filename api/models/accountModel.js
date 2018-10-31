'use strict';

var Web3 = require('web3');

var web3 = new Web3('http://localhost:8545');
var gas_limit = 1000000;

exports.postAccounts = async(password) => {

    let address =  await new web3.eth.personal.newAccount(password);

    console.log("address:",address);

    let obj = {
        address: address
    }
    
    return JSON.stringify(obj);
}

