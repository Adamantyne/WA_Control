/*
  Warnings:

  - You are about to drop the column `number1` on the `phoneNumbers` table. All the data in the column will be lost.
  - You are about to drop the column `number2` on the `phoneNumbers` table. All the data in the column will be lost.
  - You are about to drop the column `number3` on the `phoneNumbers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "phoneNumbers" DROP COLUMN "number1",
DROP COLUMN "number2",
DROP COLUMN "number3",
ADD COLUMN     "phoneNumber1" TEXT,
ADD COLUMN     "phoneNumber2" TEXT,
ADD COLUMN     "phoneNumber3" TEXT;
