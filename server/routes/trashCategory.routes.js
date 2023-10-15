const express = require('express');
const router = express.Router();
const trashCategoryController = require('../controllers/trash.controller');

router.get('/trash-categories', trashCategoryController.getAllTrashCategories);

module.exports = router;
