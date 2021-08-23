// Importing the required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

const uuid = require('./helper/uuid.js');
const app = express();
const PORT = process.env.PORT || 3001;

// Define the middleware required
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

// Route for the root folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Route for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API get route for /api/notes
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '/db/db.json'),(error, data) => {
    res.json (JSON.parse(data));
  });
});

// API post route for /api/notes.
// This is used to add new notes to db.json file.
app.post('/api/notes', (req, res) => 
{
  const { title, text } = req.body;

  if (title && text) 
  {
      const newNote = { title, text, id: uuid(),};

      // Reading the db.json file
      fs.readFile('./db/db.json', 'utf8', (err, notesData) => 
      {
        if (err) { console.error(err); } 
        
        else 
        {
        // Convert string into JSON object
        const existingNotes = JSON.parse(notesData);

        // Add a new review
        existingNotes.push(newNote);

        // Write new notes to the db.json file
        fs.writeFile('./db/db.json', JSON.stringify(existingNotes, null, 4),
          (writeErr) =>
            writeErr
            ? console.error(writeErr)
            : console.log("Written to the db"));
        }
    });
  
    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.json(response);
  } 
  
  else {
    res.json('Error in posting review');
  }
});
  //################################################






  // let userJSON = require('./users.json');

app.delete('/api/notes/:id', (req, res) => {
    const data = require ('./db/db.json');
    let deleteNoteId = req.params.id;
    let deleteNote = data.find(note => note.id == deleteNoteId);

    data.splice(data.indexOf(deleteNote),1);

    fs.writeFile( './db/db.json',
      JSON.stringify(data, null, 4),
      (writeErr) =>
        writeErr
          ? console.error(writeErr)
          : res.json("success")
    );

    
   
    


});


  //#################################################

// Wild card route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});






// The app is listening to the given port and display message
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);