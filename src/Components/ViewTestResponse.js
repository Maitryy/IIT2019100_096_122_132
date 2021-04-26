import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewTestResponse(props) {
    const [testRes, setTestRes] = useState([]);
    const space = "  ";

    useEffect(async() =>{
        const X = await axios.get("http://localhost:5000/test/getTestStudent");
        const da = await X.data;
        setTestRes(da);
    }, []);
    
    useEffect(() =>{
        console.log(testRes);
    }, [testRes]);

    return (
        <div>
            Hello
            <ul>
                {
                    testRes.map(te => {
                        return(
                            (te.test === props.match.params.id)&&
                            <>
                                <li>
                                    {te.name}{space}
                                    {te.marks === -1 && 
                                    <> 
                                        Not checked
                                    </>
                                    }
                                    {te.marks !== -1 &&
                                    <>
                                        {te.marks  }
                                    </>
                                    }
                                    {space}
                                    <Link to = {`/StudentResponse/${te.test}/${te.student}`}><button>Review Test</button></Link>
                                </li>
                        </>
                )})}
            </ul>
        </div>
    )
}

export default ViewTestResponse
