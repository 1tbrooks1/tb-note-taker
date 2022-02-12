const router = require('express').Router();
const fs = require('fs');
let db = require('../../db/db.json');

router.get('/notes', (req, res) => {
   // get all note from database that exist 
   db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
   res.json(db);
});

router.post('/notes', (req, res) => {
   const { title, text } = req.body;
   const id = Math.floor(Math.random() * 10000)
   db.push({ title, text, id })

   fs.writeFile('./db/db.json', JSON.stringify(db, null, 3), (err) => {
      if (err) throw err;
      res.json(db);
   });
 });

router.delete('/notes/:id', (req, res) => {
   // delete a note 
   let newNote = [];
   for (let i = 0; i < db.length; i++) {
      if (db[i].id != req.params.id) {
         newNote.push(db[i])
      }
   }
   db = newNote
   fs.writeFile('./db/db.json', JSON.stringify(db, null, 3), (err) => {
      if (err) throw err;
      res.json(db);
   })
});

module.exports = router 