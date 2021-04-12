const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    testID: {type: String, required: true},
    questionNumber: {type:Number, required: true},
    ques: {type: String, required: true}   
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;