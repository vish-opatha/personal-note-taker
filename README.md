# Personal Note Taker

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
     
  ## Description
  This project is a personal note taking app, which allows the user to add new notes, delete them and to view them when required. This app is developed using HTML5, CSS and Javascript for frontend and backend with Express.js and Node.js.
  
  ## Table of Contents
  * [Important Links](#Important-Links)
  * [Mock-up](#Mock-up)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Technical Acceptance Work Done](#Technical-Acceptance-Work-Done)
  * [Repository Quality Work Done](#Repository-Quality-Work-Done)
  * [Questions](#Questions)
  
  ## Important Links
  Following are the important links related to this application.
  * [Personal Note Taker - Github Repo](https://github.com/vish-opatha/personal-note-taker)
  * [Personal Note Taker - Heroku Deployed App](https://personal-note-taker-v.herokuapp.com/)
  * [Walkthrough Video](https://drive.google.com/file/d/1vhYlg1mLTU8D2uR8s-dZn54WPvT2Ks2J/view?usp=sharing)

  ## Mock-up
  Following images shows the landing page and notes manupulation page.

  *Landing Page*

  ![Landing Page](./images/prompts.JPG)

  *Notes Page*

  ![Notes Page](./images/prompts.JPG)

  ## Installation
  To install the necessary dependencies, run the following command:

  ```
  npm install 
  ```
  
  ## Usage
  This app can be used in your local machine or as an online deployed version. If you are using it in your local server, clone the project and install the dependencies using the instructions given in the 'Installation' section. To start the server, run the following command.

  ```
  node server.js
  ```

  Then you can visit http://localhost:3001 to use the app. 

  If you are hoping to use the online deployed version, please use the link given in the 'Important Links' section.

  ## Technical Acceptance Work Done
  1. The application loads with a landing page whih can directs the user to notes page. To direct the user to the notes page seperate route is used.
  2. When the notes page is loaded, the user can see the existing/saved notes.
  3. When both new note title and text is entered, save button is appeared to save the notes.
  4. After saving a new note, it will appear with the exisitng notes on the page.
  5. Once the user clicks on the note title, the description is presented to the user. If a user needs to enter a new notes, clicking on the write icon provides empty space to write new notes.
  6. When the user clicks on the delete icon, the specific note is deleted from the list.
  6. Routes are created for /, *, /notes, api/notes(GET/POST/DELETE) 

  ## Repository Quality Work Done
  1. Repository is named as team-profile-generator.
  2. Tags are indented accordingly and comments are included while following the best practices for naming conventions.
  3. Changes were committed multiple times with messages.

  ## Questions
  If you have any questions about the repo, open an issue or directly contact me at <v.opatha@gmail.com> You can find my other work at [vish-op](https://github.com/vish-op)