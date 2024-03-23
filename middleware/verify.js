const jwt = require("jsonwebtoken");
const config = require("../config/secret");
function verify_token(role) {
  return function (req, res, next) {
    var token = req.headers.authorization;
    if (token) {
      var tokenArea = token.split(" ")[1];
      jwt.verify(tokenArea, config.secret, function (err, decoded) {
        if (err) {
          res.status(401).send({ auth: false, message: "token is death" });
        } else {
          if (role == 1) {
            req.auth = decoded;
            next();
          } else {
            res.status(401).send({ auth: false, message: "token is death" });
          }
        }
      });
    } else {
      return res.status(401).send({ auth: false, message: "token not found" });
    }
  };
}

module.exports = verify_token;
