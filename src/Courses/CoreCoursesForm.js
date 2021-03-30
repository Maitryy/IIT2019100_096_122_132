import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

function CoreCoursesForm() {
    const [name,getName] = useState("");
    const [id,getID] = useState("");
    const [credits,getCredits] = useState(1);
    const [description,getDescription] = useState("");

   

    const history = useHistory();

    async function addCoreCourse(e){
        e.preventDefault();

        try {
            const CoreCourse = {
                name,
                id,
                credits,
                description,
            }
            
            const y = await axios.post("http://localhost:5000/course/AddCoreCourse", CoreCourse);
            if(y)
            {
                history.push('/HomeTeacher');
            }

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form className = "create" onSubmit = {addCoreCourse}>
            <div className="prop">
                <label >Course Name </label>
                <input 
                    type='string' 
                    placeholder = 'Enter Course Name' 
                    onChange = {(e) => getName(e.target.value)}
                    value= {name}
                />
            </div>

            <div className="prop">
                <label >Course ID</label>
                <input 
                    type='string' 
                    placeholder = 'Enter Course ID' 
                    onChange = {(e) => getID(e.target.value)}
                    value= {id}
                />
            </div>

            <div className="prop">
                <label >Number of Credits</label>
                <input 
                    type='number' 
                    placeholder = 'Enter Credits' 
                    onChange = {(e) => getCredits(e.target.value)}
                    value= {credits}
                />
            </div>

            <div className="prop">
                <label >Course Description</label>
                <input 
                    type='string' 
                    placeholder = 'Write a short description of the course' 
                    onChange = {(e) => getDescription(e.target.value)}
                    value= {description}
                />
            </div>

            <button type = 'submit'>Add Course</button>

            </form>
        </div>
    )
}

export default CoreCoursesForm;
