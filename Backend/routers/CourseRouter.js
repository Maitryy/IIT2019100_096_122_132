const router =  require("express").Router();
const Course = require("../models/courseModel");
const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");

router.post("/AddCoreCourse",async (req,res) => {
    try {
        const{name,id,credits,description} = req.body;
        if(!name || !id || !credits || !description)
            return res
                .status(400)
                .json({errorMessage: "Please enter all details"});

        const existingCourse = await Course.findOne({id})
        if(existingCourse)
            return res
                .status(400)
                .json({errorMessage: "A course with same id already exists"});    
        
        var token = req.cookies.token;
        
        if(!token)
            return res.json(false);
        
        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);

        var teacher = await Student.findById(decoded.student);
        teacher = teacher.firstName + " " + teacher.lastName;

        const NewCourse = new Course({
            name: name,
            id: id,
            credits: credits,
            description: description,
            type: "Core",
            teacher: teacher
        });
        
        await NewCourse.save();

        res.send(true);

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.post("/AddElectiveCourse",async (req,res) => {
    try {
        const{name,id,credits,description,subtype} = req.body;
        if(!name || !id || !credits || !description || !subtype)
            return res
                .status(400)
                .json({errorMessage: "Please enter all details"});

        const existingCourse = await Course.findOne({id})
        if(existingCourse)
            return res
                .status(400)
                .json({errorMessage: "A course with same id already exists"});    
        
        var token = req.cookies.token;
        
        if(!token)
            return res.json(false);
        
        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);

        var teacher = await Student.findById(decoded.student);
        teacher = teacher.firstName + " " + teacher.lastName;

        const NewCourse = new Course({
            name: name,
            id: id,
            credits: credits,
            description: description,
            type: "Elective",
            subtype: subtype,
            teacher: teacher
        });
        
        await NewCourse.save();

        res.send(true);

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/GetCoreCourses", async (req,res) => {
    try {
        const getCourses = await Course.find({
            type: "Core"
        });
        res.send(getCourses);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});

router.get("/GetTechnicalElectiveCourses", async (req,res) => {
    try {
        const getCourses = await Course.find({
            type: "Elective",
            subtype: "Technical"
        });
        res.send(getCourses);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});
router.get("/GetNonTechnicalElectiveCourses", async (req,res) => {
    try {
        const getCourses = await Course.find({
            type: "Elective",
            subtype: "Non-Technical"
        });
        res.send(getCourses);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});

router.get("/course/:id", async(req, res) => {
    try {
        const individualCourse = await Course.find(req.params.id);
        //res.send(individualCourse);
        res.send(individualCourse);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});

module.exports = router;