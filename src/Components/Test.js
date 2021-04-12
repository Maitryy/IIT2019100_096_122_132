import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router';

function Test(props) {
    const [testName,setTest] = useState();
    const [questionNum,setQuestionNum] = useState(1);
    const [dueTime,setdueTime] = useState();
    const [quest,setQuestion1] = useState();
    const [xyz,setXyz]= useState(false);
    const [test_ID, setTestId]= useState();
    const history = useHistory();
    const [abc,setabc]= useState(false);
   
    async function createTest(e){
        e.preventDefault();
        try {
            const course_id = props.match.params.id ;
            const newTest = {
                course_id,
                quest,
                testName,
                dueTime
             
            };
            const test_id=await axios.post("http://localhost:5000/test/NewTest",newTest );
            console.log(test_id);
            setTestId(test_id.data);
            setXyz(true);
            setQuestion1(null);

        } catch (err) {
         console.error(err);
        }
    }

    async function addQuestion(e){
        e.preventDefault();
        try {
            const newQuestion = {
                test_ID,
                questionNum,
                quest
            }
            await axios.post("http://localhost:5000/test/AddQuestions", newQuestion);
            setQuestion1(null);
            setabc(false);

        } catch (err) {
            console.error(err);            
        }
    }
    async function previousPage(){
        history.push('/HomeTeacher');
    }

    function Add(){
        setabc(true);
        var num = questionNum;
        num = num + 1;
        setQuestionNum(num);
    }

    return (
        <div>
            {!xyz &&
            <>
                <form className = "create" onSubmit = {createTest}>
                    <div className="prop">
                        <label >Test Name</label>
                        <input 
                            type='string' 
                            placeholder = 'test name' 
                            onChange = {(e) => setTest(e.target.value)}
                            value= {testName}
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

                    <div className="prop">
                        <label >Question 1</label>
                        <input 
                            type='string' 
                            placeholder = 'question 1' 
                            onChange = {(e) => setQuestion1(e.target.value)}
                            value= {quest}
                        />
                    </div>                     
                    
                    <button className="btn btn-course" type = 'submit'>Submit</button>
                </form>
            </>
            }
            {xyz &&!abc && 
            <>
                <div> Add more questions?</div>
                <button onClick = {Add}>Yes</button>
                <button onClick = {previousPage}>No</button>
            </>
            }
            {xyz && abc &&
            <>
                <form onSubmit = {addQuestion}>
                    <div>Question Number: {questionNum}</div>
                    <div>
                        <label>Question Text</label>
                        <input 
                            type='String' 
                            placeholder = 'Question Text' 
                            onChange = {(e) => setQuestion1(e.target.value)}
                            value= {quest}
                        />
                    </div>
                    <button className="btn btn-course" type = 'submit'>Add Question</button>
                </form>
            </>            
            }
        </div>
    )
}

export default Test