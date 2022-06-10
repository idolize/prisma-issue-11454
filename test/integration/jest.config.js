const { join } = require('path');
const { testEnvironment, ...baseConfig } = require('../../jest.config');

// See https://github.com/Yengas/nodejs-postgresql-testcontainers
module.exports = {
  // must not override testEnvironment, globalSetup, or globalTeardown!
  ...baseConfig,
  testMatch: ['<rootDir>/test/integration/**/*.test.ts'],
  rootDir: join(__dirname, '../../'),
  transform: {
    '\\.ts$': ['babel-jest', { configFile: '../../babel.config.js' }],
  }
};
