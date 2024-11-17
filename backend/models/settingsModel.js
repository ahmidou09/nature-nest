import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  minBookingLength: { type: Number, required: true },
  maxBookingLength: { type: Number, required: true },
  maxGuestsPerBooking: { type: Number, required: true },
  breakfastPrice: { type: Number, default: 0 },
});

const Settings = mongoose.model("Settings", settingsSchema);

export default Settings;

