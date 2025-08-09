-- DropForeignKey
ALTER TABLE `resume` DROP FOREIGN KEY `Resume_userId_fkey`;

-- DropIndex
DROP INDEX `Resume_userId_fkey` ON `resume`;
