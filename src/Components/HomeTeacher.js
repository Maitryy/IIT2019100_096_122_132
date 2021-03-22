
import React from 'react'
import './HomeTeacher.css'

function HomeTeacher() {
    return (
        <div className='hometeacher' >
            
            <div className="add">
             <a href="#"><button><h3>Add new Course</h3></button></a>
            </div>
            <div className="All-courses">
           <h1>Ongoing Courses</h1>
           <div className='courses'>
           <a href="#">
            <img src="https://img.jagranjosh.com/imported/images/E/Articles/maths2.jpg"/>
            </a>
            <h2>Maths</h2>
            <h3>Anand kumar tiwari</h3>
            <p>Credits:4</p>
           

           </div>

           <div className='courses' >
           <a href="#"> <img src="https://www.thoughtco.com/thmb/G9vU9zzR6Gffq9rpvJVeZ2YfO28=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/warning--data-transfer-in-progress-507065943-59c6d2a70d327a001141794d-5bb792f246e0fb0051a88f9c.jpg" />
           </a>
            <h2>Introducion to programming</h2>
            <h3>Rahul kala</h3>
            <p>Credits:4</p>
           
           </div>

           <div className='courses'>
           <a href="#">
            <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg"/>
            </a>
            <h2>Electronics</h2>
            <h3>Amarnath Yadav</h3>
            <p>Credits:4</p>
           
           </div>

           </div>

           <div className="explore">
               <h1>Explore the courses</h1>
               <div className="p1">
                 <a href="#"><h3>Core</h3></a>
               </div>
               <div className="p1">
               <a href="#"><h3>Non-core</h3></a>
                   </div>
                   <div className="p1">
                   <a href="#"><h3>Technical</h3></a>
                   </div>

           
           </div>
        </div>



    )
}

export default HomeTeacher
