const scheduleModel = require('../models/schedule.model')
const workTime = require('../models/worktime.model')

const getAllSchedule = () => {
    try {
        const schedules = scheduleModel().getAll();
        res.json(schedules);
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
const findNearbyWorkTimesController = async (req, res) => {
    try {
        const scheduleTime = req.body.scheduleTime;
        const timeThreshold = req.body.timeThreshold;

        const nearbyWorkTimes = await workTime.findNearbyWorkTimes(scheduleTime, timeThreshold);

        return res.status(200).json({ nearbyWorkTimes });
    } catch (error) {
        return res.status(500).json({ error: 'Lỗi khi tìm khung giờ gần' });
    }
};

module.exports = {
    saveSchedule,
    getSchedules,
    getScheduleById,
    deleteSchedule,
    updateSchedule,
    findNearbyWorkTimesController,
    getAllSchedule
};
