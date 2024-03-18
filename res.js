"use strict";

exports.ok = (value, res) => {
  var data = {
    status: 200,
    data: value,
  };

  console.log("masuk");
  res.json(data);
};
