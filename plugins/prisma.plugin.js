import { PrismaClient } from '@prisma/client';
import fp from 'fastify-plugin';

export default fp(async (app, options) => {
  const prisma = new PrismaClient();

  await prisma.$connect();
  app.decorate('prisma', prisma);

  app.addHook('onClose', async (app) => {
    await app.prisma.$disconnect();
  });
});