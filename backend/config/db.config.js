// Import the sql module Promise Wrapper
const mysql = require('mysql2/promise');

// prepare the connection to the database
const dbConfig = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
}

// create the connection pool
const pool = mysql.createPool(dbConfig);

// Prepare a function that will excute the SQL queries asychronously
async function query(sql, params) { 
    const [rows, fields] = await pool.execute(sql, params);
    return rows;
}

// Export the query function for use in the application
module.exports = {
    query
};