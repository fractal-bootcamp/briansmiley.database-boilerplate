/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Member_Email_key" ON "Member"("Email");
