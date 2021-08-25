const express = require("express");
const port = 3001;
const app = express();

const { secret } = require("./secret/consts");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

require("./models/lnk")
require("./websocket");
const router = require("./routes");

const htmlEngine = require("./htmlEngine");
app.engine("html", htmlEngine);
app.set("views", "./views");
app.set("view engine", "html");
app.use(express.static("static"));

app.use(bodyParser.json());
app.use(cookieParser());
const sess = {
    name: "lnkcookie",
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60 * 60 * 24 *5 * 1000}
};
if (process.env.NODE_ENV !== "development") {
    app.set("trust proxy", 1);
    sess.cookie.secure = true;
}
app.use(session(sess));
app.use(router);

app.listen(port, () => {
    console.log("Init on port ", port);
})