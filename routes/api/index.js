const router = require("express").Router();
const { authMiddleware } = require("../../middleware/auth");
const { requiredKeys } = require("../../middleware/utils");
const { getUserByFirebaseId, saveUser } = require('../../models/lnk');

router.post("/createuser", (_req, res) => {
	res.send(401).send({message: 'You are not authorized to create an account'});
})

router.get("/getuser", authMiddleware, async (_req, res) => {
	try {

		const user = await getUserByFirebaseId(res.locals.user.uid);
		res.send({user});

	} catch(err) {
		if (err.code === 404) {
			res.send({user: null, message: 'User is not registered'});
		} else {
			console.error(err);
			res.status(500).send({message: 'Server error'});
		}
	}

});

router.post('/user', authMiddleware, requiredKeys(['firstname', 'lastname', 'nickname']), async (req, res) => {
	try {
		const { firstname, lastname, nickname } = req.body;
		const user = res.locals.user;

		await saveUser(user.uid, user.email, nickname, firstname, lastname);

		res.send({message: 'User updated!'});

	} catch(err) {
		if (err.code === 405) {
			return res.status(400).send({message: 'User already exists!'});
		}
		console.error(err);
		res.status(500).send({message: 'Server error'});
	}
});

router.use('/notification', require('./notification-no-auth'));
router.use('/notification',authMiddleware, require('./notification'));

router.use('/upload-file',authMiddleware, require('./upload-file'));
router.use('/image-proxy', require('./image-proxy'));

module.exports = router;
