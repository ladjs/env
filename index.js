const dotenvExtended = require('dotenv-extended');
const Mustache = require('mustache');
const dotenvParseVariables = require('dotenv-parse-variables');

const setupEnv = (config = {}) => {
  config = {
    encoding: 'utf8',
    silent: true,
    path: '.env',
    defaults: '.env.defaults',
    schema: '.env.schema',
    errorOnMissing: true,
    errorOnExtra: true,
    errorOnRegex: false,
    includeProcessEnv: true,
    assignToProcessEnv: true,
    overrideProcessEnv: false,
    ...config
  };

  let env = dotenvExtended.load(config);
  Object.keys(env).forEach(key => {
    if (env[key].includes('{{')) env[key] = Mustache.render(env[key], env);
  });
  env = dotenvParseVariables(env);
  Object.keys(env).forEach(key => {
    if (typeof process.env[key] === 'undefined') process.env[key] = env[key];
  });
  return env;
};

module.exports = setupEnv;
