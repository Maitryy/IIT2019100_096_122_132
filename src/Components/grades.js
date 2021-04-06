import { render } from '@testing-library/react'
import React, { useContext } from 'react'
import '../bootstrap/bootstrap.css'
import image from '../images/grade-02.png'
import './grades.css'


const Grades = () => {
    return ( 
        <div className="container">
            <div className="row ">
            <div className= " g-div col-lg-12 col-md-12 col-sm-12     col-12">
                <div className="grade-image-div">
                <img className = "grade-image" src={image} alt=""/>
                </div>
            </div>
            </div>

            <div className="jumbotron list-stu">
                <h3 className="stu-head">Students: </h3>
                <table className="table">
                <tr>
                    <th >#</th>
                    <th>Test Name</th>
                    <th>Marks</th>
                    <th>Remarks</th>
                </tr>
                
                <tr>
                    <td><i className="fas fa-adjust stu "></i></td>
                    <td>Test 1</td>
                    <td>8</td>
                    <td>good</td>
                </tr>
                
                <tr>
                <td><i className="fas fa-adjust stu "></i></td>
                    <td>Test-2</td>
                    <td>9</td>
                    <td>Very Good</td>
                </tr>
                
                <tr>
                <td><i className="fas fa-adjust stu "></i></td>
                    <td>Test-3</td>
                    <td>6</td>
                    <td>Plaigrism</td>
                </tr>
                </table>
                   
                </div>

        </div>
     )}

export default  Grades