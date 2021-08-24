const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("lnk");

db.run("CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, key TEXT, email TEXT, username TEXT, firstname TEXT, lastname TEXT)", (err) => {
    if (err) return console.error("Create table lnk", err)
})

db.close()