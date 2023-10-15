const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/createOrder', orderController.createOrder);
router.get('/getListOfOrder', orderController.getAllOrerByUerId);

module.exports = router;
