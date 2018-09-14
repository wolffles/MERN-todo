const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const tasks = require('./routes/api/tasks')

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI

//connect to Mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//use routes... anything that refers to api/tasks should refer to the tasks variable
app.use('/api/tasks', tasks);

//Serve Static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
