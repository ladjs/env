const dotenvExtended = require('@ladjs/dotenv-extended');
const dotenvMustache = require('dotenv-mustache');
const dotenvParseVariables = require('dotenv-parse-variables');

const setupEnv = (config = {}) => {
  config = Object.assign(
    {
      silent: false,
      errorOnMissing: true,
      errorOnExtra: true
    },
    config
  );

  let env = dotenvExtended.load(config);
  env = dotenvMustache(env);
  env = dotenvParseVariables(env);

  return env;
};

module.exports = setupEnv;
