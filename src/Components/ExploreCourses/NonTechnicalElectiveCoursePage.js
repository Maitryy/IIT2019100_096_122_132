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
                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                    <div key = '_id'>
                        
                        <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                                <div class="card-body">
                    <div key = '_id'>   
                    <div>   <strong>Course name: </strong>{ course.name} </div>
                        <div>  <strong>Course id: </strong>{ course.id} </div> 
                        <div>   <strong>Course credits: </strong>{ course.credits} </div>
                        <div>  <strong>Course description: </strong> { course.description } </div>
                        <br></br>
                    </div>
                    </div>
                        </div>
                        </div>  
                    </div>
                    
                )
            })}
            
        </div>
    )
}
