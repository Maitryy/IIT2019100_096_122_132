
import React, { useContext , useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext'
import './HomeStudent.css'

function HomeTeacher() {

    const [data,setData] = useState([]);

    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetCoreCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data);
    }, [data]);

    const {userName} = useContext(userContext);
    return (
        <div className='hometeacher container' >

            <div className="jumbotron teacher">
                <h1 className="display-4">Hello, {userName}!!</h1>
                <p className="lead"> “It’s the teacher that makes the difference, not the classroom.”</p>
                <hr className="my-4"/>
                <strong>
                <p>Enrolled in courses: 4</p>
                </strong>
                <p className="lead">
                    <Link to = '/AddCourse' >Add Course</Link>
                </p>
            </div>
            
            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title">Owned Courses</h1>
                </div>
            </div>
            
            
            <div className="All-courses row row-cols-3">
           
            {data.map(course=>{
                return(
                    <div key = '_id'>
                        <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                                <div class="card-body">
                                        <p>{ course._id}</p>
                                        <h4 className= " card-title">{ course.name}</h4>
                                        {/* <h5 className = "card-subtitle text-muted">Amarnath Yadav</h5> */}
                                        <p className="text-muted">Credits:{ course.credits}</p>
                                        <p className="card-text">{ course.description }</p>
                                        <Link  to= {`/course/${course._id}`} >
                                            <button className="btn btn-primary btn-course">Edit Course</button>
                            
                                        </Link>
                                </div>
                        </div>
                        </div>  
                    </div>
                    
                )
            })}
           
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
                            <Link to = '/CoreCourses'>
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1563729831178-d09061d83b12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Core Courses</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <Link to = '/TechnicalElectiveCourses'>
                            <div className="card-horizontal">
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Technical Courses</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="img-square-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="Card image cap"/>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <Link to = '/NonTechnicalElectiveCourses'>
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Non-Technical  Courses</h4>
                                    <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            

           </div>
        </div>



    )
}

export default HomeTeacher
