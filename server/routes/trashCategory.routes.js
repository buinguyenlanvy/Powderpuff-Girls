<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const trashCategoryController = require('../controllers/trash.controller');

=======
// routes.js
const express = require('express');
const router = express.Router();
const trashCategoryController = require('./controllers/trashCategoryController');

// Định nghĩa tuyến đường cho hiển thị danh sách loại ve chai và giá niêm yết
>>>>>>> 7db4ba0f34284d5f1c8865a13d05b94a373e920d
router.get('/trash-categories', trashCategoryController.getAllTrashCategories);

module.exports = router;
