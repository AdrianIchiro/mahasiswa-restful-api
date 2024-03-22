const auth = require("./auth");
const express = require("express");

const router = express.Router();

router.post("/api/v1/register", auth.registrasi);

exports.default = router;
