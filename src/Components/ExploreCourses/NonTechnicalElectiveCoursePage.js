import React, { useEffect, useState } from 'react'

export default function NonTechnicalElectiveCoursePage() {
    const [data,setData] = useState([]);

    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetNonTechnicalElectiveCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data);
    }, [data]);

    return (
        <div>
            {data.map(course=>{
                return(
                    <div key = '_id'>   
                        <div>   Course name { course.name} </div>
                        <div>   Course id { course.id} </div> 
                        <div>   Course credits: { course.credits} </div>
                        <div>   Course description { course.description } </div>
                        <br></br>
                    </div>
                    
                )
            })}
            
        </div>
    )
}
