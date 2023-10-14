// trashCategoryController.js
const { trashCategory } = require('../models/trashCategoryModel');

const getAllTrashCategories = (req, res) => {
    try {
        const categories = trashCategory().getAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách loại ve chai' });
    }
};

module.exports = {
    getAllTrashCategories,
};
