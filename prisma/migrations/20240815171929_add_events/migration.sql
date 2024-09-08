/*
  Warnings:

  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Favorite";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Coordinator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "imageProfilePicPath" TEXT NOT NULL,
    "zelleName" TEXT,
    "cashAppName" TEXT,
    "venmoName" TEXT,
    "officeHours" TEXT,
    "websiteLink" TEXT,
    "instagramLink" TEXT,
    "facebookLink" TEXT,
    "linkedInLink" TEXT,
    "ticTokLink" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
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
    "imageBannerPath" TEXT,
    "imageFlyerPath" TEXT,
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
    "updateAt" DATETIME NOT NULL,
    "venueId" TEXT NOT NULL,
    CONSTRAINT "Event_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Event_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Coordinator" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Coordinator_email_key" ON "Coordinator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Coordinator_phoneNumber_key" ON "Coordinator"("phoneNumber");
