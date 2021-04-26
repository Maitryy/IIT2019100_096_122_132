import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StudentResponse(props) {
    const [da,setDa] = useState([]);
    const [marks,setMarks] = useState(0);
    var y = 0;
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

    return (
        <div>
            Hello
            {
                da.Arr.map(x =>{
                    return(
                        <div>
                            <div>Question: {x.ques}</div>
                            <div>Student Response:</div>
                            <div>{x.ans}</div>
                            {x.ans === " " &&
                            <div>Not Attempted</div>
                            }
                            {/* <input 
                                type='Number' 
                                placeholder = '0'   
                                onChange = {(e) => AddMarks(e.target.value)}
                                value= {marks} 
                                /> */}
                                    
                        </div>
                    )
            })}
            
        </div>
    )
}

export default StudentResponse
