const router = require('express').Router();
const util = require('util');
const fs = require('fs');
const uuid = require('uuid');


router.get('/notes', (req, res) => {
   // get all note from database that exist 
   fs.readFile('../../db/db.json', 'utf8')
   .then(data => {
      return res.json(data)
   })
   .then(notes => console.log(notes))
   .catch(err => 
    res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    // to create a note
});

router.delete('/notes/:id', (req, res) => {
    // delete a note 
});

module.exports = router 