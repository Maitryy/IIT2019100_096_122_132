import axios from 'axios';
import React, {useState } from 'react'
import { useHistory } from 'react-router';

function Announcement(props) {
    const [type,setType] = useState();
    const [description,setDescription] = useState();
    const [link,setLink] = useState();

    const history = useHistory();
    
     async function createAnnouncement(e){
         e.preventDefault();

        try {
            const course_id = props.match.params.id ;
            console.log(course_id);
            const newAnnouncement = {
                course_id,
                type,
                description,
                 link
            };

            await axios.post("http://localhost:5000/course/Announcement", newAnnouncement);
             history.push("/HomeTeacher");
            
        } catch (err) {
         console.error(err);
         }
     }

    return (
        <div>
    <h1>heyyyyyy</h1>
             <form className = "create"
                        onSubmit = {createAnnouncement}
                    >
                        <div className="prop">
                            <label >Type</label>
                        <input 
                            type='string' 
                            placeholder = 'type' 
                            onChange = {(e) => setType(e.target.value)}
                            value= {type}
                        />
                        </div>

                        <div className="prop">
                            <label >Description</label>
                        <input 
                            type='string' 
                            placeholder = 'Description' 
                            onChange = {(e) => setDescription(e.target.value)}
                            value= {description}
                        />
                        </div>

                        <div className="prop">
                            <label >Link</label>
                        <input 
                            type='string' 
                            placeholder = 'Link' 
                            onChange = {(e) => setLink(e.target.value)}
                            value= {link}
                        />
                        </div>
                                       
                        <button className="btn btn-course" type = 'submit'>Submit</button>
                    </form>       
        </div>
    )
}

export default Announcement
