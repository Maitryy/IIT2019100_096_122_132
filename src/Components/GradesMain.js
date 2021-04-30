import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import userContext from '../Context/UserContext';

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
                        <>
                            <div>
                                {co.name} 
                                <Link to = {`/GradesCourse/${co.id}`}>Click here</Link>
                            </div>
                        </>
                )})}
                </>
            }
        </div>
    )
}

export default GradesMain
