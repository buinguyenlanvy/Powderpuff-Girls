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

    if (!orders) {
        res.status(400).json({ message: 'Không thể lấy danh sách hóa đơn' });
    } else {
        res.json(orders);
    }
};

const getOrderById = (req, res) => {
    const order = orderModel.getById(req.params.id);

    if (!order) {
        res.status(400).json({ message: 'Không thể lấy hóa đơn' });
    } else {
        res.json(order);
    }
};

const updateOrder = (req, res) => {
    const { userId, weight, trashCategoryId } = req.body;
    const order = orderModel.update(req.params.id, userId, weight, trashCategoryId);

    if (!order) {
        res.status(400).json({ message: 'Không thể cập nhật hóa đơn' });
    } else {
        res.json({ message: 'Hóa đơn đã được cập nhật' });
    }
};

const deleteOrder = (req, res) => {
    const order = orderModel.deleteData(req.params.id);

    if (!order) {
        res.status(400).json({ message: 'Không thể xóa hóa đơn' });
    } else {
        res.json({ message: 'Hóa đơn đã được xóa' });
    }
};

module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};
