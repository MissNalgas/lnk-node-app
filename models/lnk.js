const sqlite3 = require("sqlite3")
const DB_NAME = 'lnk';
const ModelError = require('./modelError');

function _db(callback) {
	const db = new sqlite3.Database(DB_NAME);
	return new Promise((resolve, reject) => {
		db.run('CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, key TEXT, email TEXT, username TEXT, firstname TEXT, lastname TEXT)', (err) => {
			if (err) reject(new ModelError(err, 500));
			callback(db, resolve, reject).finally(() => db.close());
		})
	});

}

function _queryUserByEmail(email) {
	return _db(async (db, resolve, reject) => {
		db.get('SELECT * FROM accounts WHERE email=?', [email], (err, result) => {
			if (err) reject(new ModelError(err, 500));
			resolve(result);
		})
	});
}

function _queryUserByFirebaseID(firebaseId) {
	return _db(async (db, resolve, reject) => {
		db.get('SELECT * FROM accounts WHERE key=?', [firebaseId], (err, result) => {
			if (err) return reject(new ModelError(err, 500));
			resolve(result);
		})
	});
}

function _saveUser(firebaseId, email, username, firstname, lastname) {
	return _db(async (db, resolve, reject) => {
		db.run('INSERT INTO accounts (key, email, username, firstname, lastname) VALUES (? , ?, ?, ?, ?)', [firebaseId, email, username, firstname, lastname], (err) => {
			if (err) return reject(new ModelError(err, 500));
			resolve();
		});
	});
}


async function getUserByEmail(email) {
	const user = await _queryUserByEmail(email);
	if (!user) throw new ModelError('User not found', 404);
	return user;
}

async function getUserByFirebaseId(firebaseId) {
	const user = await _queryUserByFirebaseID(firebaseId);
	if (!user) throw new ModelError('User not found', 404);
	return user;
}

async function saveUser(firebaseId, email, username, firstname, lastname) {
	const storedUser = await _queryUserByFirebaseID(firebaseId);
	if (storedUser) {
		throw new ModelError('User already exists!', 405);
	}
	await _saveUser(firebaseId, email, username, firstname, lastname);
}

module.exports = {
	getUserByEmail,
	getUserByFirebaseId,
	saveUser
};
