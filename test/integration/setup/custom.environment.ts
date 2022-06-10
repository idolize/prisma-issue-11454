import NodeEnvironment from 'jest-environment-node';
import { getPrisma } from '../../../src/prisma';

class PostgreSQLEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    const prisma = getPrisma();
    console.info('[jest] global set up - injecting prisma');
    await prisma.$connect();
    this.global.prisma = prisma;
  }

  async teardown() {
    await super.teardown();
  }
}

export default PostgreSQLEnvironment;
