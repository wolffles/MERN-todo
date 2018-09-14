const express = require('express');
const router = express.Router();

//Task model
const Task = require('../../models/Task');

// @route GET api/tasks
// @desc Get All Tasks
// @accesss Public
router.get('/', (req, res) => {
  //returns a promise so have to use .then
  Task.find()
    .sort({ date: -1 })
    .then(tasks => res.json(tasks));
}); // this / is already the end point for api/tasks/ since your already in the route.

// @route POST api/tasks
// @desc POST an Tasks
// @accesss Public
router.post('/', (req, res) => {
  const newTask = new Task({
    name: req.body.name
  });
  newTask.save().then(task => res.json(task)); // save is a promise based so we use .then
});

// @route delete api/tasks
// @desc delete An Tasks
// @accesss Public
router.delete('/:id', (req, res) => {
  Task.findById(req.params.id).then(task => task.remove().then(()=> res.json({success:true})))
  .catch(err => res.status(404).json({success:false}));
})

module.exports = router;
