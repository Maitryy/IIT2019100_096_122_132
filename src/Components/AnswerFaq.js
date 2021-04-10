/*
import React, { useContext } from 'react'
import '../bootstrap/bootstrap.css'
import image from '../images/teacher-profile-01.png'
import './peers.css'

function Faq() {
    
    return(
       

        <div className="peers">
             <div className="container">
                <div className="card bg-dark text-white enroll-card">
                    <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                    <div className="card-img-overlay">
                        <h1 className=" enroll-card-title card-title">Feedback and Queries</h1>
                    </div>
                </div>
                <div className="Teachers">
                
                <div className="teach-list">
                <div className="card-horizontal ">
                    <div className="img-square-wrapper">
                            <img className="" src = {image} alt="Card image cap"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title explore-title">Teacher: </h4>
                            <p className="card-text"> Dr. Martha Holmes</p>
                            <p className="card-text"> Professor at Indian Institute of Information Technology, Allahabad.<br/> Devghat, Jhalwa, Allahabad, India</p>
                            
                        </div>
                    </div>
                

                </div>
                </div>
                <div className="Students">
                
                <div className="jumbotron list-stu">
                <h3 className="stu-head">Students: </h3>
                    <ul>
                    
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>Q: How do I login </li>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>A: Go to the login button in the navbar </li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>Q: How do I enroll in a course </li>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>A: Go to explore courses then there is a button to enroll in a course </li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>Q: How do I see the courses I have enrolled in</li>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>A: You can see them in Courses button in navbar </li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>Q: How do I signup </li>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i>A: Go to the signup button in the navbar </li>
                        <hr className="my-4"/>
                    </ul>
                </div>

                </div>
             </div>
        </div>
    )

}

export default Faq*/

import axios from 'axios';
import React, {useState, useContext } from 'react'
import { useHistory } from 'react-router';
import userContext from '../Context/UserContext'

function AnswerFaq(props) {
    const [answer,setAnswer] = useState();
    
  
    const history = useHistory();
    const {userName} = useContext(userContext);
   
     async function createFaq(e){
         e.preventDefault();

        try {
            const course_id = props.match.params.id ;
           

            console.log(course_id);
            console.log(userName);
            const student=userName;

            const newFaq = {
                course_id,
               answer
            };

            await axios.post("http://localhost:5000/course/AnswerFaq", newFaq);
             history.push("/HomeStudent");
            
        } catch (err) {
         console.error(err);
         }
     }

    return (
        <div>
    <h1>heyyyyyy</h1>
             <form className = "create"
                        onSubmit = {createFaq}
                    >
                        <div className="prop">
                            <label >Answer</label>
                        <input 
                            type='string' 
                            placeholder = 'answer' 
                            onChange = {(e) => setAnswer(e.target.value)}
                            value= {answer}
                        />
                        </div>

                  
                                       
                        <button className="btn btn-course" type = 'submit'>Submit</button>
                    </form>       
        </div>
    )
}

export default AnswerFaq
