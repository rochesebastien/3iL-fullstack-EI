/*
  Warnings:

  - The `status` column on the `Ticket` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('A_FAIRE', 'EN_COURS', 'TERMINE');

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'A_FAIRE';

-- DropEnum
DROP TYPE "Statut";
