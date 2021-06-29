import React, { useContext , useEffect, useState }  from 'react'
import '../bootstrap/bootstrap.css'
import './Course.css'
import './CourseTeacher.css'
import { Link, useHistory } from 'react-router-dom';
import userContext from '../Context/UserContext'
import image3 from '../images/pdf-logo.png'
import image2 from '../images/image-logo.png'
import image1 from '../images/video-logo.png'
import image4 from '../images/clndr-01.png'
import axios from 'axios';

function CourseTeacher(props) {
    const {user} = useContext(userContext);
    const [data,setData] = useState([]);
    const history = useHistory();

  const[Announcement,setAnnouncement]= useState([]);
  const[Schedule,setSchedule]= useState([]);
  const[Faq,setFaq]= useState([]);
  const[Test,setTest]=useState([]);

 useEffect(async() => {
    const response = await fetch("http://localhost:5000/test/getTest");
    const da = await response.json();
    setTest(da);
}, []);
useEffect( () => {
   
}, [Test]);
  useEffect(async() => {
    const response = await fetch("http://localhost:5000/course/getAnnouncements");
    const da = await response.json();
    setAnnouncement(da);
}, []);
useEffect( () => {
   
}, [Announcement]);

useEffect(async() => {
    const response = await fetch("http://localhost:5000/course/getSchedule");
    const da = await response.json();
    setSchedule(da);
}, []);


useEffect(async() => {
    const response = await fetch("http://localhost:5000/course/GetAllCourses");
    const da = await response.json();
    setData(da);
}, []);
useEffect( () => {
    console.log(data);
}, [data]);

    async function VT(testID){
        const id = {testID};
        const tID = testID;
        history.push(`/viewtest/${tID}`);
    }

    const {userName} = useContext(userContext);

    return (
        <div className=' container' >
            {data.map(course=>{
                return(      
                    ( course._id === props.match.params.id ) && 
                        <div>
                            <div className="jumbotron course">
                                <h1 className="display-4">{course.name}</h1>
                                <p className="lead">{course.description} </p>
                                <hr className="my-4"/>
                                <strong>
                                    <p>Course credits : {course.credits}</p>
                                    <p>Mentors: {course.teacher}</p>
                                </strong>
                                <a href = {course.link} target="_blank"><button className = "btn btn-sm btn-warning"><strong>Live Session </strong></button></a>
                            </div>
                            <div className = "row">
                                { user === 'Teacher' &&
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        {/* <button className="btn btn-primary btn-lg btn-course btn-cal">Edit Calendar</button> */}
                                        <Link to={`/Schedule/${course._id}`} ><img className = "calendar" src={image4} alt=""/> </Link>
                                    </div>
                                }
                                { user === 'Student' &&
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        {/* <button className="btn btn-primary btn-lg btn-course btn-cal">Edit Calendar</button> */}
                                        <Link to={`/ViewSchedule/${course._id}`} ><img className = "calendar" src={image4} alt=""/> </Link>
                                    </div>
                                }
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12 course-btns">                              
                                    <div className='course_sudents row ml-2 mr-2'>                                       
                                        <Link  to= {`/peers/${course._id}`} >   <button className="btn btn-primary btn-lg btn-course btn-peers">Student's List</button></Link> 
                                    </div>  
                                    <br/>
                                    { user === 'Teacher' &&
                                        <div>
                                            <div className='course_doubts row ml-2 mr-2'>
                                                {/* <button className="btn btn-primary btn-lg btn-course ">Post Announcements</button> */}
                                                <Link  to= {`/Announcement/${course._id}`} >  <button className="btn btn-primary btn-lg btn-course btn-peers">Post Announcements</button></Link>
                                            </div>
                                        <br/>
                                            <div className='course_doubts row ml-2 mr-2'>
                                                {/* <button className="btn btn-primary btn-lg btn-course">Take Test</button> */}
                                                <Link  to= {`/test/${course._id}`} >   <button className="btn btn-primary btn-lg btn-course btn-peers">Take Tests</button></Link>
                                            </div> 
                                        </div>
                                    }
                                    <div className='course_doubts row ml-2 mr-2'>
                                            <Link  to= {`/Doubts/${props.match.params.id}`} >  <button className="btn btn-primary btn-lg btn-course btn-peers">FAQ's and Doubts</button></Link>
                                    </div>
                                    
                                       
                                    
                                </div>
                            </div>
                        </div> 
                    )})}


                    {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            <div className="img-square-wrapper">
                                    <img className="" src={image3} alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Test</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title"> Tests.. </h1>
                </div>
            </div>
            {Test.map(test=>{
                return(     
                    (test.course === props.match.params.id && user === "Student")  && 
                        <div>                               
                            <button className="btn btn-primary btn-lg btn-course btn-peers" onClick = {()=> VT(test._id)}> Attempt {test.testName} </button>
                        </div>   
                    )           
            })}
            {Test.map(test=>{
                return(     
                    (test.course === props.match.params.id && user === "Teacher")  && 
                        <div>                               
                            <button className="btn btn-primary btn-lg btn-course btn-peers"><Link to= {`/ReviewTest/${test._id}`}> Review {test.testName} </Link> </button>
                        </div>   
                    )           
            })}

            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title"> Announcements.. </h1>
                </div>
            </div>
            {Announcement.map(announcement=>{
                return(
                    <div>
                        { announcement.course === props.match.params.id  && 
                            
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="card">
                                    <div className="card-horizontal card-announcements">
                                    <div className="img-square-wrapper">
                                            { announcement.type === "image" && <img className="" src={image2} alt="Card image cap"/>}
                                            { announcement.type === "video" && <img className="" src={image1} alt="Card image cap"/>}
                                            { announcement.type === "assignment" && <img className="" src={image3} alt="Card image cap"/>}
                                        </div>
                                        <div className="card-body">
                                            {/* <h4 className="card-title explore-title">Resources for class diagrams</h4> */}
                                            <h4 className="card-title explore-title">New {announcement.type} added ..</h4>
                                            <p className="card-text">{announcement.description}</p>
                                            <a href = {announcement.link} target="_blank"><button className = "btn btn-sm btn-warning"><strong>Link </strong></button></a>
                                           </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            
                            
                            
                        }
                    </div>
                )})}
           
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            <div className="img-square-wrapper">
                                    <img className="" src={image3} alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Test</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {Test.map(test=>{
                return(     
                    (test.course === props.match.params.id && user === "Student")  && 
                        <div>                               
                            <button className="btn btn-primary btn-lg btn-course btn-peers" onClick = {()=> VT(test._id)}>Test Links </button>
                        </div>   
                    )           
            })}
            {Test.map(test=>{
                return(     
                    (test.course === props.match.params.id && user === "Teacher")  && 
                        <div>                               
                            <button className="btn btn-primary btn-lg btn-course btn-peers"><Link to= {`/ReviewTest/${test._id}`}> Review {test.testName} </Link> </button>
                        </div>   
                    )           
            })} */}
            
        </div>
    )
}

export default CourseTeacher
