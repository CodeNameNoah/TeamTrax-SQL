# TeamTrax-SQL

I recently completed a project where I developed a command-line application content management system (CMS) using Inquirer, Figlet, and console.table. This project was aimed at creating a system to manage employee data and view the outputs in formatted tables.

## Description

To begin, I used Inquirer to create a series of prompts that would gather necessary information about employees such as name, ID, email, and role. I then used this information to create an object for each employee, which was stored in an array. The user could add, view, or update employee data at any time by selecting options from the menu.

To make the application more user-friendly, I added Figlet to display a banner at the top of the application. This added a professional touch to the interface and made it easier to identify the application.

Finally, I incorporated console.table to display the employee data in a formatted table. This made it easy to view the information at a glance and allowed users to sort and filter the data based on their needs.

Overall, this project was a great learning experience as it allowed me to work with Inquirer, Figlet, and console.table, which are popular Node.js packages used in command-line applications. I am excited to continue working on similar projects and exploring new ways to create interactive and user-friendly command-line applications.

---

## Languages and Technologies Used

[![Socials](https://skillicons.dev/icons?i=js,git,mysql,nodejs)](https://skillicons.dev)

| Featured Technology Used |                        Link                         |
| :----------------------: | :-------------------------------------------------: |
|        `Node.js`         |           [LINK](https://nodejs.dev/en/)            |
|        `Inquirer`        |   [LINK](https://www.npmjs.com/package/inquirer)    |
|          `NPM`           |           [LINK](https://www.npmjs.com/)            |
|         `Mysql`          |           [LINK](https://www.mysql.com/)            |
|         `Figlet`         |    [LINK](https://www.npmjs.com/package/figlet)     |
|     `Console.table`      | [LINK](https://www.npmjs.com/package/console.table) |

---

| Collaborators |                                                                                                                                  Socials                                                                                                                                   |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `Noah Hoang`  | [![Socials](https://skillicons.dev/icons?i=git)](https://github.com/codenamenoah) [![Socials](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/codenamenoah/) [![Socials](https://skillicons.dev/icons?i=twitter)](https://twitter.com/CodeNameNoahH) |

## Take A Look At Our Application In Action! [CLICK PREVIEW TO WATCH VIDEO!]

- Deployed Site On Heroku - [Note it Down!](https://note-it-down.herokuapp.com/)
- ![Note It Down!](https://user-images.githubusercontent.com/127361736/235059034-78b9ac82-5a9b-47e4-b952-3ffd79b3ca79.gif)

---

## Installation

**To Clone Our Repository Using CLI**

1. Click on the green code button and copy the link for the SSH key.
2. Once clip-boarded load up a command line interface and change directory to one of your preference
3. Enter in the command `git clone git@github.com:CodeNameNoah/TeamTrax-SQL.git`
4. Enter your protected SSH password
5. Enjoy!

**To Download Our Repository as a ZIP File**

1. Click on the green code button
2. In the bottom of the drop-down menu, click Download Zip
3. Enjoy!

![github](https://user-images.githubusercontent.com/127361736/227422005-d28a9020-e331-4098-976b-df9c1e545bb4.png)

---

## Usage

Users would want to use Note-It-Down because it provides a simple and convenient way to keep track of important information or tasks. Whether it's a grocery list, meeting notes, or reminders for upcoming appointments, Note-It-Down makes it easy to jot down and organize these items. Plus, with the ability to delete notes once they're no longer needed, users can keep their workspace clutter-free.

To use TeamTrax-SQL, follow these simple instructions:

1. This is a command-line interface (CLI) application that uses Node.js, MySQL, and the inquirer.js library to manage a company's employee database.

2. Here is a simple step-by-step guide to using this CLI application:

3. Install Node.js and MySQL on your computer if you haven't already.

4. Open a new file in your code editor, and copy and paste the code into it.

5. Save the file with a meaningful name, such as "employeeDB.js".

6. In the terminal, navigate to the folder where you saved the file.

7. Install the required dependencies by running the following command in the terminal: npm install

8. Start the application by running the following command in the terminal: node server.js

9. The application will start and display a title and a menu with options for various actions.

10. Use the arrow keys to select an option and press Enter to choose it.

11. Follow the prompts to complete the chosen action, such as entering the name of a new department to add or updating an employee's role ID.

12. After each action, the menu will be displayed again, allowing you to choose another action or exit the application.

Note: Make sure you have a MySQL server running on your computer with the appropriate database schema and data tables for the application to function correctly.

---

## Featured Code Snippet

```
const multiMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        loop: false,
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.option) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        case "Exit":
          console.log("See you next time!");
          db.end();
          break;
        default:
          console.log("Invalid! Please try again");
          multiMenu();
          break;
      }
    });
};

```

- This is where the magic happens, it is quite a lot I must admit.

Working on this particular part of the application was both challenging and exciting for me. Through this code, I got the chance to work with an external package called inquirer and learned a lot about how to use it effectively.

This section of the code uses inquirer.prompt() to present the user with a list of options, and then it handles the user's selection by executing the appropriate function based on the user's choice using a switch statement.

While working on this code, I discovered that inquirer is a powerful tool for creating interactive command-line applications. I also learned about the importance of good user interface design in creating applications that are easy to use and navigate.

Overall, this was a difficult but exciting part of the application to complete, and it helped me gain a deeper understanding of how to use inquirer effectively and the importance of user interface design in creating functional applications.

---

## Credits & Source Codes

- Guide for Gifs to use in README.md

  - https://www.youtube.com/watch?v=3RlpVrYt_qE&ab_channel=AskCloudArchitech

- Documentation for NPM

  - https://www.npmjs.com

- Documentation for NPM 'Inquirer'

  - https://www.npmjs.com/package/inquirer

- Documentation for Node.js

  - https://nodejs.org/en

- Documentation on MySQL

  - https://www.mysql.com/

- Documentation on figlet

  - https://www.npmjs.com/package/figlet

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the MIT license.

---
