const Task = require('../models/tasksModel');

//GET all tasks for a specific goal
const getTasksByGoal = async (req, res) => {
    const {goalId} = req.params;//get goalId from url

    try{
        const tasks = await Task.find({goal: goalId}).sort({createdAt: -1});

        res.status(200).json(tasks);
    } catch (error){
        res.status(400).json({message: "task not found"})
    }
}


//create a new task(under a goal)
const createTask = async (req, res) => {
    const {goalId} = req.params;
    const {title, description, status, isCompleted} = req.body;

    if (!title) {
        return res.status(404).json({message: 'Please add a title'});
    }

    try{
        const newTask = await Task.create({title, goal: goalId, description, status, isCompleted});
        res.status(200).json(newTask);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//GET a single task


//update a task
const updateTask = async (req, res) => {
    const {id } = req.params

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedTask) return res.status(404).json({message: 'Task not found'});

        res.status(200).json(updatedTask);
    } catch(error){
        res.status(404).json({ message: "Task not found" });
    }
}

//delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params

    try{
        const deletTask = await Task.findByIdAndDelete(id);
        if(!deletTask) return res.status(404).json({message: 'Task not found'});

        res.status(200).json({message: 'Task deleted successfully'});
    } catch(error){
        res.status(404).json({ message: "Goal not found" });
    }
    
}

module.exports = {
    getTasksByGoal,
    createTask,
    updateTask,
    deleteTask
}