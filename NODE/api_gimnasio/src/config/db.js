const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({ //Acostumbra a usar un .env
    host: process.env.DB_HOST,//'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

module.exports = pool;