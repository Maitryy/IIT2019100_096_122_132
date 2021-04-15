const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    testID: {type: String, required: true},
    questionNumber: {type:Number, required: true},
    ans: {type: String, required: true},
    student: {type: String, required: true}   
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;