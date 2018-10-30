'use strict';
const fs = require("fs");
var Web3 = require('web3');
var tx = require('ethereumjs-tx');
var web3 = new Web3('http://localhost:8545');
var MyToken = JSON.parse(fs.readFileSync('./api/models/MyTokens.json', 'utf8'));
const coinbaseAddress = "0x666215de7f0a5245c1436fcd1dd5f60557ebfee0";
var gas_limit = 1000000;

exports.getBalance = async(tokenAddress, address) => {

    var myContract =  await new web3.eth.Contract(MyToken.abi, tokenAddress);

    console.log("address:",address);
    var balances = await myContract.methods.balanceOf(address).call();
    return balances;
}
exports.getTotalSupply = async(tokenAddress) => {
    
    var myContract =  await new web3.eth.Contract(MyToken.abi, tokenAddress);
    var totalSupply = await myContract.methods.totalSupply().call();
    return totalSupply;
}

//not web3.js 1.0
exports.getAllowance = function(tokenAddress,sender,reciever){
    var contractInstance = contract.at(tokenAddress);
    var allowance = contractInstance.allowance.call(sender,reciever);
    return allowance;
}

exports.transferToken = async function(tokenAddress, sender,reciever, tokens){

    //console.log("privatekey:",privateKey); //not passphrase

    let privateKey = "";

    var myContract =  await new web3.eth.Contract(MyToken.abi, tokenAddress);
    
    await web3.eth.personal.unlockAccount(sender,privateKey, 1000);

    var transfer = await myContract.methods.transfer(reciever , tokens)
    .send({from:sender});

    console.log("transfer:", transfer);

    return transfer;
}

exports.transferFromToken = async (tokenAddress, sender, reciever, tokens, passPhrase) => {

    let allowance = await web3.eth.personal.unlockAccount(sender, passPhrase, 100);
    if(!allowance) throw "Your PassPhrase is not valid."
    console.log("allowance:", allowance);

    //console.log("privatekey:",privateKey); //not passphrase
    let myContract =  await new web3.eth.Contract(MyToken.abi, tokenAddress);

    await web3.eth.personal.unlockAccount(coinbaseAddress, "", 100);

    let transfer = await myContract.methods.transferFrom(sender,  reciever , Number(tokens))
    .send({from: coinbaseAddress});
    
    console.log("transfer:", transfer);

    return transfer;
}

//not web3.js 1.0
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

//not web3.js 1.0
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

//web3.js 1.0未対応
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
