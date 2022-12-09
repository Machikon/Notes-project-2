const router = require('express').Router();
const path = require('path');

module.exports = app =>{

// GET - Route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET - Route for index.html file
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);
};
