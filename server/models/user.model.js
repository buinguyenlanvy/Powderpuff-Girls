const { pool: db } = require('../config/database');

const user = () => {
    const create = async (userData) => {
        try {
            const { name, email, phone, password, imageURL } = userData;
            const sql = 'INSERT INTO user (name, email, phone, password, imageURL) VALUES (?, ?, ?, ?, ?)';
            const [result] = await db.query(sql, [name, email, phone, password, imageURL]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating user');
        }
    };

    const getById = async (userId) => {
        try {
            const sql = 'SELECT * FROM user WHERE userId = ?';
            const [result] = await db.query(sql, [userId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting user by ID');
        }
    };

    const getByPhoneNumber = async (userId) => {
        try {
            const sql = 'SELECT * FROM user WHERE phone = ?';
            const [result] = await db.query(sql, [phone]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting user by phone number');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM user';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all users');
        }
    };

    const update = async (userId, updatedData) => {
        try {
            const { name, email, phone, password, imageURL } = updatedData;
            const sql = 'UPDATE user SET name = ?, email = ?, phone = ?, password = ?, imageURL = ? WHERE userId = ?';
            await db.query(sql, [name, email, phone, password, imageURL, userId]);
        } catch (error) {
            throw new Error('Error updating user');
        }
    };

    const deleteData = async (userId) => {
        try {
            const sql = 'DELETE FROM user WHERE userId = ?';
            await db.query(sql, [userId]);
        } catch (error) {
            throw Error('Error deleting user');
        }
    };

    return {
        create,
        getById,
        getAll,
        update,
        deleteData,
        getByPhoneNumber
    };
};

module.exports = {
    user,
};
