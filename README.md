# Prisma Issue #11454

Repo to reproduce [issue #11454](https://github.com/prisma/prisma/issues/11454).

### How to run server locally (all Prisma queries should work as expected):

1. Start postgres
2. Rename `.env.sample` to `.env` and replace database URL
2. `npm run prisma:migrate:reset` to setup DB schema
3. `npm run build` to build TS
4. `npm start` to start server
5. `curl "http://localhost:3000/addpost"` (optional) to seed data
6. `curl "http://localhost:3000/data"` to get data
7. `curl "http://localhost:3000/data?includeExtra=true"` to get data with extra info
8. Observe success

### How to run in Jest (all Prisma queries should fail unexpectedly)

1. Start docker
2. Run `npm test` to run Jest tests
3. Observe failure
