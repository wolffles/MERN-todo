const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @accesss Public
router.get('/', (req, res) => {
  //returns a promise so have to use .then
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
}); // this / is already the end point for api/items/ since your already in the route.

// @route POST api/items
// @desc POST an Items
// @accesss Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item)); // save is a promise based so we use .then
});

// @route delete api/items
// @desc delete An Items
// @accesss Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id).then(item => item.remove().then(()=> res.json({success:true})))
  .catch(err => res.status(404).json({success:false}));
})

module.exports = router;
