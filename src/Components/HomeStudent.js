import React, { useContext } from 'react'
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext'
import './HomeStudent.css'
import image3 from '../images/bg-home.png'

function HomeStudent() {
    const {userName} = useContext(userContext);

    return (
        <div className='homestudent container' >
            <div className="jumbotron student">
                <h1 className="display-4">Hello, {userName} !!</h1>
                <p className="lead"> “Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.”</p>
                <hr className="my-4"/>
                <strong>
                <p>Total credits completed: 18</p>
                <p>Enrolled in courses: 5</p>
                </strong>
                <p className="lead">
                    <a className="btn btn-primary btn-lg btn-course" href="#" role="button">Grade Sheets</a>
                </p>
             </div>


            {/* <h1>Enrolled Courses</h1> */}
            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title">Enrolled Courses</h1>
                    {/* <p className="enroll-card-text card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p> */}
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
           <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title">Explore Courses</h1>
                </div>
            </div>
            <div className="explore-cards">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-explore">
                                <div className="img-square-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1563729831178-d09061d83b12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Core Courses</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-explore">
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Technical Courses</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="img-square-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="Card image cap"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-explore">
                                <div className="img-square-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Non-Technical  Courses</h4>
                                    <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default HomeStudent
