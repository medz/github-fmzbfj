import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "~/generated/prisma/client";

const adapter = new PrismaBetterSQLite3({
  url: "file:../a/prisma/dev.sqlite"
});
export const prisma = new PrismaClient({ adapter });

export default defineEventHandler(event => {
  return prisma.user.findMany();
});
