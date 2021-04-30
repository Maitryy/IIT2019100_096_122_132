const router =  require("express").Router();
const Course = require("../models/courseModel");
const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");
const Announcement = require("../models/announcementModel");
const Faq = require("../models/faqModel");
const Schedule = require("../models/scheduleModel");

router.post("/AddCoreCourse",async (req,res) => {
    try {
        const{name,id,credits,description,link,image} = req.body;
        if(!name || !id || !credits || !description || !link || !image)
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
            teacher: teacher,
            link: link,
            image: image
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
        const{name,id,credits,description,subtype,link,image} = req.body;
        if(!name || !id || !credits || !description || !subtype || !link || !image)
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
            teacher: teacher,
            link: link,
            image: image
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

router.get("/GetAllCourses", async (req,res) => {
    try {
        const getCourses = await Course.find();
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
        res.send(individualCourse);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});

router.post("/Announcement", async(req, res) => {
    try {
        const{course_id,type,description,link} = req.body;
        
        newAnnouncement = new Announcement({
            course: course_id,
            type: type,
            description: description,
            link: link,
        });

        await newAnnouncement.save();

        res.send(true);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});

router.post("/Schedule", async(req, res) => {
    try {
        const{month,classnum,topics,days,course_id} = req.body;
        
        newSchedule = new Schedule({
            course: course_id,
            month: month,
            classnum: classnum,
            topics: topics,
            days: days,
        });

        await newSchedule.save();

        res.send(true);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});


router.get("/getAnnouncements",  async(req, res) => {
    try {
       
        const AllAnnouncemt= await Announcement.find();
        if(!AllAnnouncemt)
        res
        .status(401)
        .json({errorMessage: "No announcement exist"});
        res.send(AllAnnouncemt);


    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No announcement"});
    }
});


router.get("/getSchedule",  async(req, res) => {
    try {
       
        const Fullschedule= await Schedule.find();
        if(!Fullschedule)
        res
        .status(401)
        .json({errorMessage: "No schedule exist"});
        res.send(Fullschedule);


    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No schedule"});
    }
});

router.post("/Faq", async(req, res) => {
    try {
        const{course_id,question,student} = req.body;
        
        newFaq = new Faq({
            course: course_id,
            question:question,
            student:student
            
        });

        await newFaq.save();

        res.send(true);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});
router.post("/AnswerFaq", async(req, res) => {
    try {
        const{course_id,answer} = req.body;
      
        await Faq.findByIdAndUpdate({_id: course_id}, {$push: {answer: answer}} );

     
        
        res.send();         
        
    } catch (err) {
        console.error(err);
        res.json(false);        
    };
       
});

router.get("/getFaq",  async(req, res) => {
    try {
       
        const AllFaq= await Faq.find();
        if(!AllFaq)
        res
        .status(401)
        .json({errorMessage: "No faq exist"});
        res.send(AllFaq);


    }
    catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No Faq"});
    }
});

router.get("/ACourse", async (req,res) => {
    try {
        const {course_ID} = req.body;
        const c = await Course.findById(course_ID);
        res.send(c);
        
    } catch (err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "No Faq"});
    }
})

router.get("/GetStuCourses", async (req,res) => {
    try {
        var token = req.cookies.token;
        if(!token) 
            res.status(403).json("Permission denied.");
        
        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);
        decoded = decoded.student;
        const stu = await Student.findById(decoded);
        const len = stu.course.length;
        
        const arr = new Array;
        for(i=0;i<len;i++)
        {
            const y = stu.course[i];
            if(y !== null)
            {
                const x = await Course.findOne({id: y});
                const name = x.name;
                const id = x._id;
                arr.push({name,id});
            }

        }

        res.send({arr});

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});


module.exports = router;