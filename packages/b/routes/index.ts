import { prisma } from "a";

export default defineEventHandler(event => {
  return prisma.user.findMany();
});
