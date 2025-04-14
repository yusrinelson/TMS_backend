const express = require('express');
const {
    getAllGoals,
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

const router = express.Router();

//get all goals
router.get('/', getAllGoals);

//get single goal
router.get('/:id', getGoal);

//create goal
router.post('/', createGoal);

//update goal
router.patch('/:id', updateGoal);

//delete goal
router.delete('/:id', deleteGoal);

module.exports = router;