const { pool: db } = require('../config/database');

const location = () => {
    const create = async (locationData) => {
        try {
            const { houseNumber, street, district, city } = locationData;
            const sql = 'INSERT INTO location (houseNumber, street, district, city) VALUES (?, ?, ?, ?)';
            const [result] = await db.query(sql, [houseNumber, street, district, city]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating location');
        }
    };

    const getById = async (locationId) => {
        try {
            const sql = 'SELECT * FROM location WHERE locationId = ?';
            const [result] = await db.query(sql, [locationId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting location by ID');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM location';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all locations');
        }
    };

    const update = async (locationId, updatedData) => {
        try {
            const { houseNumber, street, district, city } = updatedData
            const sql = 'UPDATE location SET houseNumber = ?, street = ?, district = ?, city = ? WHERE locationId = ?';
            await db.query(sql, [houseNumber, street, district, city, locationId]);
        } catch (error) {
            throw new Error('Error updating location');
        }
    };

    const deleteData = async (locationId) => {
        try {
            const sql = 'DELETE FROM location WHERE locationId = ?';
            await db.query(sql, [locationId]);
        } catch (error) {
            throw new Error('Error deleting location');
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
    location,
};




