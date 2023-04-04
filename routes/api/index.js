const router = require("express").Router();
const { authMiddleware } = require("../../middleware/auth");
const { getUserByEmail } = require('../../models/lnk');

router.post("/createuser", (req, res) => {
	res.send(401).send({message: 'You are not authorized to create an account'});
})

router.get("/getuser", authMiddleware, async (req, res) => {
	try {

		const user = await getUserByEmail(res.locals.user.email);
		res.send({user});

	} catch(err) {
		console.error(err);
		res.status(500).send({message: 'Server error'});
	}

})

router.use('/notification', require('./notification-no-auth'));
router.use('/notification',authMiddleware, require('./notification'));

router.use('/upload-file',authMiddleware, require('./upload-file'));
router.use('/image-proxy', require('./image-proxy'));

module.exports = router;
