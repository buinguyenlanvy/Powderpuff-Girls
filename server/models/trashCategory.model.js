const { pool: db } = require('../config/database');

const trashCategory = () => {
    const create = async (trashCategoryData) => {
        try {
            const { price, categoryName, imageURL } = trashCategoryData;
            const sql = 'INSERT INTO trashCategory (price, categoryName, imageURL) VALUES (?, ?, ?)';
            const [result] = await db.query(sql, [price, categoryName, imageURL]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating trash category');
        }
    };

    const getById = async (categoryId) => {
        try {
            const sql = 'SELECT * FROM trashCategory WHERE categoryId = ?';
            const [result] = await db.query(sql, [categoryId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting trash category by ID');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM trashCategory';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all trash categories');
        }
    };

    const update = async (categoryId, updatedData) => {
        try {
            const { price, categoryName, imageURL } = updatedData;
            const sql = 'UPDATE trashCategory SET price = ?, categoryName = ?, imageURL = ? WHERE categoryId = ?';
            await db.query(sql, [price, categoryName, imageURL, categoryId]);
        } catch (error) {
            throw new Error('Error updating trash category');
        }
    };

    const deleteData = async (categoryId) => {
        try {
            const sql = 'DELETE FROM trashCategory WHERE categoryId = ?';
            await db.query(sql, [categoryId]);
        } catch (error) {
            throw new Error('Error deleting trash category');
        }
    };

    return {
        create,
        getById,
        getAll,
        update,
        deleteData,
    };
};

module.exports = {
    trashCategory,
};
