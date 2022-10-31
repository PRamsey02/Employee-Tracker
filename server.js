// Importing dependencies
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

require('dotenv').config()

// Connection to database
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected as id ' +  connection.threadId);
    afterConnection();
});