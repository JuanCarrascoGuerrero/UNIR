import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    usuario: 'root',
    password: 'mysqlpassword',
    port:3306,
    database:'clinica',
});

export default pool;