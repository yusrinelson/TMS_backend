const Goal = require('../models/goalsModel')

//get all goals
const getAllGoals = async (req, res) => {
    try {
        const goals = await Goal.find().sort({createdAt: -1});
        res.status(200).json(goals);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//get single goal / goals by id
const getGoal = async (req, res) => {
    const { id } = req.params;

    try {
        const goal = await Goal.findById(id);

        if (!getGoal) return res.status(404).json({ message: 'Goal not found' });

        res.status(200).json(goal);
    } catch(error) {
        res.status(404).json({error: "Goal not found"})
    }

}

//create a new goal
const createGoal = async (req, res) => {
    const {title} = req.body;

    if(!title) {
        return res.status(404).json({message: 'Please add a title'})
    }

    try {
        const newGoal = await Goal.create({title});
        res.status(200).json(newGoal);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//update goal
const updateGoal = async (req, res) => {
    const { id } = req.params
    
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedGoal) return res.status(404).json({ message: 'Goal not found' });
    
        res.status(200).json(updatedGoal);
      } catch (error) {
        res.status(404).json({ message: "Goal not found" });
      }
}

//delete goal
const deleteGoal = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedGoal = await Goal.findByIdAndDelete(id);
      if (!deletedGoal) return res.status(404).json({ message: 'Goal not found' });
  
      res.status(200).json({ message: 'Goal deleted successfully' });
    } catch (error) {
      res.status(404).json({ message: "Goal not found" });
    }
}

module.exports = {
    getAllGoals,
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal
}