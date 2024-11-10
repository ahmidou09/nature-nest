import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import guests from "./data/guests.js";
import cabins from "./data/cabins.js";
import settings from "./data/settings.js";
import Guest from "./models/guestModel.js";
import Cabin from "./models/cabinModel.js";
import Booking from "./models/bookingModel.js";
import Settings from "./models/settingsModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Cabin.deleteMany();
    await Guest.deleteMany();
    await Settings.deleteMany();
    await Booking.deleteMany();

    // Insert cabins
    const createdCabins = await Cabin.insertMany(cabins);
    console.log("Cabins seeded:", createdCabins);

    // Insert guests
    const createdGuests = await Guest.insertMany(guests);
    console.log("Guests seeded:", createdGuests);

    // Insert settings
    const createdSettings = await Settings.create(settings);
    console.log("Settings seeded:", createdSettings);

    // Insert sample booking
    const bookings = [
      {
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 2)),
        numNights: 2,
        numGuests: 2,
        cabinPrice: 100,
        extrasPrice: 15,
        totalPrice: 215,
        status: "Confirmed",
        hasBreakfast: true,
        isPaid: true,
        observation: "Need extra pillows",
        cabinId: createdCabins[0]._id,
        guestId: createdGuests[0]._id,
      },
    ];
    const createdBookings = await Booking.insertMany(bookings);
    console.log("Bookings seeded:", createdBookings);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Booking.deleteMany();
    await Guest.deleteMany();
    await Cabin.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
