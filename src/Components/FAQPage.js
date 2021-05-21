import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import userContext from '../Context/UserContext';


function FAQPage(props) {
    const[Faq,setFaq] = useState([]);
    const {user} = useContext(userContext);

    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/getFaq");
        const da = await response.json();
        setFaq(da);
    }, []);
    useEffect( () => {
       
    }, [Faq]);


    return (
        <div>
            { user==='Student' &&
                <div class = "container">
                    <Link  to= {`/Faq/${props.match.params.id}`} >  <button className="btn btn-primary btn-lg btn-course btn-peers">Ask Questions </button></Link>
                </div>
            }
            {Faq.map(faq=>{
                return(
                    <div>
                        { faq.course === props.match.params.id  && 
                            <div className="jumbotron list-stu">
                                <ul>
                                    <li className="peer"><strong>Asked by: </strong>{faq.student}  </li>
                                    <li className="peer"> <i className="fas fa-user-circle stu "></i><strong>Q: </strong>{faq.question} </li>   
                                        {
                                            faq.answer.map(ans=>{
                                                return(
                                                    <div>
                                                        <ul>
                                                            <li className="peer"> <i className="fas fa-user-circle stu "></i><strong>A: </strong>{ans} </li>
                                                        </ul>
                                                    </div>
                                                )})}
                                </ul>
                                { user==='Teacher' &&
                                    <div>
                                        <Link  to= {`/AnswerFaq/${faq._id}/${props.match.params.id}`} >  <button className="btn btn-primary btn-lg btn-course btn-peers">Answer</button></Link>
                                    </div>
                                }
                            </div>
                        }
                        <br/>
                    </div>
                )})}
        </div>
    )
}

export default FAQPage
