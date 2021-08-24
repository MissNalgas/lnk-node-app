const fs = require("fs");

module.exports = (filepath, options, callback) => {
    fs.readFile(filepath, (err, content) => {
        if (err) return callback(err);

        const render = content.toString();

        return callback(null, render);
    })
}