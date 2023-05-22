-- AlterTable
ALTER TABLE "works" ADD COLUMN     "observation" TEXT,
ADD COLUMN     "payed" BOOLEAN NOT NULL DEFAULT false;
