const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Testing!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 1000;



app.listen(port, () => console.log(`Server running on port ${port}`));