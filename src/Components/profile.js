import React, { useContext , useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext'
import image3 from '../images/profile-01.png'
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
         <div className= " col-md-6 col-sm-12 col-12">
            <img src={image3} alt=""/>
          </div>
          
          <div className= " col-md-6 col-sm-12 col-12">
            <div className='card courses mask '>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <h1>Hello {userName} {userLastName}</h1>
              </div>
            </div>
        
        </div>
        </div>
        <div className="row">
        <div class="card-body">

        <h4 ><strong>UserName: </strong> {userName} {userLastName}  </h4>
        <h4 ><strong>UserEmail: </strong> {userEmail}</h4>
        <h4 ><strong>Profession: </strong> {user}</h4>
        <h4 ><strong>Branch: </strong> {userBranch}</h4>
       
        {user === 'Student' &&
        <div>
        <h4 ><strong>Semester: </strong> {userSemester}</h4>
        </div> }
        </div>
        </div>
      </div>
    
    
    
    
  )
}
export default Profile