require('ts-node/register');
const { resolve } = require('path');

module.exports = {
  testEnvironment: resolve(__dirname, './custom.environment.ts'),
};
