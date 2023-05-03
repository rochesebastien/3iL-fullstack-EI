/*
  Warnings:

  - You are about to drop the column `statut` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "statut",
ADD COLUMN     "status" "Statut" NOT NULL DEFAULT 'AFAIRE';
