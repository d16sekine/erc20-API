'use strict';
var token = require('../models/tokenModel');

exports.get_token_balance = function(req,res){
    var balance = token.getBalance(req.query.address,req.query.tokenAddress);
    res.send(balance);
};

exports.get_token_supply = function(req,res){
    var totalSupply = token.getTotalSupply(req.query.tokenAddress);
    res.send(totalSupply);
};

exports.get_allowance_balance = function(req,res){
    var allowance = token.getAllowance(req.query.tokenAddress,req.query.sender,req.query.reciever);
    res.send(allowance);
};

exports.post_transfer_token = function(req,res){
    var data = req.body;
    var transfer = token.transferToken(data.tokenAddress,data.sender,data.reciever,data.tokens,data.privateKey);
    res.send(transfer);
};

exports.post_approve_account = function(req,res){
    var data = req.body;
    var approve_account = token.approveAccount(data.tokenAddress,data.approver,data.addressToApprove,data.tokens,data.privateKey);
    res.send(approve_account);
};

exports.post_transfer_allowance = function(req,res){
    var data = req.body;
    var transferFrom = token.transferAllowance(data.tokenAddress,data.sender,data.reciever,data.tokens,data.privateKey);
    res.send(transferFrom);
};