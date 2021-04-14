const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    course: {type: String, required: true},
    month: {type: String, required: true},
    classnum: {type: String, required: true},
    topics: {type: String, required: true},
    days: {type: String, required: true}    
});

const Schedule = mongoose.model("Schedules", scheduleSchema);

module.exports = Schedule;