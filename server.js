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
