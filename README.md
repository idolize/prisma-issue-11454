# Prisma Issue #11454

Repo to reproduce [issue #11454](https://github.com/prisma/prisma/issues/11454).

### How to run server locally (all Prisma queries should work as expected):

2. `npm start`
3. `curl "http://localhost:3000/data"` to get data
4. `curl "http://localhost:3000/data?includeExtra=true"` to get data with extra info
5. Observe success

### How to run in Jest (all Prisma queries should fail unexpectedly)

1. `npm test`
2. Observe failure
