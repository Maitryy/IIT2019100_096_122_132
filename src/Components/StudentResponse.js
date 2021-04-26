import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

function StudentResponse(props) {
    const [da,setDa] = useState([]);
    const [marks,setMarks] = useState(0);
    const history = useHistory();
    useEffect(async() =>{
        const id = props.match.params.id;
        const id2 = props.match.params.id2;
        const res = await axios.get(`http://localhost:5000/test/StudentResponse/${id}/${id2}`);
        const data = await res.data;
        setDa(data);
    },[]);
    useEffect(()=>{
        console.log(da);
    },[da]);

    async function AddMarks(e){
        e.preventDefault();
        try {
            const id = da.id;
            const r = {
                id,
                marks
            };

            await axios.post("http://localhost:5000/test/UpdateMarks", r);
            history.push(`/ReviewTest/${props.match.params.id}`);            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            {
                da.Arr.map(x =>{
                    return(
                        <>
                            <div>Question: {x.ques}</div>
                            <div>Max Marks: {x.marks}</div>
                            <div>Student Response:</div>
                            <div>{x.ans}</div>
                            {x.ans === " " &&
                            <div>Not Attempted</div>
                            }
                            <input 
                                type='Number' 
                                placeholder = '0'   
                            />
                        <br/>
                        <br/>         
                        </>
                    )
            })}
            <form onSubmit = {AddMarks}>
                <input 
                    type='Number' 
                    placeholder = '0' 
                    onChange = {e => setMarks(e.target.value)}
                    value = {marks}  
                    />
                <button type = 'submit'>Submit Marks</button>
            </form>
            
        </div>
    )
}

export default StudentResponse
