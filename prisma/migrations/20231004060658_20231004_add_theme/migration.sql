/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Theme` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Theme_code_key" ON "Theme"("code");
