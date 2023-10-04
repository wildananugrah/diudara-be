/*
  Warnings:

  - You are about to drop the column `themeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Theme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_themeId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "themeId",
ADD COLUMN     "templateId" VARCHAR(255);

-- DropTable
DROP TABLE "Theme";

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Template_code_key" ON "Template"("code");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;
