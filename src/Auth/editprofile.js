import axios from 'axios';
import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RegisterStudent.css'
import userContext from '../Context/UserContext';



function EditProfile() {
    const {userName} = useContext(userContext);
const {user} = useContext(userContext);
const {userEmail} = useContext(userContext);
const {userSemester} = useContext(userContext);
const {userBranch} = useContext(userContext);
const {userLastName} = useContext(userContext);
const {userPassword} = useContext(userContext);


const [updatedpassword,setUpdatedPassword] = useState("");

  

    return (
        <div>
            <h1>Change your Profile</h1>
       
            <form className="create"
                onSubmit = {EditProfile}
            >
               
                <div className="props">
                <label htmlFor="">Change the Password</label>
                <input 
                    type='password'    
                    placeholder = 'Change the Password'
                    onChange = {(e) => setUpdatedPassword(e.target.value)}
                    value= {updatedpassword} 
                />
                </div>
                <button type = 'submit'>Change the details</button>
            </form>
        </div>
    )
}

export default EditProfile
