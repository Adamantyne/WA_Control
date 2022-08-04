/*
  Warnings:

  - You are about to drop the column `loginAt` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `logoutAt` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `paymentAt` on the `receipts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "loginAt",
DROP COLUMN "logoutAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleteAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "receipts" DROP COLUMN "paymentAt",
ADD COLUMN     "receiptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleteAt" TIMESTAMP(3);
