const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    course: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String, required: true}    
});

const Announcement = mongoose.model("Announcements", announcementSchema);

module.exports = Announcement;