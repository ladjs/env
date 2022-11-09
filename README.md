# [**@ladjs/env**](https://github.com/ladjs/env)

[![build status](https://github.com/ladjs/env/actions/workflows/ci.yml/badge.svg)](https://github.com/ladjs/env/actions/workflows/ci.yml)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ladjs/env.svg)]()

> Environment configuration loader for Lad


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Options](#options)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install @ladjs/env
```


## Usage

```js
const env = require('@ladjs/env')();

console.log(env);
```


## Options

You can pass any option as you otherwise would normally to [dotenv-extended][].

Here is the default option argument, note that it supports a `.env.test` path for `TEST` and `TESTING` environments as specified through `process.env.NODE_ENV`.

```js
const env = require('@ladjs/env')({
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
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


##

[npm]: https://www.npmjs.com/

[dotenv-extended]: https://github.com/keithmorris/node-dotenv-extended
