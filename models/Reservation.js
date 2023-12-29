const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  doctor: String,
  customerName: String,
  time: Date,
  service: String,
  reservationDate: Number,
  durationMinutes: Number,
});

module.exports = mongoose.model("Reservation", ReservationSchema);
