const { getUser } = require('../utils/authentication');

async function authMiddleware(req, res, next) {
	try {

		const cookie = req.session.sessionCookie || "";
		const user = await getUser(cookie);

		res.locals.user = user;

		next();

	} catch(e) {
		console.error(e);
		res.status(401).send({code: 401, message: 'Unauthorized'});
	}

}

module.exports = {
	authMiddleware
};
