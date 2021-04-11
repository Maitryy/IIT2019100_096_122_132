
import axios from 'axios';
import React, {useState, useContext } from 'react'
import { useHistory } from 'react-router';
import userContext from '../Context/UserContext'

function Test(props) {
    const [test,setTest] = useState();
    const [questionNum,setQuestionNum] = useState();
    const [dueTime,setdueTime] = useState();
  
    const [question,setQuestion1] = useState();
  
    const [xyz,setXyz]= useState(false);
  
 const[testId, setTestId]= useState();

    const history = useHistory();
    const {userName} = useContext(userContext);
   
     async function createTest(e){
         e.preventDefault();


        try {
            const course_id = props.match.params.id ;
           

            const newFaq = {
                course_id,
                test,
                question,
                dueTime
             
            };

            const test_id=await axios.post("http://localhost:5000/test/NewTest",newFaq );
          
            setTestId(test_id);
            setXyz(true);


        } catch (err) {
         console.error(err);
         }
     }

    return (
        <div>
    <h1>heyyyyyy</h1>
             <form className = "create"
                        onSubmit = {createTest}
                    >
                        <div className="prop">
                            <label >Test Name</label>
                        <input 
                            type='string' 
                            placeholder = 'test name' 
                            onChange = {(e) => setTest(e.target.value)}
                            value= {test}
                        />
                         </div>
                      
                        
                        <div className="prop">
                            <label >Question 1</label>
                        <input 
                            type='string' 
                            placeholder = 'question 1' 
                            onChange = {(e) => setQuestion1(e.target.value)}
                            value= {question}
                        />
                        </div>

                           
                     
               
                        <div className="prop">
                            <label >Due time</label>
                        <input 
                            type='string' 
                            placeholder = 'due time (hr:min::dd/mm/yyyy)' 
                        
                            onChange = {(e) => setdueTime(e.target.value)}
                            value= {dueTime}
                        />
                        </div>

                        
                       

                                       
                        <button className="btn btn-course" type = 'submit'>Add Question</button>
                    </form>       
        </div>
    )
}

export default Test