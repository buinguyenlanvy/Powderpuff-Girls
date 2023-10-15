const { pool: db } = require('../config/database');

const schedule = () => {
    const create = async (scheduleData) => {
        try {
            const { worktimeId, locationId } = scheduleData;
            const sql = 'INSERT INTO schedule (worktimeId, locationId) VALUES (?, ?)';
            const [result] = await db.query(sql, [worktimeId, locationId]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating schedule');
        }
    };

    const getById = async (scheduleId) => {
        try {
            const sql = 'SELECT * FROM schedule WHERE scheduleId = ?';
            const [result] = await db.query(sql, [scheduleId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting schedule by ID');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM schedule';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all schedules');
        }
    };

    const update = async (scheduleId, updatedData) => {
        try {
            const { worktimeId, locationId } = updatedData;
            const sql = 'UPDATE schedule SET worktimeId = ?, locationId = ? WHERE scheduleId = ?';
            await db.query(sql, [worktimeId, locationId, scheduleId]);
        } catch (error) {
            throw new Error('Error updating schedule');
        }
    };

    const deleteData = async (scheduleId) => {
        try {
            const sql = 'DELETE FROM schedule WHERE scheduleId = ?';
            await db.query(sql, [scheduleId]);
        } catch (error) {
            throw new Error('Error deleting schedule');
        }
    };

<<<<<<< HEAD

    const findMatchingSchedules = async () => {
        try {
            const sql = `
                SELECT *
                FROM (Schedule
                JOIN WorkTime ON Schedule.worktimeId = WorkTime.worktimeId)
                JOIN Location ON Location.locationId = Location.locationId;
            `;
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Lỗi khi lấy thông tin kết hợp từ hai bảng');
        }
    };

    const findNearbyWorkTimes = async (scheduleTime, timeThreshold) => {
        try {
            const sql = `
                SELECT *
                FROM WorkTime
                WHERE ABS(TIMESTAMPDIFF(SECOND, ?, startWorktimeId)) <= ?;
            `;
            const [result] = await db.query(sql, [scheduleTime, timeThreshold]);
            return result;
        } catch (error) {
            throw new Error('Lỗi khi lấy thông tin khung giờ gần với giờ trong Schedule');
        }
    };


=======
>>>>>>> 7db4ba0f34284d5f1c8865a13d05b94a373e920d
    return {
        create,
        getById,
        getAll,
        update,
        deleteData,
<<<<<<< HEAD
        findMatchingSchedules,
        findNearbyWorkTimes
=======
>>>>>>> 7db4ba0f34284d5f1c8865a13d05b94a373e920d
    };
};

module.exports = {
    schedule,
};
