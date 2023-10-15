const { pool: db } = require('../config/database');

const detailOrder = () => {
    const create = async (detailOrderData) => {
        try {
            const { userId, amount, orderId, trashcategoryId } = detailOrderData;
            const sql = 'INSERT INTO detailOrder (amount, orderId, trashcategoryId) VALUES ( ?, ?, ?)';
            const [result] = await db.query(sql, [amount, orderId, trashcategoryId]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating detail order');
        }
    };

    const getById = async (orderLineId) => {
        try {
            const sql = 'SELECT * FROM detailOrder WHERE orderLineId = ?';
            const [result] = await db.query(sql, [orderLineId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw Error('Error getting detail order by ID');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM detailOrder';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all detail orders');
        }
    };

    const update = async (orderLineId, updatedData) => {
        try {
            const { userId, amount, orderId, trashcategoryId } = updatedData;
            const sql = 'UPDATE detailOrder SET userId = ?, amount = ?, orderId = ?, trashcategoryId = ? WHERE orderLineId = ?';
            await db.query(sql, [userId, amount, orderId, trashcategoryId, orderLineId]);
        } catch (error) {
            throw new Error('Error updating detail order');
        }
    };

    const deleteData = async (orderLineId) => {
        try {
            const sql = 'DELETE FROM detailOrder WHERE orderLineId = ?';
            await db.query(sql, [orderLineId]);
        } catch (error) {
            throw new Error('Error deleting detail order');
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
    detailOrder,
};
