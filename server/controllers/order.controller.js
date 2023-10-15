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

const getAllOrerByUerId = () => {
    try {
        const orders = orderModel.getAllOrerByUerId;
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách hóa đơn' });
    }
}

// method for get list of all orders

module.exports = {
    createOrder,
    getAllOrerByUerId
};
