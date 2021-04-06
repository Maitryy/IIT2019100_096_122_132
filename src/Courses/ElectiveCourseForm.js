import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import './AddCourse.css';

function ElectiveCourseForm() {
    const [name,getName] = useState("");
    const [id,getID] = useState("");
    const [credits,getCredits] = useState(1);
    const [description,getDescription] = useState("");
    const [subtype,getType] = useState("");
    const [link,getLink] = useState("");
    const [image,getImage] = useState("");

    const history = useHistory();

    async function addElectiveCourse(e){
        e.preventDefault();

        try {
            const ElectiveCourse = {
                name,
                id,
                credits,
                description,
                subtype,
                link,
                image
            }
            
            const y = await axios.post("http://localhost:5000/course/AddElectiveCourse", ElectiveCourse);
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
            <form className = "create" onSubmit = {addElectiveCourse}>
            <div className="prop">
                <label >Course Name </label>
                <input 
                    className = "textarea"
                    type='string' 
                    placeholder = 'Enter Course Name' 
                    onChange = {(e) => getName(e.target.value)}
                    value= {name}
                />
            </div>

            <div className="prop">
                <label >Course ID</label>
                <input 
                    className = "textarea"
                    type='string' 
                    placeholder = 'Enter Course ID' 
                    onChange = {(e) => getID(e.target.value)}
                    value= {id}
                />
            </div>

            <div className="prop">
                <label >Number of Credits</label>
                <input 
                    className = "textarea"
                    type='number' 
                    placeholder = 'Enter Credits' 
                    onChange = {(e) => getCredits(e.target.value)}
                    value= {credits}
                />
            </div>

            <div className="prop">
                <label >Course Description</label>
                <textarea 
                    className = "textarea"
                    rows="5"
                    maxlength ="60"
                    type='string' 
                    placeholder = 'Write a short description of the course' 
                    onChange = {(e) => getDescription(e.target.value)}
                    value= {description}
                />
            </div>

            <div className="prop">
                <label >Course Sub-Type</label>
                <input 
                    className = "textarea"
                    type='string' 
                    placeholder = 'Technical/Non-Technical' 
                    onChange = {(e) => getType(e.target.value)}
                    value= {subtype}
                />
            </div>

            <div className="prop">
                <label >Class Link</label>
                <input 
                    className = "textarea"
                    type='string' 
                    placeholder = 'google meet / webex meet link' 
                    onChange = {(e) => getLink(e.target.value)}
                    value= {link}
                />
            </div>

            <div className="prop">
                <label >Image Link</label>
                <input 
                    className = "textarea"
                    type='string' 
                    placeholder = 'image url' 
                    onChange = {(e) => getImage(e.target.value)}
                    value= {image}
                />
            </div>

            <button type = 'submit'>Add Course</button>

            </form>
        </div>
    )
}

export default ElectiveCourseForm;
