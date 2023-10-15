const Schedule = require('../models/schedule.model');

const saveSchedule = (req, res) => {
    try {
        const schedule = Schedule.create(req.body);
        res.status(201).json(schedule);
        schedule.save();
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo lịch hẹn'});
    }
};

const getSchedules = (req, res) => {
    try {
        const schedule = Schedule.getAll();
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi lấy danh sách lịch hẹn'});
    }
};

const getScheduleById = async (req, res) => {
    try {
        const schedule = Schedule.getById(req.params.id);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi lấy lịch hẹn'});
    }
}

const deleteSchedule = async (req, res) => {
    try {
        const schedule = Schedule.deleteData({ 
            where: { 
                id: req.params.id 
            } 
        });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json("message: Lỗi khi xóa lịch hẹn");
    }
};

const updateSchedule = (req, res) => {
    try {
        const schedule = Schedule.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json("message: Lỗi khi cập nhật lịch hẹn");
    }
};

module.exports = {
    saveSchedule,
    getSchedules,
    getScheduleById,
    deleteSchedule,
    updateSchedule,
};