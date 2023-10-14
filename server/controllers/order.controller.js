// orderController.js
const orderModel = require('../models/order.model');

const createOrder = (req, res) => {
    const { userId, weight, trashCategoryId } = req.body;
    const order = orderModel.create(userId, weight, trashCategoryId);

    if (!order) {
        res.status(400).json({ message: 'Không thể tạo hóa đơn' });
    } else {
        res.json({ message: 'Hóa đơn đã được tạo' });
    }
};

const getOrders = (req, res) => {
    const orders = orderModel.getAll();
    res.json(orders);
}


module.exports = {
    createOrder,
    getOrders,
};
