import { render } from '@testing-library/react'
import React, { useContext } from 'react'
import '../bootstrap/bootstrap.css'
import image from '../images/teacher-profile-01.png'
import './peers.css'

function Peers(props) {
    console.log(props);
    return(
       

        <div className="peers">
             <div className="container">
                <div className="card bg-dark text-white enroll-card">
                    <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                    <div className="card-img-overlay">
                        <h1 className=" enroll-card-title card-title">People</h1>
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
                    
                        <li className="peer"> <i className="fas fa-user-circle stu "></i> Maitry Jadiya</li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-user-circle stu"></i> Dev Bansal</li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-user-circle stu"></i> Riya Goyal</li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-user-circle stu"></i> Sonal</li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-user-circle stu"></i> Saloni Singla</li>
                    </ul>
                </div>

                </div>
             </div>
        </div>
    )

}

export default Peers