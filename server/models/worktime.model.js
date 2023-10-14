const { pool: db } = require('../config/database');

const workTime = () => {
    const create = async (workTimeData) => {
        try {
            const { startWorktimeId, endWorktimeId, workDate } = workTimeData;
            const sql = 'INSERT INTO workTime (startWorktimeId, endWorktimeId, workDate) VALUES (?, ?, ?)';
            const [result] = await db.query(sql, [startWorktimeId, endWorktimeId, workDate]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating work time');
        }
    };

    const getById = async (worktimeId) => {
        try {
            const sql = 'SELECT * FROM workTime WHERE worktimeId = ?';
            const [result] = await db.query(sql, [worktimeId]);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error getting work time by ID');
        }
    };

    const getAll = async () => {
        try {
            const sql = 'SELECT * FROM workTime';
            const [result] = await db.query(sql);
            return result;
        } catch (error) {
            throw new Error('Error getting all work times');
        }
    };

    const update = async (worktimeId, updatedData) => {
        try {
            const { startWorktimeId, endWorktimeId, workDate } = updatedData;
            const sql = 'UPDATE workTime SET startWorktimeId = ?, endWorktimeId = ?, workDate = ? WHERE worktimeId = ?';
            await db.query(sql, [startWorktimeId, endWorktimeId, workDate, worktimeId]);
        } catch (error) {
            throw new Error('Error updating work time');
        }
    };

    const deleteData = async (worktimeId) => {
        try {
            const sql = 'DELETE FROM workTime WHERE worktimeId = ?';
            await db.query(sql, [worktimeId]);
        } catch (error) {
            throw new Error('Error deleting work time');
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
    workTime,
};
