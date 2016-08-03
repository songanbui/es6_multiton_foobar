'use strict';
const foo = require('es6_multiton_foo');

setTimeout(function() {
  const bar = require('es6_multiton_bar');
}, 2000);
