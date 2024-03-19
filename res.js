"use strict";

exports.ok = (value, res) => {
  var data = {
    status: 200,
    data: value,
  };

  res.json(data);
};

exports.err = (value, res) => {
  var data = {
    status: 404,
    errors: value,
  };

  res.json(data);
};
