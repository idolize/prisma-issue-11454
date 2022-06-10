import { Prisma, PrismaClient } from '@prisma/client';

const loggingEnabled: Prisma.PrismaClientOptions = {
  log: [
    {
      emit: 'event',
      level: 'query',
    },
  ],
};

let cached: PrismaClient | undefined;

export function getPrisma(url?: string, log = true) {
  if (cached) return cached;
  const opts = log ? loggingEnabled : undefined;
  if (url) {
    cached = new PrismaClient({
      ...opts,
      datasources: { db: { url } },
    });
  } else {
    cached = new PrismaClient(opts);
  }
  return cached;
}
