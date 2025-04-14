const express = require('express');
const {
    getTasksByGoal,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

const router = express.Router();

// Nested routes under goal
router.get('/goal/:goalId', getTasksByGoal);      // GET all tasks for a goal
router.post('/goal/:goalId', createTask);         // POST task for a goal
router.patch('/:id', updateTask);                   // PUT update a task
router.delete('/:id', deleteTask);                // DELETE a task

module.exports = router;
