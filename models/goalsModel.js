const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalsSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
    // description: {

    // },
    //link goal to user later
}, {timestamps: true});

module.exports = mongoose.model('Goal', goalsSchema)