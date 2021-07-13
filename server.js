//* dotenv
require('dotenv').config();

//* express
const express = require('express');
const app = express();

//* connect database
const mongoose = require('mongoose');
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Database connection successful')
);

//* Variables
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => console.log('App is running at ', PORT));
