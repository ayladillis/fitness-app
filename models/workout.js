const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
});

const workOutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now,
        required: true
    },
    exercises: [
        exerciseSchema
    ]
});

const workOutModel = mongoose.model("Workout", workOutSchema);

module.exports = workOutModel;
