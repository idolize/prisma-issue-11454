const { join } = require('path');
const { testEnvironment, ...baseConfig } = require('../../jest.config');

// See https://github.com/Yengas/nodejs-postgresql-testcontainers
module.exports = {
  // must not override testEnvironment, globalSetup, or globalTeardown!
  ...baseConfig,
  preset: './test/integration/setup/jestPreset.js',
  testMatch: ['<rootDir>/test/integration/**/*.test.ts'],
  rootDir: join(__dirname, '../../'),
  transform: {
    '\\.ts$': ['babel-jest', { configFile: '../../babel.config.js' }],
  }
};
