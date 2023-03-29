const admin = require('firebase-admin');
const SERVICE_ACCOUNT = require('../secret/mssnServiceAccount.json');


admin.initializeApp({
	credential: admin.credential.cert(SERVICE_ACCOUNT)
});


module.exports = admin;
