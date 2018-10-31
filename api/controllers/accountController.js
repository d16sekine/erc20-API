'use strict';

var account = require('../models/accountModel');

exports.post_accounts = async(req,res) => {
    var data = req.body;
    console.log("data:", data);
    let newAccount = await account.postAccounts(data.password);
    res.send(newAccount);
};
