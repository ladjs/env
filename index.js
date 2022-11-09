const dotenvExtended = require('dotenv-extended');
const Mustache = require('mustache');
const dotenvParseVariables = require('dotenv-parse-variables');

const setupEnv = (config = {}) => {
  // eslint-disable-next-line prefer-object-spread
  config = Object.assign(
    {
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
      overrideProcessEnv: false
    },
    config
  );

  let env = dotenvExtended.load(config);
  const keys = Object.keys(env);
  for (const element of keys) {
    if (env[element].includes('{{'))
      env[element] = Mustache.render(env[element], env);
  }

  //
  // add support for variables defined in other variables
  // (basically double looping will do the trick)
  //
  for (const element of keys) {
    if (env[element].includes('{{'))
      env[element] = Mustache.render(env[element], env);
  }

  env = dotenvParseVariables(env);
  // eslint-disable-next-line n/prefer-global/process
  Object.assign(process.env, env);
  return env;
};

module.exports = setupEnv;
