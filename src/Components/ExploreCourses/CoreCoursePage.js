import React, { useContext, useEffect } from 'react'
import CourseContext from '../../Context/CourseContext'

function CoreCoursePage() {
    // const {core} = useContext(CourseContext);

    // useEffect(()=> {
    //     console.log(core);
    // }
    // , [core])
    
    return (
        <div style={{marginLeft: "200px",
                    marginTop: "200px"}}>
            Hello
            {/* {core.map(course=>{
                return(
                    <div>
                        {
                            course.name
                        }
                    </div>
                )
            })} */}
        </div>
    )
}

export default CoreCoursePage
