'use strict';
var Web3 = require('web3');
var util = require('ethereumjs-util');
var tx = require('ethereumjs-tx');
var abiArray = require('./erc20ABI');
var web3 = new Web3( new Web3.providers.HttpProvider('https://rinkeby.infura.io/rLtE3NzUe88Hw8BnmBfF'));
var contract =  web3.eth.contract(abiArray.human_standard_token_abi);
var gas_limit = 410000;
exports.getBalance = function(address,tokenAddress){
    var contractInstance = contract.at(tokenAddress);
    var balances = contractInstance.balanceOf.call(address);
    return balances;
}
exports.getTotalSupply = function(tokenAddress){
    var contractInstance = contract.at(tokenAddress);
    var totalSupply = contractInstance.totalSupply.call();
    return totalSupply;
}

exports.getAllowance = function(tokenAddress,sender,reciever){
    var contractInstance = contract.at(tokenAddress);
    var allowance = contractInstance.allowance.call(sender,reciever);
    return allowance;
}

exports.transferToken = function(tokenAddress,sender,reciever,tokens,privateKey){
    var contractInstance = contract.at(tokenAddress);
    var transfer  = contractInstance.transfer.getData(reciever, web3.toHex(web3.toBigNumber(tokens*10**18)));
    var rawTxTransfer = {
        nonce: web3.toHex(web3.eth.getTransactionCount(sender)),
        gasLimit: web3.toHex(gas_limit),
        gasPrice: web3.toHex(web3.eth.gasPrice),
        to: tokenAddress,
        from:sender,
        value: web3.toHex(web3.toBigNumber(0)),
        data:transfer
    };
    return sendRaw(rawTxTransfer,privateKey);
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