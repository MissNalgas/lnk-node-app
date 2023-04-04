const {default: admin} = require('firebase-admin');

async function authMiddleware(req, res, next) {
	try {

		const authHeader = req.get('authorization');
		if (!authHeader) return res.status(400).send({message: 'Authorization header is missing'});

		if (!(/Bearer \S+/.test(authHeader))) return res.status(400).send({message: 'Bad formatted authorization header'});

		const token = authHeader.split(' ')[1];
		const decodedClaims = await admin.auth().verifyIdToken(token, true);
		const user = await admin.auth().getUser(decodedClaims.uid);
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
