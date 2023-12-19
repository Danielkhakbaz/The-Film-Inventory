/*
  Warnings:

  - You are about to drop the column `title` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `movieId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Movie` DROP COLUMN `title`,
    ADD COLUMN `movieId` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
