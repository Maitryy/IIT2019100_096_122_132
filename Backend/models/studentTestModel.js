const mongoose = require("mongoose");

const StudentTestSchema = new mongoose.Schema({
    student: {type: String, required: true},
    name: {type: String, required: true},
    question: {type: [String], required: false},
    answer: {type:[String], required: false},
    test:{type: String, required: true},
    marks: {type: Number}
});

const StudentTest = mongoose.model("studentTests", StudentTestSchema);

module.exports = StudentTest;