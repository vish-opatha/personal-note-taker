// Importing the required modules
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended :true}));

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });






// The app is listening to the given port and display message
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);