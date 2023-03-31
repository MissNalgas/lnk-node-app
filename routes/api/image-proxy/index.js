const router = require('express').Router();
const sharp = require('sharp');

const storage = new Map();

router.get('/', async (req, res) => {

	try {
		const {default: got} = await import('got');
		const { img, width, height, jpeg = false } = req.query;

		if (!img) return res.status(400).send({message: 'Invalid url'});
		const wNumber = Number(width) || 600;
		const hNumber = Number(height) || undefined;

		let sharpStream = !jpeg ? (
			sharp().resize({width: wNumber, height: hNumber})
		) : (
			sharp().resize({width: wNumber, height: hNumber}).flatten({background: '#ffffff'}).jpeg()
		);
		
		got.stream(img, {cache: storage}).pipe(sharpStream).pipe(res);
	} catch(err) {
		console.error(err);

		res.status(500).send({message: 'Server error'});
	}

});

module.exports = router;
