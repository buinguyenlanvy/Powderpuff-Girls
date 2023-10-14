const { pool: db } = require('../config/database');

const userLocation = () => {
    const create = async (userLocationData) => {
        try {
            const { location_userId, houseNumber, street, district, city } = userLocationData;
            const sql = 'INSERT INTO userLocation (location_userId, houseNumber, street, district, city) VALUES (?, ?, ?, ?, ?)';
            const [result] = await db.query(sql, [location_userId, houseNumber, street, district, city]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating user location');
        }
    };

    const getById = async (userlocationId) => {
        try {
            const sql = 'SELECT * FROM userLocation WHERE userlocationId = ?';
            const [result] = await db.query(sql, [userlocationId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting user location by ID');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM userLocation';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all user locations');
        }
    };

    const update = async (userlocationId, updatedData) => {
        try {
            const { location_userId, houseNumber, street, district, city } = updatedData;
            const sql = 'UPDATE userLocation SET location_userId = ?, houseNumber = ?, street = ?, district = ?, city = ? WHERE userlocationId = ?';
            await db.query(sql, [location_userId, houseNumber, street, district, city, userlocationId]);
        } catch (error) {
            throw new Error('Error updating user location');
        }
    };

    const deleteData = async (userlocationId) => {
        try {
            const sql = 'DELETE FROM userLocation WHERE userlocationId = ?';
            await db.query(sql, [userlocationId]);
        } catch (error) {
            throw new Error('Error deleting user location');
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
    userLocation,
};
