# TeamTrax-SQL

I recently completed a project where I developed a command-line application content management system (CMS) using Inquirer, Figlet, and console.table. This project was aimed at creating a system to manage employee data and view the outputs in formatted tables.

## Description

To begin, I used Inquirer to create a series of prompts that would gather necessary information about employees such as name, ID, email, and role. I then used this information to create an object for each employee, which was stored in an array. The user could add, view, or update employee data at any time by selecting options from the menu.

To make the application more user-friendly, I added Figlet to display a banner at the top of the application. This added a professional touch to the interface and made it easier to identify the application.

Finally, I incorporated console.table to display the employee data in a formatted table. This made it easy to view the information at a glance and allowed users to sort and filter the data based on their needs.

Overall, this project was a great learning experience as it allowed me to work with Inquirer, Figlet, and console.table, which are popular Node.js packages used in command-line applications. I am excited to continue working on similar projects and exploring new ways to create interactive and user-friendly command-line applications.

---

## Languages and Technologies Used

[![Socials](https://skillicons.dev/icons?i=html,css,js,git,heroku,express)](https://skillicons.dev)

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

## Take A Look At Our Application In Action!

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

To use Note-It-Down, follow these simple instructions:

1. Go to the Note-It-Down website.
2. Click on the "Get Started" button
3. There is an empty note template ready for you to use, just type in the Note Title and Note Text text fields.
4. To save, click the floppy disk interactive icon in the top right to save the note.
5. To make a new note, click the "+" interactive icon to create a new sticky note.
6. Type in the information or task you want to save.
7. To delete a note, click the trash can icon in the right corner of the note row.
8. That's it! With Note-It-Down, you can easily create and manage your notes with just a few clicks.

---

## Featured Code Snippet

```
app.delete("/api/notes/:id", (req, res) => {
  let deleteID = req.params.id;
  console.log(deleteID);

  readFile(path.join(__dirname, "./db/db.json"))
    .then((text) => {
      const notes = JSON.parse(text);
      const newNotes = notes.filter((obj) => obj.id != deleteID);
      newNotes.forEach((obj, index) => {
        obj.id = index + 1;
      });
      return JSON.stringify(newNotes, null, 4);
    })
    .then((notes) => {
      writeFile(path.join(__dirname, "./db/db.json"), notes);
    })
    .then(() => {
      console.info("Note successfully deleted.");
      res.send("Note successfully deleted.");
    })
    .catch((err) => console.error(err));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

```

- These lines of code ultiamtely sets up a route handler using the Express.js framework that deletes a note with a specified ID from a JSON file. It then assigns new unique IDs to the remaining notes, writes the updated array of notes back to the JSON file, and responds with a success message. Finally, the code starts listening for incoming HTTP requests on a specified port and logs a message to the console indicating that the application is running.

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

- Guide on Express

  - https://expressjs.com/

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the MIT license.

---
