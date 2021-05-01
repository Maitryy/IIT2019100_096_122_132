import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import userContext from '../../Context/UserContext';


function CoreCoursePage() {
    const [data,setData] = useState([]);
    const {user} = useContext(userContext);
    const history = useHistory();

    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetCoreCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data);
    }, [data]);

    async function EnrollCourse(enCourse){
        try {
            const course_id = {enCourse};
            console.log(course_id);
            await axios.post("http://localhost:5000/auth/enrollCourse",course_id);
            history.push('/HomeStudent');
            
        } catch (err) {
            console.error(err);
        }
    }
    
    return (
        <div className="container">
        <div className="row ">
            {data.map(course=>{
                return(
                    
                    
                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                        <div key = '_id'>
                            <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img  src = {course.image} alt="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                            <div class="card-body">
                                <div key = '_id'>   
                                    {/* <div>   <strong>Course name: </strong>{ course.name} </div>
                                        <div>  <strong>Course id: </strong>{ course.id} </div> 
                                        <div>   <strong>Course credits: </strong>{ course.credits} </div>
                                        <div>  <strong>Course description: </strong> { course.description } </div>
                                        <br></br> */}
                        <h4 className= " card-title">{ course.name}</h4>
                        <p className="text-muted">Credits: { course.credits}</p>
                        <p className="text-muted">Mentors: { course.teacher}</p>
                        <p className="text-muted">Description: { course.description}</p>
                                </div>
                                    {user === 'Student' &&
                                    <>
                                    <button className="btn btn-primary btn-course" onClick = {() => EnrollCourse(course.id)}>Enroll Course</button>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default CoreCoursePage
