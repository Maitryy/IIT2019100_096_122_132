import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './StudentResponse.css'

function StudentResponse(props) {
    const [da,setDa] = useState([]);
    const [marks,setMarks] = useState(0);
    const [isLoading,setLoading] = useState(true);
    const history = useHistory();
    useEffect(async() =>{
        const id = props.match.params.id;
        const id2 = props.match.params.id2;
        const res = await axios.get(`http://localhost:5000/test/StudentResponse/${id}/${id2}`);
        const data = await res.data;
        setDa(data);
        setLoading(false);
    },[]);
    // useEffect(()=>{
    //     console.log(da);
    // },[da]);

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
            <h1 className="stureshd">Student's Responces</h1>
            {!isLoading &&
            <>
            {
                da.Arr.map(x =>{
                    return(
                        <>
                            <div className="container">
                            <div className="queis">
                            <h3 className='stures'>Q: {x.ques}</h3>
                            <h4 className='stures'>Ans: {x.ans}</h4>
                            {x.ans === " " &&
                            <div>Not Attempted</div>
                            }
                            <input 
                                type='Number' 
                                placeholder = '0'   
                            />
                            <p>Max Marks: {x.marks}</p>
                        <br/>
                        <br/>  
                            </div>

                            </div>       
                        </>
                    )
            })}
            
                <form className="create" onSubmit = {AddMarks}>
                <label className="peers"> Total Marks obtained</label>
                <input 
                    type='Number' 
                    placeholder = '0' 
                    onChange = {e => setMarks(e.target.value)}
                    value = {marks}  
                    />
                    <br/>
                <button className = "btn btn-course btn-ans" type = 'submit'>Submit Marks</button>
            </form>
                
            </>
            }
            {isLoading &&
            <>
                <div>Loading</div>
            </>
            }
        </div>
    )
}

export default StudentResponse
