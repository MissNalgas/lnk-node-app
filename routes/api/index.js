const router = require("express").Router();
const admin = require('../../utils/firebase-admin');
const firebase = require("firebase/app");
const {auth} = require("firebase");
const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("lnk")
const {API_KEY, IMAGE_KEY} = require("../../secret/lnkSecret");
const { getUser } = require('../../utils/authentication');
const { authMiddleware } = require("../../middleware/auth");


//START-FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyB_baY-4hwFfFedYOnYV-8NHjCrvRbFuIE",
  authDomain: "mssn-lnk.firebaseapp.com",
  projectId: "mssn-lnk",
  storageBucket: "mssn-lnk.appspot.com",
  messagingSenderId: "955405464456",
  appId: "1:955405464456:web:6ee9b6ffa058ea3aab403d"
};

firebase.initializeApp(firebaseConfig);



async function signIn(email, pass) {
    const currentUser = await auth().signInWithEmailAndPassword(email, pass);
    const idToken = await currentUser.user.getIdToken(true);
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await admin.auth().createSessionCookie(idToken, {expiresIn})

    return {sessionCookie}
}

/*
* Copied from StackOverFlow, how it must be.
*/
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function addUserToDataBase(email, username, firstname, lastname) {
    return new Promise((resolve, reject) => {

        const key = makeid(20);

        db.run("INSERT INTO accounts (key, email, username, firstname, lastname) VALUES (?, ?, ?, ?, ?)", [key, email, username, firstname, lastname], (err) => {
            if (err) return reject(err)

            resolve()
        })
    })
}


async function createUser(email, password, username, firstname, lastname) {
    const userCredentials = await auth().createUserWithEmailAndPassword(email, password);
    auth().currentUser.sendEmailVerification().catch((err) => console.log("Error sending email verification ", err));
    await addUserToDataBase(email, username, firstname, lastname)
    return userCredentials;
}

//END-FIREBASE

router.post("/createuser", (req, res) => {

    if (!("email" in req.body && "password" in req.body && "username" in req.body && "firstname" in req.body && "lastname" in req.body && "apiKey" in req.body)) {
        const code = 400; // Bad request
        res.statusCode = code;
        return res.json({code, message: "Request incomplete"})
    }

    const {email, password, username, firstname, lastname , apiKey} = req.body;

    if (apiKey !== API_KEY) {
        const code = 401; //Unauthorized
        res.statusCode = code;
        return res.json({code})
    }

    createUser(email, password, username, firstname, lastname).then(() => {
        return res.json({code: 200, message: "Account created succesfully"})
    }).catch((err) => {
        const code = 500;
        res.statusCode = code;
        return res.json({code, err})
    })

})

router.get("/getuser" , (req, res) => {
    const cookie = req.session.sessionCookie || "";

    getUser(cookie).then((user) => {
        return res.json({code: 200, user})
    }).catch((err) => {
        const code = 401;
        res.statusCode = code;
        res.json({code, err})
    })
})

router.post("/login", (req, res) => {

    if (!("email" in req.body && "pass" in req.body)) {
        const code = 400;
        res.statusCode = code;
        return res.json({code, message: "Bad request"});
    }

    const {email, pass} = req.body;

    signIn(email, pass).then((result) => {
        const { sessionCookie } = result;
        req.session.sessionCookie = sessionCookie;
        return res.json({code: 200, message: "Success"})
    }).catch((err) => {
        const code = 401;
        res.statusCode = code;
        return res.json({code, err});
    })


})

router.get("/logout", (req, res) => {
    req.session.sessionCookie = "";
    return res.json({code: 200, message: "Log out succesful"});
})

const { createHmac } = require('crypto');

router.post('/signimage', (req, res) => {
    const cookie = req.session.sessionCookie || '';
    const {token} = req.body;
    if (!token) {
        res.statusCode = 400;
        res.send({message: 'Bad request'});
    }

    getUser(cookie).then(() => {
        const expire = (Date.now() / 1000) + (60*10);
        const hmac = createHmac('sha1', IMAGE_KEY);
        hmac.update(token+expire);
        

        return res.send({code: 200, signature: hmac.digest('hex'), expire});

    }).catch(() => {
        res.statusCode = 401;
        return res.send({code: 401, message: 'Unauthenticated'});
    })

});

router.use('/notification',authMiddleware, require('./notification'));

module.exports = router;
