import { TestcontainersEnvironment } from '@trendyol/jest-testcontainers';
// import { promisify } from 'util';
// import { exec } from 'child_process';
// import { getPrisma } from '../../../src/prisma';

// const execAsync = promisify(exec);

class PostgreSQLEnvironment extends TestcontainersEnvironment {
  async setup() {
    console.log('\nHIIIIII');
    await super.setup();
    // console.dir(this.global);
    // const { __TESTCONTAINERS_POSTGRES_IP__: postgresIp, __TESTCONTAINERS_POSTGRES_PORT_5432__: postgresPort } = this
    //   .global as any;
    // const postgresDb = 'postgres';
    // const postgresAuth = 'postgres:integration-pass';
    // const databaseUrl = `postgresql://${postgresAuth}@${postgresIp}:${postgresPort}/${postgresDb}`;
    // console.info('[jest] databaseUrl=' + databaseUrl);
    // const prisma = null; // getPrisma(databaseUrl, true);
    // console.info('[jest] global set up - running migrate');
    // // Setup database via Prisma migration scripts
    // // We have to do this in code instead of via npm script
    // // to be sure the docker container is running first
    // const { stdout: _stdout, stderr } = await execAsync(
    //   `export DATABASE_URL=${databaseUrl}; cd ../.. && npm run prisma:migrate:reset`,
    // );
    // // console.log(stdout);
    // if (stderr.trimStart()) {
    //   throw new Error('Migrate failed! ' + stderr);
    // }
    // // await prisma.$connect();
    // this.global.prisma = prisma;
  }

  async teardown() {
    await super.teardown();
  }
}

export default PostgreSQLEnvironment;
