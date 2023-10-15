const scheduleModel = require('../models/schedule.model')
const workTime = require('../models/worktime.model')

const getAllSchedule = () => {
    try {
        const schedules = scheduleModel().getAll();
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách loại ve chai' });
    }
}

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
    findNearbyWorkTimesController,
    getAllSchedule
};
