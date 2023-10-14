const Schedule = require('../models/schedule.model');

const saveSchedule = (req, res) => {
    try {
        const schedule = Schedule.create(req.body);
        res.status(201).json(schedule);
        schedule.save();
    } catch (error) {
        res.status(500).json(error);
    }
}

const getSchedule = (req, res) => {
    try {
        const schedule = Schedule.find();
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json(error);
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
        res.status(500).json(error);
    }
}

const updateSchedule = (req, res) => {
    try {
        const schedule = Schedule.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    saveSchedule,
    getSchedule,
    deleteSchedule,
    updateSchedule,
};