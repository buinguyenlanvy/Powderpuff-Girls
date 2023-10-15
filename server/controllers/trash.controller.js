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

<<<<<<< HEAD
module.exports = {
    getAllTrashCategories,
=======
const getTrashCategoryById = (req, res) => {
    try {
        const category = trashCategory().getById(req.params.id);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy loại ve chai' });
    }
};

const createTrashCategory = (req, res) => {
    try {
        const { name, description } = req.body;
        const category = trashCategory().create(name, description);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo loại ve chai' });
    }
};

const updateTrashCategory = (req, res) => {
    try {
        const { name, description } = req.body;
        const category = trashCategory().update(req.params.id, name, description);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật loại ve chai' });
    }
};

const deleteTrashCategory = (req, res) => {
    try {
        const category = trashCategory().deleteData(req.params.id);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa loại ve chai' });
    }
}

module.exports = {
    getAllTrashCategories,
    getTrashCategoryById,
    createTrashCategory,
    updateTrashCategory,
    deleteTrashCategory,
>>>>>>> 7db4ba0f34284d5f1c8865a13d05b94a373e920d
};
