
import React from 'react'
import '../bootstrap/bootstrap.css'
import './HomeStudent.css'

function HomeTeacher() {
    return (
        <div className='hometeacher container' >

            <div className="jumbotron student">
                <h1 className="display-4">Hello, Harish !!</h1>
                <p className="lead"> “It’s the teacher that makes the difference, not the classroom.”</p>
                <hr className="my-4"/>
                <strong>
                <p>Enrolled in courses: 4</p>
                </strong>
                <p className="lead">
                    <a className="btn btn-primary btn-lg btn-course" href="#" role="button">Add a New Course</a>
                </p>
            </div>
            
            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1584531979583-18c5c4b25efc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Card image"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title">Owned Courses</h1>
                </div>
            </div>
            
            
            <div className="All-courses row row-cols-3">
           
           <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
           <div className='card courses mask '>
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="#" >
                        <img src="https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="img-fluid card-img-top"/>
                    </a>
                </div>
                <div class="card-body">
                        <h4 className= " card-title">Maths</h4>
                        <h5 className = "card-subtitle text-muted">Anand kumar tiwari</h5>
                        <p className="text-muted">Credits:4</p>
                        <p className="card-text"></p>
                        <button className="btn btn-primary btn-course">Go to Course</button>
                </div>
           </div>
           </div>
           <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
           <div className='card courses mask '>
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="#" >
                        <img src="https://www.thoughtco.com/thmb/G9vU9zzR6Gffq9rpvJVeZ2YfO28=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/warning--data-transfer-in-progress-507065943-59c6d2a70d327a001141794d-5bb792f246e0fb0051a88f9c.jpg" className="img-fluid card-img-top" />
                    </a>
                </div>
                <div class="card-body">
                        <h4 className= "card-title">Introducion to Programming</h4>
                        <h5 className = "card-subtitle text-muted">Mohammad Javed</h5>
                        <p className="text-muted">Credits:4</p>
                        <p className="card-text"></p>
                        <button className="btn btn-primary btn-course">Go to Course</button>
                </div>
           </div>
           </div>
           <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
           <div className='card courses mask '>
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="#" >
                        <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                    </a>
                </div>
                <div class="card-body">
                        <h4 className= " card-title">Electronics</h4>
                        <h5 className = "card-subtitle text-muted">Amarnath Yadav</h5>
                        <p className="text-muted">Credits:4</p>
                        <p className="card-text"></p>
                        <button className="btn btn-primary btn-course">Go to Course</button>
                </div>
           </div>
           </div>
           <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
           <div className='card courses mask '>
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="#" >
                        <img src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="img-fluid card-img-top"/>
                    </a>
                </div>
                <div class="card-body">
                        <h4 className= " card-title">Software Engineering</h4>
                        <h5 className = "card-subtitle text-muted">Sonali </h5>
                        <p className="text-muted">Credits: 4</p>
                        <p className="card-text"></p>
                        <button className="btn btn-primary btn-course">Go to Course</button>
                </div>
           </div>
           </div>
           <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
           <div className='card courses mask '>
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="#" >
                        <img src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="img-fluid card-img-top"/>
                    </a>
                </div>
                <div class="card-body">
                        <h4 className= " card-title">Machine Learning</h4>
                        <h5 className = "card-subtitle text-muted">Rahul Kala</h5>
                        <p className="text-muted">Credits:4</p>
                        <p className="card-text"></p>
                        <button className="btn btn-primary btn-course">Go to Course</button>
                </div>
           </div>
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
