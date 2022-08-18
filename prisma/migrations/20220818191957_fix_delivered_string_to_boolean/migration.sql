/*
  Warnings:

  - The `delivered` column on the `works` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "works" DROP COLUMN "delivered",
ADD COLUMN     "delivered" BOOLEAN NOT NULL DEFAULT false;
