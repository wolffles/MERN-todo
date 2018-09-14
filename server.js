const express = require('express');
const mongoose = require('mongoose');


const items = require('./routes/api/items')

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI

//connect to Mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//use routes... anything that refers to api/items shoudl refer to the items variable
app.use('/api/items', items);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
