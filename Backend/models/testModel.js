const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    course: {type: String, required: true},
    question: {type: [String], required: true},
    student: {type: String, required: false},
    answer: {type: String, required: false},
    testName:{type: String, required: true},
    dueTime:{type: String, required: false}
});

const Test = mongoose.model("Tests", TestSchema);

module.exports = Test;