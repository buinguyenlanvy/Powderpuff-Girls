const sql = require('mssql')
require('dotenv').config()

const sqlConfig = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    server: process.env.SQL_SERVER,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
}

const pool = new sql.ConnectionPool(sqlConfig)
pool.connect()
    .then(() => {
        console.log('Connected to the database')
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error)
    })

process.on('beforeExit', () => {
    pool.close()
})

module.exports = {
    pool,
}
