const router = require('express').Router();
const sharp = require('sharp');
const NodeCache = require('node-cache');


const cache = new NodeCache({stdTTL: 600, checkPeriod: 60});

router.get('/', async (req, res) => {

	try {

		let { img, width = 600, height, jpeg = false, bg = 'transparent' } = req.query;
		if (!img) {
			return res.status(400).send('Img not found');
		}
		const background = bg;
		console.log({background});
		width = Number(width);
		height = Number(height) || undefined;
		if (isNaN(width)) return res.status(400).send('Invalid width');
		const configKey = JSON.stringify({img, width, height, jpeg, background});
		const value = cache.get(configKey);
		res.set('Content-Type', jpeg ? 'image/jpeg' : 'image/png');
		if (value) {
			return res.send(value);
		} 
		
		const {default: got} = await import('got');
		const data = await got(img).buffer();
		let processedData;
		if (jpeg) {
			processedData = await sharp(data).resize({width, height, fit: 'contain', background}).flatten({background}).jpeg().toBuffer();
		} else {
			processedData = await sharp(data).resize({width, height, fit: 'contain', background}).png().toBuffer();
		}
		cache.set(configKey, processedData);

		return res.send(processedData);

	} catch(err) {
		console.error(err);
		res.set('Content-Type', 'application/json');
		res.status(500).send({message: 'Server error'});
	}

});

module.exports = router;
