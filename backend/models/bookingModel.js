import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  numNights: { type: Number, required: true },
  numGuests: { type: Number, required: true },
  cabinPrice: { type: Number, required: true },
  extrasPrice: { type: Number, default: 0 },
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
  hasBreakfast: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
  observation: { type: String },
  cabinId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cabin",
    required: true,
  },
  guestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
