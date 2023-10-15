const { pool: db } = require('../config/database');

const orderTransaction = () => {
    const create = async (orderTransactionData) => {
        try {
            const { timeCreate, scheduleId } = orderTransactionData;
            const sql = 'INSERT INTO OrderTransaction (timeCreate, scheduleId) VALUES (?, ?)';
            const [result] = await db.query(sql, [timeCreate, scheduleId]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating order transaction');
        }
    };

    const getById = async (orderId) => {
        try {
            const sql = 'SELECT * FROM OrderTransaction WHERE orderId = ?';
            const [result] = await db.query(sql, [orderId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting order transaction by ID');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM OrderTransaction';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all order transactions');
        }
    };

    const update = async (orderId, updatedData) => {
        try {
            const { timeCreate, scheduleId } = updatedData;
            const sql = 'UPDATE OrderTransaction SET timeCreate = ?, scheduleId = ? WHERE orderId = ?';
            await db.query(sql, [timeCreate, scheduleId, orderId]);
        } catch (error) {
            throw new Error('Error updating order transaction');
        }
    };

    const deleteData = async (orderId) => {
        try {
            const sql = 'DELETE FROM OrderTransaction WHERE orderId = ?';
            await db.query(sql, [orderId]);
        } catch (error) {
            throw new Error('Error deleting order transaction');
        }
    };

    const getOrderByUserId = async (userId) => {
        try {
            const sql = 'SELECT * FROM OrderTransaction WHERE userId = ?';
            await db.query(sql, [userId]);
        } catch (error) {
            throw new Error('Error selecting order transaction');
        }
    }

    return {
        create,
        getById,
        getAll,
        update,
        deleteData,
        getOrderByUserId
    };
};

module.exports = {
    orderTransaction,
};
