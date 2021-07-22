//* importing modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//* importing routes
const productRoute = require('./routes/productRoute');

//* express
const app = express();

//* connect database
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('Database connection successful')
);

//* Variables
const PORT = process.env.PORT || 5000;

//* Enable cors
app.use(cors());
//* Accept json in request body
app.use(express.json());
//* Serve static files
app.use(express.static('public'));

//* Routes
app.use('/api/products/', productRoute);

app.listen(PORT, () => console.log('App is running at ', PORT));
