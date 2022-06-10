console.log('\nSetting up Postgres Docker container for tests');
console.log('Make sure Docker is installed and running!');
module.exports = {
  postgres: {
    image: 'postgres',
    tag: '13.1-alpine',
    ports: [5432],
    env: {
      POSTGRES_PASSWORD: 'integration-pass',
    },
    wait: {
      type: 'text',
      text: 'server started',
    },
  },
};
