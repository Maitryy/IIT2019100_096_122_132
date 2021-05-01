import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import userContext from '../Context/UserContext';
import './GradesMain.css'

function GradesMain() {
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const {userCourse} = useContext(userContext);

    useEffect(async() => {
        const x = await axios.get("http://localhost:5000/course/GetStuCourses");
        setData(x.data);
        console.log(userCourse);
        setLoading(false);
    }, []);
    return (
        <div>
            {!isLoading && 
                <>
                {data.arr.map(co => {
                    return(
                        <div className="container">
                            {/* <div>
                                {co.name} 
                                <Link to = {`/GradesCourse/${co.id}`}>Click here</Link>
                                
                            </div> */}
                            <div className="row">
                            <div className="col-12 mt-3">
                                <div className="card card-res">
                                    <div className="card-horizontal card-announcements">
                                    <div className="img-square-wrapper">
                                            <img className="" src={co.image} alt="Card image cap"/>
                                            
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title explore-title">{co.name}</h4>
                                            <p className="card-text">To see your Performance in this course</p>
                                            {/* <a className="card-text text-muted" href=" {announcement.link}">
                                            {announcement.link}
                                            </a> */}
                                            <Link to = {`/GradesCourse/${co.id}`}><button className="btn btn-course btn-res ">Click here</button></Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                )})}
                </>
            }
        </div>
    )
}

export default GradesMain
