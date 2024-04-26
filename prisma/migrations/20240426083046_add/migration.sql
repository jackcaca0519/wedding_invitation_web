/*
  Warnings:

  - The primary key for the `Gest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Gest` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "people" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Gest" ("address", "email", "id", "name", "people") SELECT "address", "email", "id", "name", "people" FROM "Gest";
DROP TABLE "Gest";
ALTER TABLE "new_Gest" RENAME TO "Gest";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
