import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  nationalityId: { type: String, required: true },
  nationality: { type: String },
  countryFlag: { type: String },
});

const Guest = mongoose.model("Guest", guestSchema);

export default Guest;
