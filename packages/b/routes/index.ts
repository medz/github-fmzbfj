import { PrismaClient } from "a";

export default defineEventHandler(event => {
  const prisma = new PrismaClient();
  return prisma.user.findMany();
});
