import React from 'react'
import './Course.css'

function Courses() {
    return (
        <div className='course' >
            <strong className='course_name' >Databases and SQL for Data Science with Python</strong>
            <p className='course_description'>Much of the world's data resides in databases. SQL (or Structured Query Language) is a powerful language which is used for communicating with and extracting data from databases. A working knowledge of databases and SQL is a must if you want to become a data scientist.The purpose of this course is to introduce relational database concepts and help you learn and apply foundational knowledge of the SQL language. It is also intended to get you started with performing SQL access in a data science environment.  </p>
            <div className='course_faculty'>
                <label>Teacher:</label>
                <span>Cyborgg</span>
            </div>
            <div className='course_sudents'>
                <label>Peers:</label>
                <ul>Student_1</ul>
                <ul>Student_1</ul>
                <ul>Student_1</ul>
                <ul>Student_1</ul>
            </div>
            <div className='course_credits'>
                <span>Credits:</span>
            </div>
            <div className='course_annoucements'>
                <h2>Annoucements</h2>
                 <input placeholder='text'  />
                <button><i></i>Add</button>
                <button>Cancel</button>
                <button>Post</button>
                <div className='course_image'>
                    <h3>Upload_image</h3>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.Tn0Iywitm52vLhVGfibGgAAAAA&pid=Api&P=0&w=315&h=178' />
                </div>
            </div>
        </div>
    )
}

export default Courses
