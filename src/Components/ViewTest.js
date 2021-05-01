import React, { useContext , useEffect, useState }  from 'react'
import '../bootstrap/bootstrap.css'
import './Course.css'
import './CourseTeacher.css'
import './ViewTest.css'
import '../Courses/AddCourse.css';
import { Link } from 'react-router-dom';
import userContext from '../Context/UserContext';

function ViewTest(props) {
   
  const[Test,setTest]=useState([]);
  const[Question,setQuestion]=useState([]);

 useEffect(async() => {
    const response = await fetch("http://localhost:5000/test/getTest");
    const da = await response.json();
    setTest(da);
}, []);
useEffect( () => {
   
}, [Test]);

useEffect(async() => {
    const response = await fetch("http://localhost:5000/test/getQuestion");
    const da = await response.json();
    setQuestion(da);
}, []);
useEffect( () => {
   
}, [Question]);

return (
  <div className=' container'>
    {Test.map(test=>{
      return(   
        ( test._id === props.match.params.id ) && 
          <div>                         
            <div className="jumbotron course">
                <h1 className="display-4">{test.testName}</h1>
                <p className="lead"><strong>Due Time: </strong>{test.dueTime} </p>
                <hr className="my-4"/>
                </div>   
          </div>
        )    
    })}
    <div className ="row ">
    <div className="test-xyz ">
    {Question.map(qu=>{                                                   
      return(
         (qu.testID ===  props.match.params.id) &&   
          <div className="col">
            <ul>   
              <li className="peersxyz" > <strong>Q: {qu.questionNumber} </strong>
             {qu.ques}   </li>
              <Link to = {`/Answer/${qu._id}/${qu.testID}`}> <button  className="btn btn-primary btn-lg btn-course btn-peers">Attempt the question </button></Link>
              <li className="peersxyz" ><strong>MM: {qu.maxMarks}</strong> </li>
            </ul>
          </div>
    )})}  
    </div>     
    </div>                                             
  </div>
)}

export default ViewTest