import React, { useState } from 'react'
import CoreCoursesForm from './CoreCoursesForm';
import ElectiveCourseForm from './ElectiveCourseForm';
import './AddCourse.css';

function AddCourses() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [Click,SetClick] = useState(false);
    const HandleClick = () => SetClick(!Click);


    return (
        <div className = 'add-courses'>
            <h1>Add New Course:</h1>
            <button onClick={handleClick}>Core Course</button>
            <div className = {click? 'create':'create-inactive'}>
                <CoreCoursesForm />
            </div>
            <button onClick={HandleClick}>Elective Course</button>
            <div className = {Click? 'create':'create-inactive'}>
                <ElectiveCourseForm />
            </div>
        </div>
    )
}

export default AddCourses
