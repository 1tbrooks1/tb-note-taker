const path = require('path');
const router = require('express').Router();



// Get notes route
router.get('/notes', (req, res) => {
    res.sendFile(__dirname, '../../public/assets/notes.html')
});

// Get all route
router.get('*', (req, res) => {
    res.sendFile(__dirname, '../../public/assets/index.html')
});

module.exports = router