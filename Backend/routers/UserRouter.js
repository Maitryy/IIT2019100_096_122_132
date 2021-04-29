const router = require("express").Router();
const Student = require("../models/studentModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Course = require("../models/courseModel");

//register
router.post("/registerStudent",async (req,res) => {
    try{
        const{email, password, passwordVerify, firstName, lastName, semester, branch} = req.body;

        //validation
        if(!email || !password || !passwordVerify || !firstName || !lastName ||!semester ||!branch)
            return res
               .status(400)
               .json({errorMessage: "Please enter all details"});
        
        if(password.length <= 8)
            return res
               .status(400)
               .json({errorMessage: "Please enter a password of more than 8 characters"});

        if(password !== passwordVerify)
            return res
                .status(400)
                .json({errorMessage: "Please enter the same password twice"});

        const existingStudent = await Student.findOne({email});
            if(existingStudent)
                return res
                    .status(400)
                    .json({errorMessage: "An account with this email already exists"});

        //encryption
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        //Storing in database
        const newStudent = new Student({
            email: email,
            passwordHash: passwordHash,
            firstName: firstName,
            lastName: lastName,
            semester: semester,
            branch: branch,
            proffesion: "Student"
        });

        const savedStudent = await newStudent.save();

        //Making a token for more security
        const token = jwt.sign({
            student : savedStudent._id
        }, process.env.JWT_SECRET);

        //sending token in a HTTP-Only cookie(better than local storage)
        res
            .cookie("token", token, {
                httpOnly: true,
            })
            .send();

    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

router.post("/registerTeacher",async (req,res) => {
    try{
        const{email, password, passwordVerify, firstName, lastName, branch} = req.body;

        //validation
        if(!email || !password || !passwordVerify || !firstName || !lastName ||!branch)
            return res
               .status(400)
               .json({errorMessage: "Please enter all details"});
        
        if(password.length <= 8)
            return res
               .status(400)
               .json({errorMessage: "Please enter a password of more than 8 characters"});

        if(password !== passwordVerify)
            return res
                .status(400)
                .json({errorMessage: "Please enter the same password twice"});

        const existingStudent = await Student.findOne({email});
            if(existingStudent)
                return res
                    .status(400)
                    .json({errorMessage: "An account with this email already exists"});

        //encryption
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        //Storing in database
        const newStudent = new Student({
            email: email,
            passwordHash: passwordHash,
            firstName: firstName,
            lastName: lastName,
            branch: branch,
            proffesion: "Teacher"
        });

        const savedStudent = await newStudent.save();

        //Making a token for more security
        const token = jwt.sign({
            student : savedStudent._id
        }, process.env.JWT_SECRET);

        //sending token in a HTTP-Only cookie(better than local storage)
        res
            .cookie("token", token, {
                httpOnly: true,
            })
            .send();

    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

//log-in

router.post("/loginStudent",async (req,res) => {
    try{
        const{email, password} = req.body;

        if(!email || !password)
            return res 
                .status(400)
                .json({errorMessage: "Please enter all the fields."});

        const existingStudent = await Student.findOne({email});
        if (!existingStudent)
            return res
                .status(400)
                .json({errorMessage: "Wrong email"});

        const passwordCorrect = await bcrypt.compare(password,existingStudent.passwordHash);

        if(!passwordCorrect)
            return res
                .status(400)
                .json({errorMessage: "Wrong password"});
    
        //Making a token for more security
        const token = jwt.sign({
            student : existingStudent._id
        }, process.env.JWT_SECRET);

        //sending token in a HTTP-Only cookie(better than local storage)
        res
            .cookie("token", token, {
                httpOnly: true,
            })
            .send();
        
    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

//log-out

router.get("/logoutStudent", (req,res) =>{
    res
        .cookie("token","",{
            httpOnly: true,
            expires: new Date(0)
        })
        .send();
});

//Am I logged in

router.get("/LoggedInStudent",(req,res) => {
        try{
            const token = req.cookies.token;
            
            if(!token)
                return res.json(false);
    
            jwt.verify(token, process.env.JWT_SECRET);
            res.send(true);

        }catch(err){
            console.error(err);
            res.json(false);
        };
});

router.get("/TypeOfUser",async (req,res) => {
    try{
        var token = req.cookies.token;
        
        if(!token)
            return res.json(false);

        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);

        var typeofuser = await Student.findById(decoded.student);

        res.send(typeofuser);

    }catch(err){
        console.error(err);
        res.json(false);
    };
});

router.post("/enrollCourse", async (req,res) => {
    try {
        const {enCourse} = req.body;
        var token = req.cookies.token;
        if(!token)
            return res.json(false);

        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);
        decoded = decoded.student;

        var user = await Student.findById(decoded);
        
        if(user.course == enCourse)
        return res
                .status(400)
                .json({errorMessage: "Course already exist"});

        await Student.findByIdAndUpdate({_id: decoded}, {$push: {course: enCourse}} );

        await Course.findOneAndUpdate({id: enCourse}, {$push: {student: user._id}} );
        
        res.send();         
        
    } catch (err) {
        console.error(err);
        res.json(false);        
    };
});

router.get("/GetAllUsers", async (req,res) => {
    try {
        const getUsers = await Student.find();
        res.send(getUsers);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});


router.post('/update', async (req, res) => {
    try {
        const {oldPassword, newPassword1, newPassword2} = req.body;

        var token = req.cookies.token;
        if(!token) 
            res.status(403).json("Permission denied.");
        
        token = token.replace('Bearer','');
        var decoded = jwt.decode(token);
        decoded = decoded.student;

        const stu = await Student.findById(decoded);
        
        const passwordCorrect = await bcrypt.compare(oldPassword,stu.passwordHash);

        if(!passwordCorrect)
            return res
                .json({errorMessage: "Wrong password"});

        if(newPassword1 !== newPassword2)
            return res
                    .json({errorMessage: "Password does not match"});

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(newPassword1,salt);

        await stu.update({$set: {passwordHash: passwordHash}});
        
        res.send(true);
        
        
    } catch (err) {
        console.error(err);
    }
   
})

module.exports = router;