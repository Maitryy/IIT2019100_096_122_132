import { render } from '@testing-library/react'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import '../bootstrap/bootstrap.css'
import image from '../images/grade-02.png'
import './grades.css'


const Grades = (props) => {
    const [data,setData] = useState();
    const [isLoading,setLoading] = useState(true);

    useEffect(async() => {
        const id = props.match.params.id;
        const x = await axios.get(`http://localhost:5000/test/Grades/${id}`);
        const y = await x.data;
        setData(y);
        console.log(y.gradesArr);
        setLoading(false);        
    },[])

    return ( 
        <>
            {!isLoading &&
            
            <div className="container">
            <div className="row ">
            <div className= " g-div col-lg-12 col-md-12 col-sm-12     col-12">
                <div className="grade-image-div">
                <img className = "grade-image" src={image} alt=""/>
                </div>
            </div>
            </div>

            <div className="jumbotron list-stu">
                <h3 className="stu-head">Grades </h3>
                <table className="table">
                <tr>
                    <th >#</th>
                    <th>Test Name</th>
                    <th>Marks Obtained</th>
                    <th>Total Marks</th>
                </tr>
                { data.gradesArr.map(obj => {
                    return(
                        <tr>
                            <td><i className="fas fa-adjust stu "></i></td>
                            <td>{obj.name}</td>
                            <td>{obj.marks === -1 && <>Not Reviewed</>}
                                {obj.marks !== -1 && <>{obj.marks}</>}</td>
                            <td>{obj.maxMarks}</td>
                        </tr>                    
                    )})}
                
                </table>
                   
                </div>

        </div>
            
            
            
            
            }
        </>        
     )}

export default  Grades