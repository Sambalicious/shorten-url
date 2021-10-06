const { shortUrl, getUrl } = require("../controllers/shorturl");

const router = require("express").Router();

router.post("/", shortUrl);
router.get("/:code", getUrl);

module.exports = router;
