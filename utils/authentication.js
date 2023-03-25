const admin = require('firebase-admin');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('lnk');

async function getUser(sessionCookie) {
    const {decodedClaims} = await verifyCookie(sessionCookie)
    const email = decodedClaims.email;
    const user = await getUserFromEmail(email);
    return user;
}

async function verifyCookie(cookie) {
    const decodedClaims = await admin.auth().verifySessionCookie(cookie, true);
    return {decodedClaims};
}

async function getUserFromEmail(email) {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM accounts WHERE email=?", email, (err, account) => {
            if (err) return reject(err);

            resolve(account);
        })
    })
}

module.exports = {
	getUser
}
