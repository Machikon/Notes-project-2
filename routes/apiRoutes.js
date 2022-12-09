const path = require('path');
const fs =  require('fs');
const { v4: uuidv4 } = require('uuid');

const router = require('express').Router;



module.exports = app =>{

// GET - read notes
app.get('/api/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

// POST - add notes
app.post('/api/notes', (req, res) => {
  fs.writeFile('db/db.json').then((db) => res.json(JSON.parse(db)));

  const { title, text } = req.body;

  if (req.body) {
    const newNotes = {
      title,
      text,
      id:uuidv4(),
    };

    readAndAppend(newNotes, 'db/db.json');
    res.json(`Notes added successfully 🚀`);
  } else {
    res.error('Error in adding notes');
  }
});

// POST read json file and return all saved notes
// fb.post('/', (req, res) => {
//   fs.writeFile('db/db.json'.JSON.stringify(db));
//   res.json(db);
// });

}
