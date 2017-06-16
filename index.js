/*!
 * strip-bom-buffer <https://github.com/jonschlinkert/strip-bom-buffer>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isUTF8 = require('is-utf8');
var isBuffer = require('is-buffer');

module.exports = function(buf) {
  if (isBuffer(buf) && isUTF8(buf) && String(buf.slice(0, 3)) === '\ufeff') {
    return buf.slice(3);
  }
  return buf;
};
