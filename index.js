const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./database/db'); // Ensure this file exists
const studentRoutes = require('./routes/students'); // Ensure the path is correct

app.use(express.json());
app.use(studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});