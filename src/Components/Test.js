import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import './ViewTest.css'
import '../Auth/Register.css'
import '../Courses/AddCourse.css';
import '../bootstrap/bootstrap.css'

function Test(props) {
    const [testName,setTest] = useState();
    const [questionNum,setQuestionNum] = useState(1);
    const [dueTime,setdueTime] = useState();
    const [quest,setQuestion1] = useState();
    const [xyz,setXyz]= useState(false);
    const [test_ID, setTestId]= useState();
    const [maxMarks, setMaxMarks]= useState(1);
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
                dueTime,
                maxMarks             
            };
            const test_id=await axios.post("http://localhost:5000/test/NewTest",newTest );
            console.log(test_id);
            setTestId(test_id.data);
            setXyz(true);
            setQuestion1(null);
            setMaxMarks(1);

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
                quest, 
                maxMarks
            }
            await axios.post("http://localhost:5000/test/AddQuestions", newQuestion);
            setQuestion1(null);
            setabc(false);
            setMaxMarks(1);

        } catch (err) {
            console.error(err);            
        }
    }
    async function previousPage(){
        history.push(`/courseTeacher/${props.match.params.id}`);
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
                            placeholder = 'due time (dd/mm/yyyy hh:mm)' 
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
                    <div className = "props">
                        <label>Maximum Marks</label>
                        <input 
                            type='Number' 
                            placeholder = 'Max Marks' 
                            onChange = {(e) => setMaxMarks(e.target.value)}
                            value= {maxMarks}
                        />
                    </div>                   
                    
                    <button className="btn btn-course" type = 'submit'>Submit</button>
                </form>
            </>
            }
            {xyz &&!abc && 
            <>
                <div className="question">
                <h1 className="headq"> Add more questions?</h1>
                <div className="questions">
                <button className = "btn btn-lg btn-q btn-course" onClick = {Add}>Yes</button>
                <button className = "btn btn-lg btn-q btn-course" onClick = {previousPage}>No</button>
                </div>
                </div>
            </>
            }
            {xyz && abc &&
            <>
                <form className = "create" onSubmit = {addQuestion}>
                    <h2 className="number">Question Number: {questionNum}</h2>
                    <div className="props">
                        <label>Question Text</label>
                        <textarea
                             
                            type='String' 
                            placeholder = 'Question Text' 
                            onChange = {(e) => setQuestion1(e.target.value)}
                            value= {quest}
                        />
                    </div>
                    <div className = "props">
                        <label>Maximum Marks</label>
                        <input 
                            type='Number' 
                            placeholder = 'Max Marks' 
                            onChange = {(e) => setMaxMarks(e.target.value)}
                            value= {maxMarks}
                        />
                    </div> 
                    <button className="btn btn-course btn-q" type = 'submit'>Add Question</button>
                </form>
            </>            
            }
        </div>
    )
}

export default Test