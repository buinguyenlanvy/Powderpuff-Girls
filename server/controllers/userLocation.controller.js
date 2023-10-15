userLocationModel = require('../models/userLocation.model');

const createUserLocation = (req, res) => {
    const userLocationData = req.body;
    userLocationModel.create(userLocationData)
        .then((result) => {
            res.status(201).json({ userLocationId: result.insertId });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi tạo địa điểm người mua' });
        });
};

const getAllUserLocations = (req, res) => {
    userLocationModel.getAll()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi lấy danh sách địa điểm người mua' });
        });
};

const getUserLocationById = (req, res) => {
    const userLocationId = req.params.id;
    userLocationModel.getById(userLocationId)
        .then((result) => {
            if (result.length === 0) {
                res.status(404).json({ message: 'Không tìm thấy địa điểm người mua' });
            } else {
                res.json(result[0]);
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi lấy địa điểm người mua' });
        });
};

const updateUserLocation = (req, res) => {
    const userLocationId = req.params.id;
    const userLocationData = req.body;
    userLocationModel.update(userLocationId, userLocationData)
        .then((result) => {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy địa điểm người mua' });
            } else {
                res.json({ message: 'Cập nhật địa điểm người mua thành công' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi cập nhật địa điểm người mua' });
        });
};

const deleteUserLocation = (req, res) => {
    const userLocationId = req.params.id;
    userLocationModel.delete(userLocationId)
        .then((result) => {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy địa điểm người mua' });
            } else {
                res.json({ message: 'Xóa địa điểm người mua thành công' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi xóa địa điểm người mua' });
        });
}; 

module.exports = {
    createUserLocation,
    getAllUserLocations,
    getUserLocationById,
    updateUserLocation,
    deleteUserLocation
};