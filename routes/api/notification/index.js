const router = require('express').Router();

const { requiredKeys } = require('../../../middleware/utils');
const { storeDeviceIfDoesntExist } = require('../../../models/devices');


router.post('/register',requiredKeys(['key', 'firebaseToken', 'platform']), async (req, res) => {
	try {
		const {key, firebaseToken, platform} = req.body;
		const userKey = res.locals.user.key;
		const status = await storeDeviceIfDoesntExist(key, platform, firebaseToken, userKey);

		res.send({status});
	} catch(err) {
		console.log(err);
		res.status(500).send({code: 0, message: 'serverError'});
	}


});


module.exports = router;
