const test = require('ava');

const env = require('../');

test('is object', t => {
  t.true(typeof env === 'object');
});
