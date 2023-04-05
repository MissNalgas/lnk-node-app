const router = require("express").Router();

router.get(["/", "/login", "/register"], (req, res) => {
    res.render("index");
})

router.use("/api", require("./api"));

router.use((_req, res) => {
	res.send('404 page not found 🤔');
});

module.exports = router;
