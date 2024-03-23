const verify = require("./verify");
const auth = require("./auth");
const express = require("express");
const verify_token = require("./verify");

const router = express.Router();

router.post("/api/v1/register", auth.registrasi);
router.post("/api/v1/login", auth.login);
router.post("/api/v1/secret", verify_token(), auth.secret);

module.exports = router;
