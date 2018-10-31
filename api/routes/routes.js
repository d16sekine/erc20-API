'use strict';

module.exports = function(app){

    let ercToken = require('../controllers/tokenController');
    let account = require('../controllers/accountController');

    app.route('/accounts').post(account.post_accounts);

    app.route('/tokens/getBalance').get(ercToken.get_token_balance);

    app.route('/tokens/getTotalSuppy').get(ercToken.get_token_supply);

    app.route('/tokens/getAllowance').get(ercToken.get_allowance_balance);

    app.route('/tokens/transferToken').post(ercToken.post_transfer_token);
    
    app.route('/tokens/transferFromToken').post(ercToken.post_transfer_from_token);

    app.route('/tokens/approveAccount').post(ercToken.post_approve_account);

    app.route('/tokens/transferAllowance').post(ercToken.post_transfer_allowance);
    
};