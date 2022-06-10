module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: './',
  // defaults to only unit tests
  testMatch: ['<rootDir>/test/unit/**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/index.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
