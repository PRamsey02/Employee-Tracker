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

// Function after connection is established and welcome image is displayed
afterConnection = () => {
    console.log(",-----------------------------------------------------.")
    console.log("|                                                     |")
    console.log("|   _____                 _                           |")
    console.log("|  | ____|_ __ ___  _ __ | | ___  _   _  ____  ____   |")
    console.log("|  |   _|| '_ ` _ \| '_ \| |/ _ \| | | |/  _ \/  _ \  |")
    console.log("|  |  |__| | | | | | |_) | | (_) | |_| |   __/   __/  |")
    console.log("|  |_____|_| |_| |_| .__/|_|\___/ \__, |\____|\____|  |")
    console.log("|                  |_|            |____/              |")
    console.log("|   __  __                                            |")
    console.log("|  |  \/  | __ _ _ __   __ _  __ _  ____ _ __         |")
    console.log("|  | |\/| |/ _ `| '_ \ / _ `|/ _ `|/  _ \ '__|        |")
    console.log("|  | |  | | (_| | | | | (_| | (_| |   __/ |           |")
    console.log("|  |_|  |_|\__,_| | |_|\__,_|\__, |\____|_|           |")
    console.log("|                            |____/                   |")
    console.log("|                                                     |")
    console.log("`-----------------------------------------------------'")
    promptUser();
  };

// Inquirer prompt for user questions
const promptUser = () => {
    inquirer.prompt ([
        {
        type: 'list',
        name: 'choices', 
        message: 'What would you like to do?',
        choices: ['View all departments', 
                  'View all roles', 
                  'View all employees', 
                  'Add a department', 
                  'Add a role', 
                  'Add an employee', 
                  'Update an employee role',
                  'Update an employee manager',
                  "View employees by department",
                  'Delete a department',
                  'Delete a role',
                  'Delete an employee',
                  'View department budgets',
                  'No Action']
      }
    ])

      .then((answers) => {
        const { choices } = answers; 

        if (choices === "View all departments") {
          showDepartments();
        }
        if (choices === "View all roles") {
          showRoles();
        }
        if (choices === "View all employees") {
          showEmployees();
        }
        if (choices === "Add a department") {
          addDepartment();
        }
        if (choices === "Add a role") {
          addRole();
        }
        if (choices === "Add an employee") {
          addEmployee();
        }
        if (choices === "Update an employee role") {
          updateEmployee();
        }
        if (choices === "Update an employee manager") {
          updateManager();
        }
        if (choices === "View employees by department") {
          employeeDepartment();
        }
        if (choices === "Delete a department") {
          deleteDepartment();
        }
        if (choices === "Delete a role") {
          deleteRole();
        }
        if (choices === "Delete an employee") {
          deleteEmployee();
        }
        if (choices === "View department budgets") {
          viewBudget();
        }
        if (choices === "No Action") {
          connection.end()
      };
    });
  };