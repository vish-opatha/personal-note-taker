const fs = require('fs');
fs.readFile('./db/db.json', 'utf8', (err, notesData) => {
    if (err) 
    {
      console.error(err);
    } 
    
    else {
      console.log("Reading file");
    //   console.log(notesData);

      let existingData = JSON.parse(notesData);

      var x=5; var y=6;
      if(x==y)
      {
          console.log(`x=y`);
      } else{
          console.log(`x!=y`);
          let deleteId = "7b4b";
          let deleteNote = existingData.find(note => note.id == deleteId);

          console.log(` delete note ${deleteNote}`);

          let deleteIndex = existingData.indexOf(deleteNote);
          console.log(` delete note ${deleteIndex}`);
          existingData.splice(deleteIndex,1);

          console.log(`================================
          ${existingData}`);
            var i=1;
          existingData.forEach(a => {
              
              console.log(`${i} ${a.title} ${a.text}`);
              i++;
              
          });

          fs.writeFile(
            './db/db.json',
            JSON.stringify(existingData, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Your new note is saved!')
          );

        //   for (let index = 0; index < existingData.length; index++) {
        //     console.log(existingData[index].id);      
        //   }

      }
          
      console.log(`after reading`);
    }
});


// app.delete('/users/delete/:id', (req, res) => {
//     let deleteId = req.params.id; //Get the id through req.params.id of the object you are going to delete
//     let deleteObj = userJson.find(user => user.id == deleteId); // As you have only Id of the object, we want to get the entire object from the array. find() will fetch the object from the array whose id is equal to deleteId and assign it to deleteObj.
//     let deleteIndex = userJson.indexOf(deleteObj); //Find the index of the object fetched from the JSON array.
//     userJson.splice(deleteIndex,1); // Splice/ remove the object from the JSON Array.
//    res.send(deleteObj); // Send the deleted object as response.
// });