-- CreateTable
CREATE TABLE "phoneNumbers" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "number1" TEXT,
    "number2" TEXT,
    "number3" TEXT,

    CONSTRAINT "phoneNumbers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "phoneNumbers_customerId_key" ON "phoneNumbers"("customerId");

-- AddForeignKey
ALTER TABLE "phoneNumbers" ADD CONSTRAINT "phoneNumbers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
