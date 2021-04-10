
const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
    course: {type: String, required: true},
    question: {type: String, required: false},
    student: {type: String, required: false},
   answer: {type: [String], required: false}
});

const Faq = mongoose.model("Faqs", FaqSchema);

module.exports = Faq;