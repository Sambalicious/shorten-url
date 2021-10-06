const { getUrl } = require("../controllers/shorturl");

const router = require("express").Router();


router.get("/:code", getUrl);



module.exports = router