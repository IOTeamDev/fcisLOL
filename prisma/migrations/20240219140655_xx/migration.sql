/*
  Warnings:

  - You are about to drop the `Level` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_levelId_fkey";

-- DropTable
DROP TABLE "Level";
