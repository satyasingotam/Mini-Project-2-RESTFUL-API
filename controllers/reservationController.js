const Reservation = require("../models/Reservation");

exports.getAllReservations = async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
};

exports.addReservation = async (req, res) => {
  const newReservation = new Reservation(req.body);
  const savedReservation = await newReservation.save();
  res.json(savedReservation);
};

exports.getReservationById = async (req, res) => {
  const reservation = await Reservation.findById(req.params.reservationId);
  res.json(reservation);
};

exports.updateReservation = async (req, res) => {
  const updatedReservation = await Reservation.findByIdAndUpdate(
    req.params.reservationId,
    req.body,
    { new: true }
  );
  res.json(updatedReservation);
};

exports.deleteReservation = async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.reservationId);
  res.json({ message: "Reservation deleted successfully" });
};

exports.searchReservations = async (req, res) => {
  const query = {};
  if (req.query.service) query.service = req.query.service;
  if (req.query.customerName) query.customerName = req.query.customerName;
  if (req.query.reservationDate) query.reservationDate = req.query.reservationDate;
  if (req.query.startTime) query.time = { $gte: new Date(req.query.startTime) };
  if (req.query.endTime)
    query.time = { ...query.time, $lte: new Date(req.query.endTime) };

  const reservations = await Reservation.find(query);
  res.json(reservations);
};
