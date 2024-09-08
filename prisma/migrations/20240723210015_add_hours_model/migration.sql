-- CreateTable
CREATE TABLE "HoursOfOperation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "venueId" TEXT NOT NULL,
    "sundaysHours" TEXT NOT NULL,
    "mondaysHours" TEXT NOT NULL,
    "tuesdaysHours" TEXT NOT NULL,
    "wednesdaysHours" TEXT NOT NULL,
    "thursdaysHours" TEXT NOT NULL,
    "fridaysHours" TEXT NOT NULL,
    "saturdaysHours" TEXT NOT NULL,
    CONSTRAINT "HoursOfOperation_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
