const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: {type:String, required: true},
    id: {type:String, required: true},
    credits: {type: Number, required: true},
    description: {type:String, required:true},
    type: {type: String, required: true},
    subtype: {type: String, required: false},
    teacher: {type: String, required: true}
    // students: {type: Array, required: false}
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;