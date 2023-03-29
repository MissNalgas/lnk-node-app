const router = require('express').Router();

const { requiredKeys } = require('../../../middleware/utils');
const { deleteDeviceByKey } = require('../../../models/devices');

router.post('/unregister', requiredKeys(['key', 'revokeToken']), async (req, res) => {
	try {

		const { key, revokeToken } = req.body;
		await deleteDeviceByKey(key, revokeToken);
		res.send({message: 'Device deleted successfully'});

	} catch(err) {
		console.error(err);
		res.status(400).send({code: 0, message: 'The device could not be removed'});
	}
});

module.exports = router;
