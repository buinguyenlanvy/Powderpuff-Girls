// userController.js
const userModel = require('../models/user.model');

const loginUser = (req, res) => {
    const { phone, password } = req.body;
    const user = userModel.getUserByPhone(phone);

    if (!user || user.password !== password) {
        res.status(401).json({ message: 'Đăng nhập thất bại' });
    } else {
        res.json({ message: 'Đăng nhập thành công' });
    }
};

<<<<<<< HEAD
module.exports = {
    loginUser,
=======
const registerUser = (req, res) => {
    const user = userModel.createUser(req.body);

    if(!user) {
        return res.status(400).json({ message: 'Không thể tạo tài khoản' });
    } else {
        return res.json({ message: 'Tạo tài khoản thành công' });
    }
}

const getUsers = (req, res) => {
    const users = userModel.getAll();

    if (!users) {
        res.status(400).json({ message: 'Không thể lấy danh sách tài khoản' });
    } else {
        res.json(users);
    }
};

const getUserById = (req, res) => {
    const user = userModel.getById(req.params.id);

    if (!user) {
        res.status(400).json({ message: 'Không thể lấy tài khoản' });
    } else {
        res.json(user);
    }
};

const updateUser = (req, res) => {
    const { name, phone, password } = req.body;
    const user = userModel.update(req.params.id, name, phone, password);

    if (!user) {
        res.status(400).json({ message: 'Không thể cập nhật tài khoản' });
    } else {
        res.json({ message: 'Tài khoản đã được cập nhật' });
    }
};

const deleteUser = (req, res) => {
    const user = userModel.deleteData(req.params.id);

    if (!user) {
        res.status(400).json({ message: 'Không thể xóa tài khoản' });
    } else {
        res.json({ message: 'Tài khoản đã được xóa' });
    }
};


module.exports = {
    loginUser,
    registerUser,
    getUsers,
    getUserById,
    updateUser,

>>>>>>> 7db4ba0f34284d5f1c8865a13d05b94a373e920d
};
