/*!
 * Copyright (C) 2012 by Oleg Efimov
 *
 * See license text in LICENSE file
 */

var fs         = require('fs');
var assert     = require('assert');
var proto2json = require('../');

// Create tests for all fixtures files
var files = fs.readdirSync(__dirname + '/fixtures')
              .filter(function(file) { return file.match(/\.proto$/); })
              .sort();

describe('proto2json', function(){
  files.forEach(function(file) {
    var name = file.replace(/\.proto$/, '');

    var file_proto = __dirname + '/fixtures/' + name + '.proto';
    var file_json  = __dirname + '/fixtures/' + name + '.json';

    var proto = fs.readFileSync(file_proto, 'utf8');
    var json  = fs.readFileSync(file_json, 'utf8');

    json = JSON.parse(json);

    it('should properly parse ' + name + '.proto', function (done) {
      proto2json.parse(proto, function (err, parse_result) {
        if (err) {
          throw err;
        }

        assert.deepEqual(parse_result, json);

        done();
      });
    });
  });
});
