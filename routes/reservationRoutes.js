const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.get('/reservations', reservationController.getAllReservations);
router.post('/reservations', reservationController.addReservation);
router.get('/reservations/:reservationId', reservationController.getReservationById);
router.put('/reservations/:reservationId', reservationController.updateReservation);
router.delete('/reservations/:reservationId', reservationController.deleteReservation);
router.get('/reservations/search', reservationController.searchReservations);

module.exports = router;