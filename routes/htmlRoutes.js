const router = require('express').Router();
const path = require('path');

// module.exports = app =>{

// GET - Route for notes
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET - Route for index.html file
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router
