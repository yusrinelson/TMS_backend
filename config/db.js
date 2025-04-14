const mongoose = require('mongoose');

//connect to db
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to mongoDB');

    } catch (err) {
        console.error(err.message);
        process.exit(1);//exit process with failure
    }
}

module.exports = connectDB