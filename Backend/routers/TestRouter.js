const router =  require("express").Router();
const Test = require("../models/testModel");



router.post("/NewTest", async(req, res) => {
    try {
        const{course_id,question,testName,dueTime} = req.body;

        
        newTest = new Test({
            course: course_id,
            testName: testName,
            dueTime: dueTime            
        });

        await newTest.save();
        const num = 1;

        await newTest.update( {$push: {question: {quesNo: {num}, ques: {question}}}} );

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
        const {test_ID,num, newQuestion} = req.body;

        await Test.findByIdAndUpdate({test_ID},{$push: {question: {quesNo: {num}, ques: {newQuestion}}}});

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