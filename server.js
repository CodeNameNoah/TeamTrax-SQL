const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    password: "963147852Rocks!",
    database: "employee_db",
  },
  console.log(`Successfully connected to the employee_db database.`)
);
db.connect((error) => {
  if (error) throw error;

  promptStart();
});

var figlet = require("figlet");

figlet("Staff Spot Express", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

const homeQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "homeOptions",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
    ],
  },
];

const terminalQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "terminalOptions",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
    ],
  },
];

const invokeStart = function () {
  inquirer.prompt(terminalQuestions).then((response) => {
    if (response.terminalOptions === "View All Employees") {
      allEmployees();
    } else if (response.terminalOptions === "Add an Employee") {
      addEmployee();
    } else if (response.terminalOptions === "Update an Employee Role") {
      updateEmployees();
    } else if (response.terminalOptions === "View All Roles") {
      allRoles();
    } else if (response.terminalOptions === "Add a Role") {
      addRole();
    } else if (response.terminalOptions === "View All Departments") {
      allDepartments();
    } else if (response.terminalOptions === "Add a Department") {
      addDepartments();
    }
  });
};

function allDepartments() {
  db.query("SELECT * FROM department", (error, response) => {
    if (error) throw error;
    console.table(response);
    invokeStart();
  });
}

function allEmployees() {
  db.query("SELECT * FROM employee", (error, response) => {
    if (error) throw error;
    console.table(response);
    invokeStart();
  });
}

function allRoles() {
  db.query("SELECT * FROM role", (error, response) => {
    if (error) throw error;
    console.table(response);
    invokeStart();
  });
}
