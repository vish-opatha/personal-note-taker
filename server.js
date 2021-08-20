// Importing the required modules
const express = require('express');
const path = require('path');
const uuid = require('./utils/uuid.js');
const data = require ('./db/db.json');

// Defining variables 
const PORT = process.env.PORT || 3001;
const app = express();

// Define the middleware required
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(express.static('public'));

// Route using get for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API get route for /api/notes
app.get('/api/notes', (req, res) => {
    res.json(data);
});

// Wild card route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});






// The app is listening to the given port and display message
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);