'use strict';

require('mocha');
var assert = require('assert');
var strip = require('./');

describe('strip-bom-buffer', function () {
  it('should strip bom:', function () {
    assert.deepEqual(strip(new Buffer('\ufefffoo')), new Buffer('foo'));
  });

  it('should return a non-buffer value', function () {
    assert.deepEqual(strip('foo'), 'foo');
    assert.deepEqual(strip({}), {});
  });
});

