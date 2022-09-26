const winston = require('winston');

modules.exports = function (err, req, res, next) {
  winston.error(err.message, err);

  // error
  // warning
  // info
  // verbose
  // debug
  // silly

  res.status(500).send('Something failed');
};
