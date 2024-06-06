/*
  Warnings:

  - You are about to drop the `BookRentals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookRentals" DROP CONSTRAINT "BookRentals_BookId_fkey";

-- DropForeignKey
ALTER TABLE "BookRentals" DROP CONSTRAINT "BookRentals_MemberId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "RenterId" TEXT;

-- DropTable
DROP TABLE "BookRentals";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_RenterId_fkey" FOREIGN KEY ("RenterId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
