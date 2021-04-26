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
                       

{data.map(course=>{
    return(
          
                ( course._id === props.match.params.id ) && 
                  <div>
                  
                            <div className="Students">
                
                <div className="jumbotron list-stu">
                
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