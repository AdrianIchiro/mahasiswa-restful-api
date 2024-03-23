const jwt = require("jsonwebtoken");
const config = require("../config/secret");
function verify(role) {
  return function (req, res, next) {
    var token = req.headers.authorization;
    if (token) {
      const tokenArea = token.split(" ")[1];
      jwt.verify(tokenArea, config.secret, function (err, decoded) {
        if (err) {
          res.status(401).send({ auth: false, message: "token is death" });
        } else {
          if (role == 1) {
            req.auth = decoded;
            next();
          }
        }
      });
    } else {
      return res.status(401).send({ auth: false, message: "token not found" });
    }
  };
}

module.exports = verify;
