-- DropIndex
DROP INDEX "customers_userId_name_key";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "deleteAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "deleteAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "deleteAt" TIMESTAMP(3);
