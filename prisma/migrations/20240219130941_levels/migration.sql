/*
  Warnings:

  - You are about to drop the column `yearId` on the `Semester` table. All the data in the column will be lost.
  - You are about to drop the `Year` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `levelId` to the `Semester` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_yearId_fkey";

-- AlterTable
ALTER TABLE "Semester" DROP COLUMN "yearId",
ADD COLUMN     "levelId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Year";

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Level_level_key" ON "Level"("level");

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
