const dotenvExtended = require('@ladjs/dotenv-extended');
const Mustache = require('mustache');
const dotenvParseVariables = require('dotenv-parse-variables');

const setupEnv = (config = {}) => {
  config = Object.assign(
    {
      errorOnMissing: true,
      errorOnExtra: true
    },
    config
  );

  let env = dotenvExtended.load(config);
  Object.keys(env).forEach(key => {
    if (env[key].indexOf('{{') !== -1)
      env[key] = Mustache.render(env[key], env);
  });
  env = dotenvParseVariables(env);
  Object.keys(env).forEach(key => {
    if (typeof process.env[key] === 'undefined') process.env[key] = env[key];
  });
  return env;
};

module.exports = setupEnv;
