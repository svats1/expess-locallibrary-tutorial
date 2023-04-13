const expess = require("express");

const router = expess.Router();

router.get("/", (req, res) => {
  res.send("cool story bro");
});

module.exports = router;
