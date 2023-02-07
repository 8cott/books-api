// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo: ', process.env.MONGO_URI);
  }
);

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// INDEX
app.get('/', (req, res) => {
  res.send('Books API 📚');
});

// BOOKS
const booksController = require('./controllers/books_controller.js');
app.use('/books', booksController);

// LISTEN
app.listen(process.env.PORT);
console.log('listening on port:', PORT);
