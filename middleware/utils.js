function requiredKeys(keys) {
	if (!keys?.length) throw new Error('Invalid keys array');


	return function(req, res, next) {
		const {body} = req;
		for (const key of keys) {
			if (!(key in body)) {
				return res.status(400).send({
					code: 'Bad request',
					message: `${key} missing`
				});
			}
		}
		next();
	}

}

module.exports = {
	requiredKeys
};
