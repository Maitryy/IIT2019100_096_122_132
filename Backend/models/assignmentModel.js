const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    course: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true},
    pdf: {type: String, required: true}     
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;