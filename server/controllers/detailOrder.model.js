const detailOrderModel = require('../models/detailOrder.model');

const createDetailOrder = (req, res) => {
    const { orderId, trashId } = req.body;
    const detailOrder = detailOrderModel.create(orderId, trashId);

    if (!detailOrder) {
        res.status(400).json({ message: 'Không thể tạo chi tiết hóa đơn' });
    } else {
        res.json({ message: 'Chi tiết hóa đơn đã được tạo' });
    }
};

const getDetailOrders = (req, res) => {
    const detailOrders = detailOrderModel.getAll();

    if (!detailOrders) {
        res.status(400).json({ message: 'Không thể lấy danh sách chi tiết hóa đơn' });
    } else {
        res.json(detailOrders);
    }
};

const getDetailOrderById = (req, res) => {
    const detailOrder = detailOrderModel.getById(req.params.id);

    if (!detailOrder) {
        res.status(400).json({ message: 'Không thể lấy chi tiết hóa đơn' });
    } else {
        res.json(detailOrder);
    }
};

const updateDetailOrder = (req, res) => {
    const { orderId, trashId } = req.body;
    const detailOrder = detailOrderModel.update(req.params.id, orderId, trashId);

    if (!detailOrder) {
        res.status(400).json({ message: 'Không thể cập nhật chi tiết hóa đơn' });
    } else {
        res.json({ message: 'Chi tiết hóa đơn đã được cập nhật' });
    }
};

const deleteDetailOrder = (req, res) => {
    const detailOrder = detailOrderModel.deleteData(req.params.id);

    if (!detailOrder) {
        res.status(400).json({ message: 'Không thể xóa chi tiết hóa đơn' });
    } else {
        res.json({ message: 'Chi tiết hóa đơn đã được xóa' });
    }
};

module.exports = {
  createDetailOrder,
  getDetailOrders,
  getDetailOrderById,
  updateDetailOrder,
  deleteDetailOrder,
}