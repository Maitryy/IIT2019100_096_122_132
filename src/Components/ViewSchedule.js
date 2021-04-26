import { render } from '@testing-library/react'
import React, {  useContext , useEffect, useState  } from 'react'
import '../bootstrap/bootstrap.css'
import image from '../images/teacher-profile-01.png'
import Schedule from './schedule';
import './Course.css'
import './CourseTeacher.css'
import './ViewTest.css'

function ViewSchedule(props) {

    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetAllCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data);
    }, [data]);


    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/getSchedule");
        const da = await response.json();
        setData1(da);
    }, []);
    useEffect( () => {
        console.log(data1);
    }, [data1]);

    return(


        <div className="ViewSchedule">



{data.map(course=>{
    return(

                ( course._id === props.match.params.id ) &&
                <div>
                <div className="Students">
                <div className="container">
                <div className="card bg-dark text-white enroll-card card-pxyz">
                    <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                    <div className="card-img-overlay">

                        <h1 className=" enroll-card-title card-title">Schedule</h1>
                    </div>
                </div>
                </div>

                    <ul>
                    {data1.map(Schedule=>{
                return(
                    <div >
                        { Schedule.course === props.match.params.id  &&
                            <div className="schedule container">
                                <div className='  jumbotron card card-body card-schedule'>
                                <h2 className="scmonth">{Schedule.month}</h2>
                                <hr className="my-4"/>
                                <p className="card-text"><strong>Number of Classes: </strong> <br/>{Schedule.classnum} </p>
                                <p className="card-text"> <strong> Expected Topics to be covered</strong> <br/> {Schedule.topics}</p>
                                <p className="card-text"> <strong>Days of Scheduled Classes: </strong> <br/> {Schedule.days} <br/></p>
                                </div>
                            </div>
                        }
                    </div>
                )})}
                    </ul>
                </div>
                </div>

    )
})}

</div>
)}
export default ViewSchedule
