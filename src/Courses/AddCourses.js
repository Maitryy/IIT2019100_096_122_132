import React, { useState } from 'react'
import CoreCoursesForm from './CoreCoursesForm';
import ElectiveCourseForm from './ElectiveCourseForm';
import './AddCourse.css';
import '../Auth/Register.css'
import image1 from '../images/add-course.png'
import image2 from '../images/student-reg-01.png'
import image3 from '../images/teacher-reg-01.png'


function AddCourses() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [Click,SetClick] = useState(false);
    const HandleClick = () => SetClick(!Click);


    return (
        // <div className = 'add-courses'>
        //     <h1>Add New Course:</h1>
        //     <button onClick={handleClick}>Core Course</button>
        //     <div className = {click? 'create':'create-inactive'}>
        //         <CoreCoursesForm />
        //     </div>
        //     <button onClick={HandleClick}>Elective Course</button>
        //     <div className = {Click? 'create':'create-inactive'}>
        //         <ElectiveCourseForm />
        //     </div>
        // </div>

        <div className="container">
            <div className="regi ">
            <div className="profile">
            <img className = "prof-head" src={image1} alt=""/>
            </div>
            </div>
            <div className="row both-reg">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className = " regi-btns ">
                    
                        <button className = "student-btn btn btn-lg btn-course" onClick = {handleClick}>
                        Core Course
                        </button>
                        <div className=" regs"><img className = "" src={image2} alt=""/></div>
                        <div className = {click? 'create':'create-inactive'}>
                        <CoreCoursesForm />
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className = "  regi-btns">
                   
                        <button className = "teacher-btn btn btn-lg btn-course" onClick = {HandleClick}>
                        Elective Course
                        </button>
                        <div className=" regs"><img className = "" src={image3} alt=""/></div>
                        <div className = {Click? 'create':'create-inactive'}>
                        <ElectiveCourseForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourses
