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
    errorOnExtra: false,
    errorOnRegex: false,
    includeProcessEnv: true,
    assignToProcessEnv: true,
    overrideProcessEnv: false,
    ...config
  };

  let env = dotenvExtended.load(config);
  const keys = Object.keys(env);
  for (const element of keys) {
    if (env[element].includes('{{'))
      env[element] = Mustache.render(env[element], env);
  }

  env = dotenvParseVariables(env);
  Object.assign(process.env, env);
  return env;
};

module.exports = setupEnv;
