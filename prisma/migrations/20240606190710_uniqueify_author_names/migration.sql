/*
  Warnings:

  - A unique constraint covering the columns `[Name]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Author_Name_key" ON "Author"("Name");
