/*
  Warnings:

  - Made the column `imageBannerPath` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageFlyerPath` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "eventCapacity" TEXT NOT NULL,
    "eventRestrooms" TEXT NOT NULL,
    "imageEventPath1" TEXT NOT NULL,
    "imageEventPath2" TEXT NOT NULL,
    "imageEventPath3" TEXT NOT NULL,
    "imageEventPath4" TEXT NOT NULL,
    "imageBannerPath" TEXT NOT NULL,
    "imageFlyerPath" TEXT NOT NULL,
    "reservationRequired" TEXT,
    "ticketRequired" TEXT,
    "payAtDoor" TEXT,
    "recurringEvent" TEXT,
    "twentyOnePlus" TEXT,
    "eighteenPlus" TEXT,
    "eventTheme" TEXT,
    "specialGuest" TEXT,
    "eventDiscountCoupon" TEXT,
    "eventVendors" TEXT,
    "eventAnimalFriendly" TEXT,
    "eventRaffle" TEXT,
    "photoOpLocation" TEXT,
    "kidFriendly" TEXT,
    "handicapAccessible" TEXT,
    "eventPerformance" TEXT,
    "eventFood" TEXT,
    "eventSmokeFree" TEXT,
    "eventSmokeAreas" TEXT,
    "eventPayment" TEXT,
    "patronParticipation" TEXT,
    "eventLocation" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Event" ("cost", "createdAt", "description", "duration", "eighteenPlus", "eventAnimalFriendly", "eventCapacity", "eventDiscountCoupon", "eventFood", "eventLocation", "eventPayment", "eventPerformance", "eventRaffle", "eventRestrooms", "eventSmokeAreas", "eventSmokeFree", "eventTheme", "eventType", "eventVendors", "handicapAccessible", "id", "imageBannerPath", "imageEventPath1", "imageEventPath2", "imageEventPath3", "imageEventPath4", "imageFlyerPath", "kidFriendly", "location", "name", "patronParticipation", "payAtDoor", "photoOpLocation", "recurringEvent", "reservationRequired", "specialGuest", "ticketRequired", "twentyOnePlus", "updateAt") SELECT "cost", "createdAt", "description", "duration", "eighteenPlus", "eventAnimalFriendly", "eventCapacity", "eventDiscountCoupon", "eventFood", "eventLocation", "eventPayment", "eventPerformance", "eventRaffle", "eventRestrooms", "eventSmokeAreas", "eventSmokeFree", "eventTheme", "eventType", "eventVendors", "handicapAccessible", "id", "imageBannerPath", "imageEventPath1", "imageEventPath2", "imageEventPath3", "imageEventPath4", "imageFlyerPath", "kidFriendly", "location", "name", "patronParticipation", "payAtDoor", "photoOpLocation", "recurringEvent", "reservationRequired", "specialGuest", "ticketRequired", "twentyOnePlus", "updateAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
