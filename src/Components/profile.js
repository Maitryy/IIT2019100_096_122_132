import React, { useContext , useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext'
import image3 from '../images/profile-01.png'
import './profile.css'
function Profile() {


const {userName} = useContext(userContext);
const {user} = useContext(userContext);
const {userEmail} = useContext(userContext);
const {userSemester} = useContext(userContext);
const {userBranch} = useContext(userContext);
const {userLastName} = useContext(userContext);
const {userPassword} = useContext(userContext);
  return (
   
    <div className='profile-page container'  key = '_id' >
      <div className="row ">
         <div className= " p-div col-lg-12 col-md-12 col-sm-12     col-12">
            <div className="profile-image-div">
            <img className = "profile-image" src={image3} alt=""/>
            </div>
          </div>
        </div>
        <div className="jumbotron list-stu">
                <h3 className="stu-head">Students: </h3>
                    <ul>
                    
                        <li className="peer"> <i className="fas fa-adjust stu "></i> <strong>UserName: </strong> {userName} {userLastName} </li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-adjust stu"></i> <strong>UserEmail: </strong> {userEmail}</li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-adjust stu"></i> <strong>Profession: </strong> {user}</li>
                        <hr className="my-4"/>
                        <li className="peer"> <i className="fas fa-adjust stu"></i> <strong>Branch: </strong> {userBranch}</li>
                        <hr className="my-4"/>
                        {user === 'Student' &&
                          <div>
                          <li className="peer"> <i className="fas fa-adjust stu"></i> <strong>Semester: </strong> {userSemester}</li>
                          </div> 
                          }
                    </ul>
                </div>
      </div>
        
        // <div class="card-body">

        // <h4 ><strong>UserName: </strong> {userName} {userLastName}  </h4>
        // <h4 ><strong>UserEmail: </strong> {userEmail}</h4>
        // <h4 ><strong>Profession: </strong> {user}</h4>
        // <h4 ><strong>Branch: </strong> {userBranch}</h4>
       
        // {user === 'Student' &&
        // <div>
        // <li className="peer"> <i className="fas fa-adjust stu"></i> <strong>Semester: </strong> {userSemester}</li>
        // </div> }
        // </div>
        // </div>
    
  )
}
export default Profile