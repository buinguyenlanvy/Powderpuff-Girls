const express = require('express')
require('dotenv').config()
const app = express()

// Database
require('./config/database')

// Start Server
const PORT = process.env.PORT || 8000
app.listen(PORT, async () => {
    console.log(`Server đã chạy http://localhost:${PORT}`)
})

// create order
const orderRoutes = require('./routes/order.route');
app.use('/create-orders', orderRoutes);

// see list of orders
const getAllOrerByUserId = require('./routes/order.route');
app.use('/get-orders', getAllOrerByUserId);

