worktimeModel = require('../models/worktime.model');

const createWorktime = (req, res) => {
    const worktimeData = req.body;
    worktimeModel.create(worktimeData)
        .then((result) => {
            res.status(201).json({ worktimeId: result.insertId });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi tạo giờ làm' });
        });
};

const getAllWorktimes = (req, res) => {
    worktimeModel.getAll()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi lấy danh sách giờ làm' });
        });
};

const getWorktimeById = (req, res) => {
    const worktimeId = req.params.id;
    worktimeModel.getById(worktimeId)
        .then((result) => {
            if (result.length === 0) {
                res.status(404).json({ message: 'Không tìm thấy giờ làm' });
            } else {
                res.json(result[0]);
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi lấy giờ làm' });
        });
};

const updateWorktime = (req, res) => {
    const worktimeId = req.params.id;
    const worktimeData = req.body;
    worktimeModel.update(worktimeId, worktimeData)
        .then((result) => {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy giờ làm' });
            } else {
                res.json({ message: 'Cập nhật giờ làm thành công' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi cập nhật giờ làm' });
        });
};

const deleteWorktime = (req, res) => {
    const worktimeId = req.params.id;
    worktimeModel.delete(worktimeId)
        .then((result) => {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy giờ làm' });
            } else {
                res.json({ message: 'Xóa giờ làm thành công' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi xóa giờ làm' });
        });
};

module.exports = {
    createWorktime,
    getAllWorktimes,
    getWorktimeById,
    updateWorktime,
    deleteWorktime,
};