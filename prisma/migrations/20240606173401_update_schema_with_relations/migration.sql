-- CreateTable
CREATE TABLE "BookRentals" (
    "id" TEXT NOT NULL,
    "BookId" TEXT NOT NULL,
    "MemberId" TEXT NOT NULL,

    CONSTRAINT "BookRentals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookRentals" ADD CONSTRAINT "BookRentals_BookId_fkey" FOREIGN KEY ("BookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRentals" ADD CONSTRAINT "BookRentals_MemberId_fkey" FOREIGN KEY ("MemberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
