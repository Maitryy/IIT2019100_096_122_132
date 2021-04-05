// import axios from 'axios';
import React,{useState} from 'react';
// import { useHistory } from 'react-router';
// import AuthContext from '../Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RegisterStudent.css'
import './Register.css'
import StudentForm from './StudentForm';
import TeacherForm from './TeacherForm';
import image1 from '../images/register-head-01.png'
import image2 from '../images/student-reg-01.png'
import image3 from '../images/teacher-reg-01.png'

function Register() {
    const [stud,setStudent] = useState(false);
    const handleStudent = () => setStudent(!stud)

    const [teacher,setTeacher] = useState(false);
    const handleTeacher = () => setTeacher(!teacher)


    return (
        <div className="container">
            <div className="regi ">
            <img className = "register-head" src={image1} alt=""/>
            </div>
            <div className="row both-reg">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className = " regi-btns ">
                    
                        <button className = "student-btn btn btn-lg btn-course" onClick = {handleStudent}>
                        Student
                        </button>
                        <div className=" regs"><img className = "" src={image2} alt=""/></div>
                        <div className = {stud? 'create':'create-inactive'}>
                        <StudentForm />
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className = "  regi-btns">
                   
                        <button className = "teacher-btn btn btn-lg btn-course" onClick = {handleTeacher}>
                        Teacher
                        </button>
                        <div className=" regs"><img className = "" src={image3} alt=""/></div>
                        <div className = {teacher? 'create':'create-inactive'}>
                            <TeacherForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
