const test = require('ava');

const setupEnv = require('../');

test('is function', t => {
  t.true(typeof setupEnv === 'function');
});

test('returns object', t => {
  t.true(typeof setupEnv() === 'object');
});
