/*
  Warnings:

  - Made the column `venuePurpose` on table `Venue` required. This step will fail if there are existing NULL values in that column.

*/
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
    "saturdaysHours" TEXT NOT NULL,
    "parkingOptions" TEXT NOT NULL,
    "websiteLink" TEXT,
    "instagramLink" TEXT,
    "facebookLink" TEXT,
    "cost" TEXT NOT NULL,
    "fullBar" TEXT,
    "beerWine" TEXT,
    "venuePurpose" TEXT NOT NULL
);
INSERT INTO "new_Venue" ("beerWine", "cost", "createdAt", "description", "facebookLink", "fridaysHours", "fullBar", "id", "imagePath1", "imagePath2", "imagePath3", "imagePath4", "instagramLink", "location", "mondaysHours", "name", "parkingOptions", "phoneNumber", "saturdaysHours", "sundaysHours", "thursdaysHours", "tuesdaysHours", "updateAt", "venuePurpose", "websiteLink", "wednesdaysHours") SELECT "beerWine", "cost", "createdAt", "description", "facebookLink", "fridaysHours", "fullBar", "id", "imagePath1", "imagePath2", "imagePath3", "imagePath4", "instagramLink", "location", "mondaysHours", "name", "parkingOptions", "phoneNumber", "saturdaysHours", "sundaysHours", "thursdaysHours", "tuesdaysHours", "updateAt", "venuePurpose", "websiteLink", "wednesdaysHours" FROM "Venue";
DROP TABLE "Venue";
ALTER TABLE "new_Venue" RENAME TO "Venue";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
