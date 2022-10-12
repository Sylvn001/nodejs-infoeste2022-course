import { PrismaClient } from "@prisma/client";

const db: PrismaClient = new PrismaClient();

export { db };
