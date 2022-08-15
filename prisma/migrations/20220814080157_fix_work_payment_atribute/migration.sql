/*
  Warnings:

  - You are about to drop the column `payed` on the `works` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "works" DROP COLUMN "payed",
ADD COLUMN     "paydate" TEXT,
ALTER COLUMN "delivered" DROP NOT NULL,
ALTER COLUMN "delivered" DROP DEFAULT,
ALTER COLUMN "delivered" SET DATA TYPE TEXT;
