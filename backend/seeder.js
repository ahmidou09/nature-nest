import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import guests from "./data/guests.js";
import cabins from "./data/cabins.js";
import settingsData from "./data/settings.js";
import Guest from "./models/guestModel.js";
import Cabin from "./models/cabinModel.js";
import Booking from "./models/bookingModel.js";
import Settings from "./models/settingsModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Booking.deleteMany();
    await Cabin.deleteMany();
    await Guest.deleteMany();

    const createdGuest = await Guest.insertMany(guests);
    const createdCabin = await Cabin.insertMany(cabins);

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
    await Cabin.deleteMany();
    await Guest.deleteMany();

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
