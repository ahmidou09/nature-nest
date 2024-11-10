import mongoose from "mongoose";

const cabinSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  name: { type: String, required: true },
  maxCapacity: { type: Number, required: true },
  regularPrice: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  description: { type: String },
  image: { type: String },
});

const Cabin = mongoose.model("Cabin", cabinSchema);

export default Cabin;
