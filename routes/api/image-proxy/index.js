const router = require('express').Router();
const sharp = require('sharp');

router.get('/', async (req, res) => {

	try {
		const {default: got} = await import('got');
		const { img, width, height } = req.query;

		if (!img) return res.status(400).send({message: 'Invalid url'});
		const wNumber = Number(width) || 600;
		const hNumber = Number(height) || undefined;

		const sharpStream = sharp().resize({width: wNumber, height: hNumber});
		
		got.stream(img).pipe(sharpStream).pipe(res);
	} catch(err) {
		console.error(err);

		res.status(500).send({message: 'Server error'});
	}

});

module.exports = router;
