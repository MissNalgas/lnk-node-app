const sqlite3 = require("sqlite3")
const DB_NAME = 'lnk';

function _db(callback) {
	const db = new sqlite3.Database(DB_NAME);
	return new Promise((resolve, reject) => {
		db.run('CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, key TEXT, email TEXT, username TEXT, firstname TEXT, lastname TEXT)', (err) => {
			if (err) reject(new Error(err));
			callback(db, resolve, reject).finally(() => db.close());
		})
	});

}

function _queryUserByEmail(email) {
	return _db(async (db, resolve, reject) => {
		db.get('SELECT * FROM accounts WHERE email=?', [email], (err, result) => {
			if (err) reject(new Error(err));
			if (!result) reject(new Error('User not found'));
			resolve(result);
		})
	});
}


async function getUserByEmail(email) {
	const user = await _queryUserByEmail(email);
	return user;
}

module.exports = {
	getUserByEmail
};
