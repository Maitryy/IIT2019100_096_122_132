import { render } from '@testing-library/react'
import React, { useContext } from 'react'
import '../bootstrap/bootstrap.css'

function Peers() {
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
                <h1>Teachers</h1>

                </div>
                <div className="Students">
                <h1>Students</h1>
                <div className="jumbotron list-stu">
                    <ul>
                        <li>Maitry Jadiya</li>
                        <li>Maitry Jadiya</li>
                        <li>Maitry Jadiya</li>
                        <li>Maitry Jadiya</li>
                        <li>Maitry Jadiya</li>
                        <li>Maitry Jadiya</li>
                    </ul>
                </div>

                </div>
             </div>
        </div>
    )

}

export default Peers