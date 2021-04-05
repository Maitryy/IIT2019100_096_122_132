const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
   email: {type: String, required: true},
   passwordHash: {type: String, required: true},
   firstName: {type: String, required: true},
   lastName: {type: String, required: true},
   semester: {type: String, required: false},
   branch: {type: String, required: true},
   proffesion: {type: String, required: true},
   course: {type: [String], required: false}
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;