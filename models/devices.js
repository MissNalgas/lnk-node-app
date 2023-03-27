const sqlite3 = require('sqlite3');
const DB_NAME = 'lnk';
const STATUS = {
	NEW: 'new',
	OLD: 'old'
};

function _startDB() {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database(DB_NAME);
		db.run('CREATE TABLE IF NOT EXISTS devices (id TEXT PRIMARY KEY, platform TEXT, firebaseToken TEXT, key TEXT)', (err) => {
			if (err) return reject(err);

			resolve(db);
		})

	});
}

function _getDeviceById(db, id) {
	return new Promise((resolve, reject) => {
		db.get('SELECT * FROM devices WHERE id=? LIMIT 1', [id], (err, result) => {
			if (err) return reject(err);

			resolve(result);
		});
	});
}

function _saveDevice(db, id, platform, firebaseToken, key) {
	return new Promise((resolve, reject) => {
		db.run('INSERT INTO devices (id, platform, firebaseToken, key) VALUES (?, ?, ?, ?)', [id, platform, firebaseToken, key], (err, value) => {
			if (err) return reject(err);
			return resolve(value);
		})
	});
}

function _queryDeviceByKey(db, key) {
	return new Promise((resolve, reject) => {
		db.all('SELECT * FROM devices WHERE key=?', [key], (err, results) => {
			if (err) return reject(err);
			return resolve(results);
		})
	})
}

function _removeDeviceByKey(db, id, userKey) {
	return new Promise((resolve, reject) => {
		db.serialize(() => {
			db.get('SELECT * FROM devices WHERE id=? AND key=?', [id, userKey], (err, device) => {
				if (err) return reject(err);
				if (!device) return reject(new Error('The device does not exist'));
			})
			db.run('DELETE FROM devices WHERE id=? AND key=?', [id, userKey], (err) => {
				if (err) return reject(err);
				return resolve();
			});
		});
	})
}

async function storeDeviceIfDoesntExist(id, platform, firebaseToken, key) {
	const db = await _startDB();
	const device = await _getDeviceById(db, id);

	if (!device) {
		await _saveDevice(db, id, platform, firebaseToken, key);
		db.close();
		return STATUS.NEW;
	}
	db.close();
	return STATUS.OLD;

}

async function getDevicesByKey(key) {
	const db = await _startDB();
	const devices = await _queryDeviceByKey(db, key);
	db.close();
	return devices;
}

async function deleteDeviceByKey(key, userKey) {
	const db = await _startDB();
	await _removeDeviceByKey(db, key, userKey);
	db.close();
}

module.exports = {
	storeDeviceIfDoesntExist,
	getDevicesByKey,
	deleteDeviceByKey,
	STATUS
};
