const router = require('express').Router();
const sharp = require('sharp');

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
		
		got.stream(img).pipe(sharpStream).pipe(res);
	} catch(err) {
		console.error(err);

		res.status(500).send({message: 'Server error'});
	}

});

router.get('/url', async (req, res) => {

	try {
		const {default: got} = await import('got');
		const {url} = req.query;
		if (!url) return res.status(400).send('bad request');

		got.stream(url).pipe(res);

	} catch(err) {
		console.error(err);
		res.status(500).send({err});
	}
	
});

module.exports = router;
