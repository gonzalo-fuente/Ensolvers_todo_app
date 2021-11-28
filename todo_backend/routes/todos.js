const express = require('express');
const router = express.Router();
const {sequelize, Todo} = require('../models');

// Get all todos
router.get('/',async (req, res) => {
   try {
        const todos = await Todo.findAll();
        
        return res.status(200).json(todos);
   }
   catch (error) {
        console.log(error);
        return res.status(500).json(error);
   }
});

// Create a todo
router.post('/',async (req, res) => {
    const { text, isDone } = req.body;   
 
    try {
 
       const todo = await Todo.create({ text, isDone });
 
       return res.status(201).json(todo);
    }
    catch (error) {
       console.log(error);
       return res.status(400).json(error);
    }
 });

 //Update a todo
 router.put('/',async (req, res) => {
   const { id, text, isDone } = req.body;   

   try {

      const todo = await Todo.update({ text, isDone }, { where: { id } });

      return res.status(201).send({ success: true });
   }
   catch (error) {
      console.log(error);
      return res.status(400).json(error);
   }
});

 //Delete a todo
 router.delete('/',async (req, res) => {
   const { id } = req.body;   

   try {

      await Todo.destroy({ where: { id } });

      return res.status(201).send({ success: true });
   }
   catch (error) {
      console.log(error);
      return res.status(400).json(error);
   }
});

module.exports = router;