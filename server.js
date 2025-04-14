require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const goalRoutes = require('./routes/goalsRoutes')
const taskRoutes = require('./routes/tasksRoutes')


// create express app
const app = express();

//enable cors
app.use(cors());

//middleware
app.use(express.json()); //parse incoming JSON data in req.body

//routes
app.use('/api/goals', goalRoutes);
app.use('/api/tasks', taskRoutes);


//connect to db
connectDB(app.listen(process.env.PORT, () => {
    console.log("Listening for requests");
}));
