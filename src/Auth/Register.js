// import axios from 'axios';
import React,{useState} from 'react';
// import { useHistory } from 'react-router';
// import AuthContext from '../Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RegisterStudent.css'
import StudentForm from './StudentForm';
import TeacherForm from './TeacherForm';

function Register() {
    const [stud,setStudent] = useState(false);
    const handleStudent = () => setStudent(!stud)

    const [teacher,setTeacher] = useState(false);
    const handleTeacher = () => setTeacher(!teacher)


    return (
        <div>
            <h1>Register a new account for :</h1>
            <button className = "student-btn" onClick = {handleStudent}>
                Student
            </button>
                <div className = {stud? 'create':'create-inactive'}>
                    <StudentForm />
                </div>
                <button className = "teacher-btn" onClick = {handleTeacher}>
                Teacher
            </button>
                <div className = {teacher? 'create':'create-inactive'}>
                    <TeacherForm />
                </div>
            
        </div>
    )
}

export default Register;
