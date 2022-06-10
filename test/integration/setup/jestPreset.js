require('ts-node/register');
const { resolve } = require('path');
const testcontainers_preset = require('@trendyol/jest-testcontainers/jest-preset');

module.exports = {
  ...testcontainers_preset,
  testEnvironment: resolve(__dirname, './postgresql.environment.ts'),
};
