import axios from 'axios';
import React, {useState, useContext } from 'react'
import { useHistory } from 'react-router';
import userContext from '../Context/UserContext'

function AnswerFaq(props) {
    const [answer,setAnswer] = useState();
    
  
    const history = useHistory();
    const {userName} = useContext(userContext);
   
     async function createFaq(e){
         e.preventDefault();

        try {
            const course_id = props.match.params.id ;
           

            console.log(course_id);
            console.log(userName);
            const student=userName;

            const newFaq = {
                course_id,
               answer
            };

            await axios.post("http://localhost:5000/course/AnswerFaq", newFaq);
            history.push(`/courseTeacher/${props.match.params.id}`);
            
        } catch (err) {
         console.error(err);
         }
     }

    return (
        <div>
    <h1>heyyyyyy</h1>
             <form className = "create"
                        onSubmit = {createFaq}
                    >
                        <div className="prop">
                            <label >Answer</label>
                        <input 
                            type='string' 
                            placeholder = 'answer' 
                            onChange = {(e) => setAnswer(e.target.value)}
                            value= {answer}
                        />
                        </div>

                  
                                       
                        <button className="btn btn-course" type = 'submit'>Submit</button>
                    </form>       
        </div>
    )
}

export default AnswerFaq
