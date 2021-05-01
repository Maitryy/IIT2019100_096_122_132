import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ViewTest.css'
import './Answer.css'
import '../Auth/Register.css'
import '../Courses/AddCourse.css';
import '../bootstrap/bootstrap.css'
import { useHistory } from 'react-router';

function Answer(props) {
    const [ques,getQues] = useState([]);
    const [ans,setAns] = useState();
    const testID = props.match.params.id;
    const history = useHistory();

    useEffect(async() => {
        const response = await axios.get("http://localhost:5000/test/getQuestion");
        const da = await response.data;
        getQues(da); 
    }, []);

    useEffect( ()=> {
        console.log(ques);
    },[ques]);

    async function upload(quesNo,quesID){
        try {
            const a = {
                testID,
                ans,
                quesNo,
                quesID
            }
            await axios.post("http://localhost:5000/test/Answer",a);
            history.push(`/viewtest/${testID}`);          
            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="container ">
        <div className="row">
            {ques.map(q=>{
                return(
                    (q._id === props.match.params.id2)&&
                    <div className="col-12">
                        {/* <h3>Question Number: {q.questionNumber}</h3>
                        <h3>Max Marks: {q.maxMarks}</h3> */}
                        <h3><div className="giveans">Q: {q.ques}</div></h3>
                        <form onSubmit = {() => upload(q.questionNumber,q._id)}>
                            <textarea
                                className="anstext"
                                rows="7"
                                cols="150"
                                type='string'    
                                placeholder = {ans}
                                onChange = {(e) => setAns(e.target.value)}
                                value= {ans} 
                            />
                            <br/>
                            <button className="create btn btn-course  btn-ans" type = 'submit'>Submit Answer</button>
                        </form>

                    </div>
                )})}
        </div>
        </div>
    )
}

export default Answer
