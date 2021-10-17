const validUrl = require("valid-url");
const { asyncMiddleware } = require("../middleware/asyncMiddleWare");
const { Url } = require("../models");
const { nanoid } = require("nanoid");

exports.shortUrl = asyncMiddleware(async (req, res) => {
  let { longUrl } = req.body;

  let baseUrl = process.env.BASE_URL;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).json("Base url not valid");
  }

  let shortCode = nanoid(6);
  const shortUrl = baseUrl + "/" + shortCode;

  if (validUrl.isUri(longUrl)) {
    let url = await Url.findOne({ where: { longUrl } });
    if (url) {
      return res.json(url);
    }
    url = await Url.create({
      longUrl,
      shortCode,
      shortUrl,
    });

    return res.json(url);
  } else {
    return res.status(400).json({ message: "Invalid url. Please check again" });
  }
});

exports.getUrl = asyncMiddleware(async (req, res) => {
  let shortCode = req.params.code;

  let url = await Url.findOne({ where: { shortCode } });

  if (url) {
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).json({ message: "code not found" });
  }
});
