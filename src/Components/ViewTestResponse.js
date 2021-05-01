import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './ViewTestResponse.css'

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
        <div className="container">
            {/* Hello */}
            <div className="jumbotron list-stu">
            <h3 className="stu-head">Students: </h3>
            <ul>
                {
                    testRes.map(te => {
                        return(
                            (te.test === props.match.params.id)&&
                            <div classname="conatiner">
                                <li>
                                    <span className="ele">{te.name}</span>{space} 
                                    <span className="ele">
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
                                    </span>
                                    {space}
                                    <span className="ele">
                                    <Link to = {`/StudentResponse/${te.test}/${te.student}`}><button className="btn btn-course btn-res">Review Test</button></Link>
                                    </span>
                                </li>
                        </div>
                )})}
            </ul>
            </div>
        </div>
    )
}

export default ViewTestResponse
