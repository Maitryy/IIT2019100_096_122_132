import React , { useContext, useState, useEffect } from 'react'
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext';


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
                                    <div>{uCourse.name}</div>
                                    <div>{uCourse.id}</div>
                                    <div>{uCourse.credits}</div>
                                    <br></br>
                                </>
                            } 
                            </div>
                        )
                    })}
                    </>)
            })}
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
                                    <div>{uCourse.name}</div>
                                    <div>{uCourse.id}</div>
                                    <div>{uCourse.credits}</div>
                                    <br></br>
                                </>
                            } 
                            </div>
                        )
                    })}
                    </>)
            })}

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
                                    <div>{uCourse.name}</div>
                                    <div>{uCourse.id}</div>
                                    <div>{uCourse.credits}</div>
                                    <br></br>
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
