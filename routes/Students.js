const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Ensure the path is correct

// Get all students
router.get('/students', (req, res) => {
    db.query('SELECT * FROM Students', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
        } else {
            res.json(results);
        }
    });
});

// Export the router
module.exports = router;