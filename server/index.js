// index.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:8081', // Allow requests from your application
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
}));

// Database configuration
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
      const userName = results[0].name;
      res.status(200).send(`<h1>Welcome, ${userName}!</h1><p>This page is currently empty.</p>`);
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Register endpoint
app.post('/register', (req, res) => {
  const { first_name, last_name, email, phone, date_of_birth, password } = req.body;

  // Insert the new user into the database
  const query = 'INSERT INTO Users (first_name, last_name, email, phone, date_of_birth, password) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [first_name, last_name, email, phone, date_of_birth, password], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Failed to register user', error: err });
    
    res.status(201).json({ success: true, message: 'User registered successfully' });
  });
});

// Book Table endpoint
app.post('/book-table', (req, res) => {
  const { username, telephone_number, booking_date, booking_time, location } = req.body;

  // Validate input
  if (!username || !telephone_number || !booking_date || !booking_time || !location) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Database logic to insert booking
  const query = 'INSERT INTO Bookings (username, telephone_number, booking_date, booking_time, location) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [username, telephone_number, booking_date, booking_time, location], (err, results) => {
      if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ success: false, message: 'Failed to book table', error: err });
      }
      return res.status(200).json({ success: true, message: 'Booking confirmed!' });
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));