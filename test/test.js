const path = require('path');
const test = require('ava');

const env = require('..');

test('NODE_ENV is test', (t) => {
  t.is(process.env.NODE_ENV, 'test');
  t.is(env().NODE_ENV, 'test');
});

test('is function', (t) => {
  t.true(typeof env === 'function');
});

test('returns object', (t) => {
  t.true(typeof env() === 'object');
});

test('variables defined in other variables', (t) => {
  process.env.JUNGLE = 'test_{{PANTHER}}';
  process.env.PANTHER = 'panther_{{NODE_ENV}}';
  t.is(env().JUNGLE, 'test_panther_test');
});

test('null/empty variables defined in other variables', (t) => {
  t.is(
    env({
      path: path.join(__dirname, 'env')
    }).BAR,
    ''
  );
});
