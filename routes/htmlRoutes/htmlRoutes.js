const path = require('path');
const router = require('express').Router();


// Get notes route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

// Get all route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router