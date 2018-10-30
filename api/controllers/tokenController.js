'use strict';
var token = require('../models/tokenModel');

exports.get_token_balance = async(req,res) => {
    var balance = await token.getBalance(req.query.tokenAddress, req.query.address);
    res.send(balance);
};

exports.get_token_supply = async(req,res) => {
    var totalSupply = await token.getTotalSupply(req.query.tokenAddress);
    res.send(totalSupply);
};

exports.get_allowance_balance = async(req,res) => {
    var allowance = await token.getAllowance(req.query.tokenAddress,req.query.sender,req.query.reciever);
    res.send(allowance);
};

exports.post_transfer_token = async(req,res) => {
    var data = req.body;
    console.log("data:", data);
    var transfer = await token.transferToken(data.tokenAddress, data.sender, data.reciever, data.tokens);
    res.send(transfer);
};

exports.post_transfer_from_token = async(req,res) => {
    var data = req.body;
    console.log("data:", data);
    var transfer = await token.transferFromToken(data.tokenAddress,data.sender,data.reciever,data.tokens,data.passPhrase);
    res.send(transfer);
};

exports.post_approve_account = async(req,res) => {
    var data = req.body;
    var approve_account = await token.approveAccount(data.tokenAddress,data.approver,data.addressToApprove,data.tokens,data.privateKey);
    res.send(approve_account);
};

exports.post_transfer_allowance = async(req,res) => {
    var data = req.body;
    var transferFrom = await token.transferAllowance(data.tokenAddress,data.sender,data.reciever,data.tokens,data.privateKey);
    res.send(transferFrom);
};