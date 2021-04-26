import { render } from '@testing-library/react'
import React, {  useContext , useEffect, useState  } from 'react'
import '../bootstrap/bootstrap.css'
import image from '../images/teacher-profile-01.png'
import Schedule from './schedule';

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
                        <div className="card-body">
                        <div className="card bg-dark text-white enroll-card">
                            <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                            <div className="card-img-overlay">
                        
                                <h1 className=" enroll-card-title card-title">Schedule</h1>
                            </div>
                        </div>
                       

{data.map(course=>{
    return(
          
                ( course._id === props.match.params.id ) && 
                  <div>
                  
                            <div className="Students">
                
                
                
                    <ul>
                    {data1.map(Schedule=>{
                return(
                    <div>
                        { Schedule.course === props.match.params.id  && 
                            <div className="jumbotron course">
                                <p className="display-4">{Schedule.month}</p>
                                <p className="lead">{Schedule.classnum} </p>
                                <p className="display-2">{Schedule.topics}</p>
                                <p className="lead">{Schedule.days} </p>
                            </div>
                        }
                    </div>
                )})}
                    </ul>

                

                </div>
                )
                      
                    </div>
                

              
    )

})}

</div>
</div>



)
}
export default ViewSchedule