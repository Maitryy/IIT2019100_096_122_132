import axios from 'axios';
import React,{useState,useLayoutEffect, createContext} from 'react';

const CourseContext = createContext();

function CourseContextProvider(props) {
    const [core,SetCore] = useState();
    const [technicalElective,SetTechnicalElective] = useState();
    const [nonTechnicalElective,SetNonTechnicalElective] = useState();

    async function getCore(){
        const CoreCourse = await axios.get("http://localhost:5000/course/GetCoreCourses");
        //console.log(CoreCourse.data);
        SetCore(CoreCourse.data);
       // console.log(core);
    }

    async function getTechnicalElective(){
        const TechnicalElectiveCourse = await axios.get("http://localhost:5000/course/GetTechnicalElectiveCourses");
        console.log(TechnicalElectiveCourse.data);
        SetTechnicalElective(TechnicalElectiveCourse.data);
    }

    async function getNonTechnicalElective(){
        const NonTechnicalElectiveCourse = await axios.get("http://localhost:5000/course/GetNonTechnicalElectiveCourses");
        console.log(NonTechnicalElectiveCourse.data);
        SetNonTechnicalElective(NonTechnicalElectiveCourse.data);
    }
    

    useLayoutEffect(() => {
        getCore();
        getTechnicalElective();
        getNonTechnicalElective();
    }, [])

    return <CourseContext.Provider value={{core,technicalElective,nonTechnicalElective,getNonTechnicalElective,getCore,getTechnicalElective}}>
        {props.children}
    </CourseContext.Provider>
};

export default CourseContext;
export {CourseContextProvider};
