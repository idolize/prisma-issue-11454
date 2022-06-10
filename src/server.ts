import { Server } from 'http';
import express from 'express';
// automatically handle promise errors - only needed in express 4.x
import 'express-async-errors';

import { Prisma, PrismaClient } from '@prisma/client';
import { getPrisma } from './prisma';

export function startServer(prisma: PrismaClient = getPrisma()): Promise<Server> {
  const app = express();

  // Log SQL to console
  prisma.$on('query' as any, async (e: any) => {
    const queryEvent = e as Prisma.QueryEvent;
    console.info(`SQL query: ${queryEvent.query} params: ${queryEvent.params}`);
  });

  // GET /data?includeExtra=true
  app.get('/data', async (req, res) => {
    // optional - if set will include extra data (used to demonstrate dynamic SQL with queryRaw template string)
    const includeExtra = req.query.includeExtra === 'true';

    // BUG $queryRaw not working in jest environment
    // https://github.com/prisma/prisma/issues/11454
    const results = await prisma.$queryRaw`
        select
          ${includeExtra ? Prisma.sql`"extraField"` : Prisma.empty}
          id,
          title,
          content,
          "authorId",
          published
        from "Post"`;

    res.send(results);
  });

  return new Promise<Server>((resolve) => {
    // Start the actual express server
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      console.info(`Listening on port ${port}`);
      // resolve the whole promise with the express server
      resolve(server);
    });
  });
}
