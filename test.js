'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var strip = require('./');

describe('strip-bom-buffer', function() {
  it('should strip bom:', function() {
    assert.deepEqual(strip(new Buffer('\ufefffoo')).toString(), 'foo');
  });

  it('should return a non-buffer value', function() {
    assert.deepEqual(strip('foo'), 'foo');
    assert.deepEqual(strip({}), {});
  });

  it('returns a non-utf8 value', function() {
    var utf16be = fs.readFileSync('./fixtures/bom-utf16be.txt');
    var utf16le = fs.readFileSync('./fixtures/bom-utf16le.txt');

    assert.deepEqual(strip(utf16be), utf16be);
    assert.deepEqual(strip(utf16le), utf16le);
  });
});

