// Importing the required modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./utils/uuid.js');
const data = require ('./db/db.json');

// Defining variables 
const PORT = process.env.PORT || 3001;
const app = express();

// Define the middleware required
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(express.static('public'));

// Route for the root folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Route using get for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API get route for /api/notes
app.get('/api/notes', (req, res) => {
    res.json(data);
});

// API post route for /api/notes
app.post('/api/notes', (req, res) => {
  
  // Destructuring details in the request body
  const { title, text } = req.body;

  if (title && text ) 
  {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    fs.readFile('./db/db.json', 'utf8', (err, notesData) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const existingNotes = JSON.parse(notesData);

        // Add a new review
        existingNotes.push(newNote);

        // Write updated reviews back to the file
        fs.writeFile(
          './db/db.json',
          JSON.stringify(existingNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Your new note is saved!')
        );
      }
    });

    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.json(response);
  } else {
    res.json('Error in posting review');
  }
});
  //################################################
  





  //#################################################

// Wild card route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});






// The app is listening to the given port and display message
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);