const express = require('express');
const router = express.Router();
const { Todo } = require('../models');

// Get all todos
router.get('/',async (req, res) => {
   try {
        const todos = await Todo.findAll({ 
           order: [['id', 'ASC']],
         });
        
        return res.status(200).json(todos);
   }
   catch (error) {
        console.log(error);
        return res.status(500).end();
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
       return res.status(400).end();
    }
 });

 //Update a todo
 router.put('/:id',async (req, res) => {
   const { text, isDone } = req.body;   
   const id = req.params.id

   try {

      const todo = await Todo.update({ text, isDone }, { where: { id } });

      return res.status(201).end();
   }
   catch (error) {
      console.log(error);
      return res.status(400).end();
   }
});

 //Delete a todo
 router.delete('/:id',async (req, res) => {
   //const { id } = req.body;   
   const id = req.params.id
   
   try {

      await Todo.destroy({ where: { id } });

      return res.status(201).end();
   }
   catch (error) {
      console.log(error);
      return res.status(400).end();
   }
});

module.exports = router;