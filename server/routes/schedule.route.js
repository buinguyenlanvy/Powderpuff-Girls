const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const scheduleController = require('../controllers/schedule.controller');

router.get('/book-schedule', (req, res) => {

=======

// Controller to display and allow user to book a schedule
router.get('/book-schedule', (req, res) => {
    // Display available schedules and allow booking
>>>>>>> 7db4ba0f34284d5f1c8865a13d05b94a373e920d
});

module.exports = router;
