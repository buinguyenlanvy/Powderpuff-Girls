// routes.js
const express = require('express');
const router = express.Router();
const trashCategoryController = require('./controllers/trashCategoryController');

// Định nghĩa tuyến đường cho hiển thị danh sách loại ve chai và giá niêm yết
router.get('/trash-categories', trashCategoryController.getAllTrashCategories);

module.exports = router;
