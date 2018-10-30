'use strict';
const fs = require("fs");
var Web3 = require('web3');
var tx = require('ethereumjs-tx');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var MyToken = JSON.parse(fs.readFileSync('./api/models/MyTokens.json', 'utf8'));
var contract =  web3.eth.contract(MyToken.abi);
var gas_limit = 1000000;
exports.getBalance = function(address,tokenAddress){

    var contractInstance = contract.at(tokenAddress);
    var balances = contractInstance.balanceOf(address);
    return balances;
}
exports.getTotalSupply = function(tokenAddress){
    console.log("tokenAddress:",tokenAddress);
    var contractInstance = contract.at(tokenAddress);
    var totalSupply = contractInstance.totalSupply();
    return totalSupply;
}

exports.getAllowance = function(tokenAddress,sender,reciever){
    var contractInstance = contract.at(tokenAddress);
    var allowance = contractInstance.allowance.call(sender,reciever);
    return allowance;
}

exports.transferToken = function(tokenAddress,sender,reciever,tokens,privateKey){

    //console.log("privatekey:",privateKey); //not passphrase
    var contractInstance = contract.at(tokenAddress);
    //var transfer  = contractInstance.transfer.getData(reciever, web3.toHex(web3.toBigNumber(tokens*10**18)));
    console.log(web3.toHex(web3.toBigNumber(tokens*10**18)));
    var transfer  = contractInstance.transfer(reciever, 10);
    var rawTxTransfer = {
        nonce: web3.toHex(web3.eth.getTransactionCount(sender)),
        gasLimit: web3.toHex(gas_limit),
        gasPrice: web3.toHex(web3.eth.gasPrice),
        to: tokenAddress,
        from:sender,
        value: web3.toHex(web3.toBigNumber(0)),
        data:transfer
    };


    web3.personal.unlockAccount(sender,privateKey, 1000)

    return send(rawTxTransfer,privateKey);
    //return sendRaw(rawTxTApprove,privateKey);
}

exports.approveAccount = function(tokenAddress,approver,addressToApprove,tokens,privateKey){
    var contractInstance = contract.at(tokenAddress);
    var approve = contractInstance.approve.getData(addressToApprove, web3.toHex(web3.toBigNumber(tokens*10**18)));
    var rawTxTApprove = {
        nonce: web3.toHex(web3.eth.getTransactionCount(approver)),
        gasLimit: web3.toHex(gas_limit),
        gasPrice: web3.toHex(web3.eth.gasPrice),
        to: tokenAddress,
        from:approver,
        value: web3.toHex(web3.toBigNumber(0)),
        data:approve
    };
    return sendRaw(rawTxTApprove,privateKey);
}

exports.transferAllowance = function(tokenAddress,sender,reciever,tokens,privateKey){
    var contractInstance = contract.at(tokenAddress);
    var transferFrom = contractInstance.transferFrom.getData(sender,reciever, web3.toHex(web3.toBigNumber(tokens*10**18)));
    var rawTxTTransferFrom = {
        nonce: web3.toHex(web3.eth.getTransactionCount(reciever)),
        gasLimit: web3.toHex(gas_limit),
        gasPrice: web3.toHex(web3.eth.gasPrice),
        to: tokenAddress,
        from:reciever,
        value: web3.toHex(web3.toBigNumber(0)),
        data:transferFrom
    };
    return sendRaw(rawTxTTransferFrom,privateKey);
}

function sendRaw(rawTx,_key) {
    var privateKey = new Buffer(_key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
            return err;
        } else {
            console.log(result);
            return result;
        }
    });
}

function send(Tx,_key) {
    
    web3.eth.sendTransaction(
    Tx, function(err, result) {
        if(err) {
            console.log("err:", err);
            return err;
        } else {
            console.log("result:",result);
            return result;
        }
    });
}