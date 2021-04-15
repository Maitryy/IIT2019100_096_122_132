const router =  require("express").Router();
const Question = require("../models/questionModel");
const Test = require("../models/testModel");
const jwt = require("jsonwebtoken");
const StudentTest = require("../models/studentTestModel");
const Answer = require("../models/answerModel");


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
router.get("/getTest",  async(req, res) => {
    try {
        const AllTest= await Test.find();
        if(!AllTest)
        res
        .status(401)
        .json({errorMessage: "No test exist"});
        res.send(AllTest);
    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No Test"});
    }
});

router.get("/getQuestion",  async(req, res) => {
    try {
       
        const AllTest= await Question.find();
        if(!AllTest)
        res
        .status(401)
        .json({errorMessage: "No question exist"});
        res.send(AllTest);
    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No Question"});
    }
});

router.get("/getSTest",  async(req, res) => {
    try {
        var token = req.cookies.token;
        if(!token)
            return res.json(false);

        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);
        decoded = decoded.student;

        const AllTest= await Answer.find({student: decoded});

        if(!AllTest)
        res.send(false);

        res.send(AllTest);
    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No Test"});
    }
});

router.post("/Answer", async(req,res) =>{
    try {
        const {testID,ans,quesNo,quesID} = req.body;
        var token = req.cookies.token;
        if(!token)
            return res.json(false);

        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);
        decoded = decoded.student;

        const existing = await StudentTest.findOne({student: decoded,test: testID});

        if(!existing)
        {
            const newStudentTest = new StudentTest({
                student: decoded,
                test: testID
            }) 
            await newStudentTest.save();
        }
        
        const exi = await StudentTest.findOne({student: decoded, test: testID});
        //console.log(exi);

        const exiAns = await Answer.findOne({testID: testID,questionNumber: quesNo,student: decoded});

        if(!exiAns)
        {
            const newAnswer = new Answer({
                testID: testID,
                questionNumber: quesNo,
                ans: ans,
                student: decoded
            });

            await newAnswer.save();

            const ansID = newAnswer._id;

            await exi.updateOne({$push: {question: quesID, answer: ansID}});
        }
        else{
            await exiAns.updateOne({$set: {ans: ans}});
        }

        res.send(true);        
        
    } catch (err) {
        console.error(err);
        res
            .status(400)
            .json({errorMessage: "Not working"});
    }
});

module.exports = router;