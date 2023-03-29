const { generateId } = require('../../../utils/random');
const { uploadFile } = require('../../../utils/s3');

const router = require('express').Router();
const multer = require('multer');
const upload = multer({limits: {fileSize: 1024 * 1024 * 300}}); //Maximum filesize 300mb

router.post('/', upload.single('file'), async (req, res) => {
	try {

		const filename = req.file.originalname;
		const buffer = req.file.buffer;
		const type = req.file.mimetype;

		const extension = filename.match(/\.\w+$/)?.[0] || '';

		const token = generateId(32);
		const generatedName = token + extension;

		const url = await uploadFile(generatedName, buffer, type);


		res.send({code: 'success', message: 'File uploaded successfully', url});

	} catch(err) {
		console.error(err);
		res.status(400).send({code: 0, message: 'Bad request'});
	}
})



module.exports = router;
