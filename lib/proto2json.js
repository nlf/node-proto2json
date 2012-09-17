/*!
 * Copyright (C) 2012 by Oleg Efimov
 *
 * See license text in LICENSE file
 */

var parser = require('./parser.js');

function normalizeMessage($$) {
  var result = {
    enums: {},
    messages: {},
    fields: {}
  };

  var _enum, _field, ii, jj;

  // Loop over message enums
  for (ii in $$.enums) {
    if ($$.enums.hasOwnProperty(ii)) {
      _enum = $$.enums[ii];
      result.enums[_enum.name] = {};
      for (jj in _enum.fields) {
        if (_enum.fields.hasOwnProperty(jj)) {
          result.enums[_enum.name][_enum.fields[jj].name] = _enum.fields[jj].tag;
        }
      }
    }
  }

  // Loop over nested messages
  for (ii in $$.messages) {
    if ($$.messages.hasOwnProperty(ii)) {
      result.messages[$$.messages[ii].name] = normalizeMessage($$.messages[ii]);
    }
  }

  // Loop over message fields
  for (ii in $$.fields) {
    if ($$.fields.hasOwnProperty(ii)) {
      _field = $$.fields[ii];
      result.fields[_field.name] = {
        rule: _field.rule,
        type: _field.type,
        tag:  parseInt(_field.tag)
      };
      if (typeof _field.default !== 'undefined') {
        result.fields[_field.name].default = _field.default;
      }
    }
  }

  // Remove empty enums section
  if (Object.keys(result.enums).length === 0) {
    delete result.enums;
  }

  // Remove empty messages section
  if (Object.keys(result.messages).length === 0) {
    delete result.messages;
  }

  return result;
}

function normalizeAll($$) {
  var result = {
    enums: {},
    messages: {}
  };

  var _field, _enum, ii, jj;

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
        result.messages[$$[ii].name] = normalizeMessage($$[ii]);
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

  callback(null, normalizeAll($$));
};
