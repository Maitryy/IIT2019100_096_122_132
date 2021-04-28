const router =  require("express").Router();
const Question = require("../models/questionModel");
const Test = require("../models/testModel");
const jwt = require("jsonwebtoken");
const StudentTest = require("../models/studentTestModel");
const Answer = require("../models/answerModel");
const Student = require("../models/studentModel");


router.post("/NewTest", async(req, res) => {
    try {
        const{course_id,quest,testName,dueTime,maxMarks} = req.body;
        const num = 1;

        newTest = new Test({
            course: course_id,
            testName: testName,
            dueTime: dueTime, 
            maxMarks: maxMarks           
        });

        await newTest.save();

        const test_ID = newTest._id;

        firstQuestion = new Question({
            testID: test_ID,
            questionNumber: num,
            ques: quest,
            maxMarks: maxMarks
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
        const {test_ID,questionNum, quest, maxMarks} = req.body;

        newQuestion = new Question({
            testID: test_ID,
            questionNumber: questionNum,
            ques: quest, 
            maxMarks: maxMarks
        });

        await newQuestion.save();

        const quesID = newQuestion._id;
        
        const x = await Test.findOne({_id: test_ID});
        var num = parseInt(maxMarks);
        num += x.maxMarks;

        await Test.findOneAndUpdate({_id: test_ID},{$push: {question: quesID}});
        await Test.findOneAndUpdate({_id: test_ID},{$set: {maxMarks: num}});

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
            const fStudent = await Student.findById(decoded);
            const name = fStudent.firstName + " " + fStudent.lastName; 
            const newStudentTest = new StudentTest({
                student: decoded,
                name: name,
                test: testID,
                marks: -1
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

router.get("/getTestStudent",  async(req, res) => {
    try {
        const AllTest= await StudentTest.find();
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

router.get("/StudentResponse/:id/:id2",  async(req, res) => {
    try {
        test = req.params.id;
        student = req.params.id2;
        const AllTest= await StudentTest.findOne({test: test, student: student});
        if(!AllTest)
        res
        .status(401)
        .json({errorMessage: "No test exist"});
        const t = await Test.findById(test);
        if(!t)
        res
        .status(401)
        .json({errorMessage: "No test exist"});
        const ques = t.question;
        const len = ques.length;
        const ans = AllTest.answer;
        const q = AllTest.question;
        const len2 = q.length;
        var quesArr = new Array;
        var ii = 0;
        for(i=0;i<len;i++)
        {
            if(ii<len2)
            {
                const x = await Question.findById(ques[i]);
                const y = await Answer.findById(ans[ii]);
                if(x.questionNumber === y.questionNumber)
                {
                    const z = {ques: x.ques, ans: y.ans, marks: x.maxMarks};
                    quesArr.push(z);
                    ii++;
                }
                else if(x.questionNumber < y.questionNumber)
                {
                    const z = {ques: x.ques, ans: " ", marks: x.maxMarks};
                    quesArr.push(z); 
                }
            }
            else
            {
                const x = await Question.findById(ques[i]);
                const z = {ques: x.ques, ans: " ", marks: x.maxMarks};
                quesArr.push(z);
            }                        
        }
        const sending = {id:AllTest._id , Arr: quesArr};
        res.send(sending);
    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No Test"});
    }
});

router.post("/UpdateMarks",  async(req, res) => {
    try {
        const x = req.body;
        const AllTest= await StudentTest.findById(x.id);
        if(!AllTest)
        res
        .status(401)
        .json({errorMessage: "No test exist"});

        await AllTest.update({$set: {marks: x.marks}});  
        res.send();     
        
    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No Test"});
    }
});


module.exports = router;