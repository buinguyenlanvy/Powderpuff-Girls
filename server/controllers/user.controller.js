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

module.exports = {
    loginUser,
};
