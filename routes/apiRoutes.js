const path = require('path');
const fs =  require('fs');
const { v4: uuidv4 } = require('uuid');
const { json } = require('express');

const router = require('express').Router();



// module.exports = app =>{

// GET - read notes
router.get('/notes', (req, res) =>{
  // res.readFile(path.join(__dirname, '../db/db.json'));
  fs.readFile(path.join(__dirname, '../db/db.json'),"utf8",(err,data)=>{
    const notes = JSON.parse(data)
    res.json(notes)
  })
});

// POST - add notes
router.post('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'),"utf8",(err,data)=>{
    const notes = JSON.parse(data)
    if (req.body) { 
      const { title, text } = req.body;
      const newNotes = {
        title,
        text,
        id:uuidv4(),
      };
      notes.push(newNotes)
      fs.writeFile('db/db.json',JSON.stringify(notes),(err,data)=>{
        
        // res.json(JSON.parse(data)); 
        res.json(newNotes)
      })
    } else {
      res.json('Error in adding notes');
    }
  })
 


});

module.exports = router

// POST read json file and return all saved notes
// fb.post('/', (req, res) => {
//   fs.writeFile('db/db.json'.JSON.stringify(db));
//   res.json(db);
// });


