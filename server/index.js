// index.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Initialize the Express application
const app = express();
app.use(cors());
app.use(express.json());

// Database configuration (replace with your RDS credentials)
const db = mysql.createConnection({
  host: 'kaapstadbrauhaus.cn84caiiuzgu.af-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'KaapstadBrauhaus123',
  database: 'kaapstadbrauhaus',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the application if the connection fails
  } else {
    console.log('Connected to the database');
  }
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM Users WHERE email = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Server error', error: err });
    
    if (results.length > 0) {
      // Assuming the user's name is stored in the `name` field in the Users table
      const userName = results[0].name; // Adjust the field name if necessary
      res.status(200).send(`<h1>Welcome, ${userName}!</h1><p>This page is currently empty.</p>`);
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Start the server
const PORT = 3000; // You can change the port number if needed
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));