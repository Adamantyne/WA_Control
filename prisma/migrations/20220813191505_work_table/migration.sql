-- CreateTable
CREATE TABLE "works" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "budgetDate" TEXT,
    "budget" TEXT,
    "value" INTEGER,
    "deliveryDate" TEXT,
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "payed" BOOLEAN NOT NULL DEFAULT false,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "works_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkServices" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "workId" INTEGER NOT NULL,

    CONSTRAINT "WorkServices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkServices" ADD CONSTRAINT "WorkServices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkServices" ADD CONSTRAINT "WorkServices_workId_fkey" FOREIGN KEY ("workId") REFERENCES "works"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
