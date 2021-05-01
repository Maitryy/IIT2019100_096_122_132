const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    course: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true},
    pdf: Schema.Types.Mixed        
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;