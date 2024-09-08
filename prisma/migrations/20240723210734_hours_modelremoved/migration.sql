/*
  Warnings:

  - You are about to drop the `HoursOfOperation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fridaysHours` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mondaysHours` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saturdaysHours` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sundaysHours` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thursdaysHours` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tuesdaysHours` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wednesdaysHours` to the `Venue` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "HoursOfOperation";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Venue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "imagePath1" TEXT NOT NULL,
    "imagePath2" TEXT NOT NULL,
    "imagePath3" TEXT NOT NULL,
    "imagePath4" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "sundaysHours" TEXT NOT NULL,
    "mondaysHours" TEXT NOT NULL,
    "tuesdaysHours" TEXT NOT NULL,
    "wednesdaysHours" TEXT NOT NULL,
    "thursdaysHours" TEXT NOT NULL,
    "fridaysHours" TEXT NOT NULL,
    "saturdaysHours" TEXT NOT NULL
);
INSERT INTO "new_Venue" ("createdAt", "description", "id", "imagePath1", "imagePath2", "imagePath3", "imagePath4", "location", "name", "phoneNumber", "updateAt") SELECT "createdAt", "description", "id", "imagePath1", "imagePath2", "imagePath3", "imagePath4", "location", "name", "phoneNumber", "updateAt" FROM "Venue";
DROP TABLE "Venue";
ALTER TABLE "new_Venue" RENAME TO "Venue";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
