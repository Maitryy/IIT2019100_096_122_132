const router =  require("express").Router();
const Question = require("../models/questionModel");
const Test = require("../models/testModel");



router.post("/NewTest", async(req, res) => {
    try {
        const{course_id,quest,testName,dueTime} = req.body;
        const num = 1;

        newTest = new Test({
            course: course_id,
            testName: testName,
            dueTime: dueTime            
        });

        await newTest.save();

        const test_ID = newTest._id;

        firstQuestion = new Question({
            testID: test_ID,
            questionNumber: num,
            ques: quest
        });

        await firstQuestion.save();

        const quesID = firstQuestion._id;
        
        await Test.findOneAndUpdate({_id: test_ID},{$push: {question: quesID}});
       
        res.send(newTest._id);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});

router.post("/AddQuestions", async(req,res) => {
    try {
        const {test_ID,questionNum, quest} = req.body;

        newQuestion = new Question({
            testID: test_ID,
            questionNumber: questionNum,
            ques: quest
        });

        await newQuestion.save();

        const quesID = newQuestion._id;

        await Test.findOneAndUpdate({_id: test_ID},{$push: {question: quesID}});

        res.send(true);
        
    } catch (err) {
        console.error(err);
        res
            .status(400)
            .json({errorMessage: "Not working"});
    }

});

router.get("/Test", async(req,res) => {
    try {
       const {test_ID} = req.body;
       const t = await Test.findById(test_ID);
       res.send(t);
        
    } catch (err) {
        console.error(err);
        res
            .status(400)
            .json({errorMessage: "Not working"});
        
    }

});

module.exports = router;