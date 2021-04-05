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

function Register() {
    const [stud,setStudent] = useState(false);
    const handleStudent = () => setStudent(!stud)

    const [teacher,setTeacher] = useState(false);
    const handleTeacher = () => setTeacher(!teacher)


    return (
        <div>
            <div className="regi">
            <img className = "register-head" src={image1} alt=""/>
            </div>
            <div className = "container regi-btns">
            <button className = "student-btn btn btn-lg btn-course" onClick = {handleStudent}>
                Student
            </button>
                <div className = {stud? 'create':'create-inactive'}>
                    <StudentForm />
                </div>
                <button className = "teacher-btn btn btn-lg btn-course" onClick = {handleTeacher}>
                Teacher
            </button>
                <div className = {teacher? 'create':'create-inactive'}>
                    <TeacherForm />
                </div>
            </div>
            
        </div>
    )
}

export default Register;
