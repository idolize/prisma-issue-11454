import request from 'supertest';
import { Server } from 'http';
import { Post, User } from '@prisma/client';
import { startServer } from '../../src/server';

describe('post interaction', () => {
  let app: Server | undefined;
  const baseUrl = `/data`;

  let user: User;
  let post: Post;

  // Create a user and a post
  beforeAll(async () => {
    // Query DB
    user = (await prisma.user.findUnique({
      where: {
        email: 'test@test.com',
      },
    }))!;
    post = (await prisma.post.findFirst({
      where: {
        authorId: user.id
      },
    }))!;

    // Start server
    app = await startServer(prisma);
  });

  afterAll(() => app?.close());

  describe('data fetch', () => {
    it('fetches posts WITHOUT extra data (should fail due to bug)', async () => {
      let postsResponse = await request(app).get(baseUrl);
      expect(postsResponse.status).toBe(200);
      let postBody = postsResponse.body as Post;
      expect(postBody.authorId).toBe(user.id);
      expect(postBody.content).toBe(post.content);
      expect(postBody.title).toBe(post.title);
      // Did not include extraField
      expect(postBody.extraField).toBeNull();
    });

    it('fetches posts WITH extra data (should fail due to bug)', async () => {
      let postsResponse = await request(app).get(`${baseUrl}?includeExtra=true`);
      expect(postsResponse.status).toBe(200);
      let postBody = postsResponse.body as Post;
      expect(postBody.authorId).toBe(user.id);
      expect(postBody.content).toBe(post.content);
      expect(postBody.title).toBe(post.title);
      // Did include extraField, so it should be present
      expect(postBody.extraField).toBe(post.extraField);
    });
  });
});
