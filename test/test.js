const test = require('ava');

const env = require('..');

test('NODE_ENV is test', t => {
  t.is(process.env.NODE_ENV, 'test');
  t.is(env().NODE_ENV, 'test');
});

test('is function', t => {
  t.true(typeof env === 'function');
});

test('returns object', t => {
  t.true(typeof env() === 'object');
});
