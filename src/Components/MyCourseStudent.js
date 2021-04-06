import React , { useContext, useState, useEffect } from 'react'
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext';
import { Link } from 'react-router-dom';


function MyCourseStudent() {

    const {userName} = useContext(userContext);
    const {userCourse} = useContext(userContext);
    
    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetCoreCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data)
    }, [data]);

  
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetTechnicalElectiveCourses");
        const da = await response.json();
        setData1(da);
    }, []);
    useEffect( () => {
    }, [data1]);

    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetNonTechnicalElectiveCourses");
        const da = await response.json();
        setData2(da);
    }, []);
    useEffect( () => {
    }, [data2]);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
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
             {userCourse.map(course=>{
                return (
                    <>
                    {data.map(uCourse => {
                    return(
                            <div key = '_id'>
                            {course === String(uCourse.id) &&
                                <>
                                    {/* {
                                        // console.log(uCourse.id)
                                        // console.log(course)
                                    } */}
                                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div key = '_id'>
                                    
                                    <div className='card courses mask '>
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <a href="#" >
                                                    <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                                </a>
                                            </div>
                                            <div class="card-body"></div>
                                    <h1 className="display-4">{uCourse.name}</h1>
                                
                                    <hr className="my-4"/>
                                    <strong>
                                    <p>Course credits : {uCourse.credits}</p>
                                    <p>Mentors: {uCourse.mentor}</p>
                                    </strong>
                                    <Link  to= {`/courseTeacher/${uCourse._id}`} >
                                                        <button className="btn btn-primary btn-course">Edit Course</button>
                                        
                                                    </Link>
                                    </div>
                                    </div>
                                    </div>
                                </>
                            } 
                            </div>
                        )
                    })}
                    </>)
            })}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
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
            {userCourse.map(course=>{
                return (
                    <>
                    {data1.map(uCourse => {
                    return(
                            <div key = '_id'>
                            {course === String(uCourse.id) &&
                                <>
                                    {/* {
                                        // console.log(uCourse.id)
                                        // console.log(course)
                                    } */}
                                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div key = '_id'>
                                    
                                    <div className='card courses mask '>
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <a href="#" >
                                                    <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                                </a>
                                            </div>
                                            <div class="card-body"></div>
                                    <h1 className="display-4">{uCourse.name}</h1>
                                
                                    <hr className="my-4"/>
                                    <strong>
                                    <p>Course credits : {uCourse.credits}</p>
                                    <p>Mentors: {uCourse.mentor}</p>
                                    </strong>
                                    <Link  to= {`/courseTeacher/${uCourse._id}`} >
                                                        <button className="btn btn-primary btn-course">Edit Course</button>
                                        
                                                    </Link>
                                    </div>
                                    </div>
                                    </div>
                                </>
                            } 
                            </div>
                        )
                    })}
                    </>)
            })}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
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

            {userCourse.map(course=>{
                return (
                    <>
                    {data2.map(uCourse => {
                    return(
                            <div key = '_id'>
                            {course === String(uCourse.id) &&
                                <>
                                    {/* {
                                        // console.log(uCourse.id)
                                        // console.log(course)
                                    } */}
                                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div key = '_id'>
                                    
                                    <div className='card courses mask '>
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <a href="#" >
                                                    <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                                </a>
                                            </div>
                                            <div class="card-body"></div>
                                    <h1 className="display-4">{uCourse.name}</h1>
                                
                                    <hr className="my-4"/>
                                    <strong>
                                    <p>Course credits : {uCourse.credits}</p>
                                    <p>Mentors: {uCourse.mentor}</p>
                                    </strong>
                                    <Link  to= {`/courseTeacher/${uCourse._id}`} >
                                                        <button className="btn btn-primary btn-course">Edit Course</button>
                                        
                                                    </Link>
                                    </div>
                                    </div>
                                    </div>
                                </>
                            } 
                            </div>
                        )
                    })}
                    </>)
            })}

        </div>
    )
}

export default MyCourseStudent
