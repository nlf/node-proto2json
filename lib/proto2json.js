/*!
 * Copyright (C) 2012 by Oleg Efimov
 *
 * See license text in LICENSE file
 */

var parser = require('./parser.js');

exports.parse = function (proto_source, callback) {
  try {
    var nodes = parser.parse(proto_source);
  } catch (err) {
    callback(err);
    return;
  }

  callback(null, nodes);
};
