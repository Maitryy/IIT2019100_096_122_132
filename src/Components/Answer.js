import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Answer(props) {
    const [ques,getQues] = useState([]);
    const [ans,setAns] = useState();
    const testID = props.match.params.id2;

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
            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            {ques.map(q=>{
                return(
                    (q._id === props.match.params.id)&&
                    <>
                        <h3>{q.questionNumber}</h3>
                        <h2>{q.ques}</h2>
                        <form onSubmit = {() => upload(q.questionNumber,q._id)}>
                            <input 
                                type='string'    
                                placeholder = {ans}
                                onChange = {(e) => setAns(e.target.value)}
                                value= {ans} 
                            />
                            <button type = 'submit'>Submit Answer</button>
                        </form>

                    </>
                )})}
        </div>
    )
}

export default Answer
