const locationModel = require('../models/location.model');

const createLocation = (req, res) => {
    const locationData = req.body;
    locationModel.create(locationData)
        .then((result) => {
            res.status(201).json({ locationId: result.insertId });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi tạo địa điểm người bán' });
        });
};

const getAllLocations = (req, res) => {
    locationModel.getAll()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi lấy danh sách địa điểm người bán' });
        });
};

const getLocationById = (req, res) => {
    const locationId = req.params.id;
    locationModel.getById(locationId)
        .then((result) => {
            if (result.length === 0) {
                res.status(404).json({ message: 'Không tìm thấy địa điểm người bán' });
            } else {
                res.json(result[0]);
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi lấy địa điểm người bán' });
        });
};

const updateLocation = (req, res) => {
    const locationId = req.params.id;
    const locationData = req.body;
    locationModel.update(locationId, locationData)
        .then((result) => {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy địa điểm người bán' });
            } else {
                res.json({ message: 'Cập nhật địa điểm người bán thành công' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi cập nhật địa điểm người bán' });
        });
};

const deleteLocation = (req, res) => {
    const locationId = req.params.id;
    locationModel.deleteData(locationId)
        .then((result) => {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy địa điểm' });
            } else {
                res.json({ message: 'Xóa địa điểm thành công' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Lỗi khi xóa địa điểm' });
        });
};

module.exports = {
    createLocation,
    getAllLocations,
    getLocationById,
    updateLocation,
    deleteLocation,
};