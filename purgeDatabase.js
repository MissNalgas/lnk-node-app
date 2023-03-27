const sqlite3 = require('sqlite3');
const DB_NAME = 'lnk';

function purgeDatabase(tableName, fields) {
	if (!tableName) throw new Error('Missing table name');
	if (!fields?.length) throw new Error('Invalid fields value');

	const db = new sqlite3.Database(DB_NAME);
	db.serialize(() => {
		let keysMatch = true;
		db.get(`SELECT * FROM ${tableName} LIMIT 1`, (err, item) => {
			if (err) return console.log(err);

			const keys = Object.keys(item);
			if (keys.length !== fields.length) {
				keysMatch = false;
			}

			if (keysMatch) {
				for (const i in fields) {
					if (keys[i] !== fields[i]) {
						keysMatch = false;
					}
				}
			}

			if (!keysMatch) {
				db.run(`DROP TABLE ${tableName}`, (err) => {
					if (err) console.log(err);
					console.log(`Table ${tableName} has been droppped`);
				});
			} else {
				console.log('keysMatch at', tableName);
			}
		});

	});
	
}

purgeDatabase('devices', ['id', 'platform', 'firebaseToken', 'key', 'revokeToken']);
