/*!
 * strip-bom-buffer <https://github.com/jonschlinkert/strip-bom-buffer>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isBuffer = require('is-buffer');

module.exports = function (val) {
  if (!isBuffer(val)) return val;
  if (String(val.slice(0, 3)) === '\ufeff') {
    return val.slice(3);
  }
  return val;
};
