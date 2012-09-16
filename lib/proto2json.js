/*!
 * Copyright (C) 2012 by Oleg Efimov
 *
 * See license text in LICENSE file
 */

var parser = require('./parser.js');

function normalizeTree($$) {
  var result = {
    enums: {},
    messages: {}
  };
  var _message, _field, _enum, ii, jj, kk;

  // Loop over the collected elements
  for (ii in $$) {
    if ($$.hasOwnProperty(ii)) {
      if ($$[ii].type === 'package') {
        // Package element
        result.package = $$[ii].name;
      } else if ($$[ii].type === 'enum') {
        // Enum element
        _enum = {};
        for (jj in $$[ii].fields) {
          if ($$[ii].fields.hasOwnProperty(jj)) {
            _field = $$[ii].fields[jj];
            _enum[_field.name] = parseInt(_field.tag);
          }
        }
        result.enums[$$[ii].name] = _enum;
      } else if ($$[ii].type === 'message') {
        // Message element
        _message = {
          enums: {},
          fields: {}
        };
        // Loop over message enums
        for (jj in $$[ii].enums) {
          if ($$[ii].enums.hasOwnProperty(jj)) {
            _enum = $$[ii].enums[jj];
            _message.enums[_enum.name] = {};
            for (kk in _enum.fields) {
              if (_enum.fields.hasOwnProperty(kk)) {
                _message.enums[_enum.name][_enum.fields[kk].name] = _enum.fields[kk].tag;
              }
            }
          }
        }
        // Loop over message fields
        for (jj in $$[ii].fields) {
          if ($$[ii].fields.hasOwnProperty(jj)) {
            _field = $$[ii].fields[jj];
            _message.fields[_field.name] = {
              rule: _field.rule,
              type: _field.type,
              tag:  parseInt(_field.tag)
            };
            if (typeof _field.default !== 'undefined') {
              _message.fields[_field.name].default = _field.default;
            }
          }
        }
        // Remove empty enums section
        if (Object.keys(_message.enums).length === 0) {
          delete _message.enums;
        }
        result.messages[$$[ii].name] = _message;
      }
    }
  }

  // Remove empty enums section
  if (Object.keys(result.enums).length === 0) {
    delete result.enums;
  }

  return result;
}

exports.parse = function (proto_source, callback) {
  try {
    var $$ = parser.parse(proto_source);
  } catch (err) {
    callback(err);
    return;
  }

  callback(null, normalizeTree($$));
};
