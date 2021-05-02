import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import userContext from '../Context/UserContext';
import './EditProfile.css'

function EditProfile() {
    const [rep,setRep] = useState();
    const [oldPassword,setOld] = useState();
    const [newPassword1,setNew1] = useState("");
    const [newPassword2,setNew2] = useState("");
    const {userName,userEmail,user} = useContext(userContext);
    const history = useHistory();

    async function update(){
        const x = {oldPassword, newPassword1, newPassword2};
        const y = await axios.post("http://localhost:5000/auth/update",x);
        console.log(y.data);
        setRep(y.data);
        if(user === 'Teacher')
        {history.push("/HomeTeacher")}
        else if(user === 'Student')
        {history.push("/HomeStudent")}
    }

    return (
        <div>
            <div className="pass">
            <h1 >Edit Password</h1>
            
            </div>
            <form  className="create" onSubmit = {update}>
                <div className="prop">
                    <label >Old Password:</label>
                    <input 
                        type ='Password'
                        placeholder = 'Enter old password'
                        onChange = {(e) => setOld(e.target.value)}
                        value = {oldPassword}
                    />
                </div>
                <div className="prop">
                    <label >New Password:</label>
                    <input 
                        type ='Password'
                        placeholder = 'Enter new Password'
                        onChange = {(e) => setNew1(e.target.value)}
                        value = {newPassword1}
                    />
                </div>
                <div className="prop">
                    <label >Verify New Password:</label>
                    <input 
                        type ='Password'
                        placeholder = 'Enter new Password again'
                        onChange = {(e) => setNew2(e.target.value)}
                        value = {newPassword2}
                    />
                </div>
                {newPassword1!== newPassword2 && newPassword2 != "" &&
                    <>
                        New Password does not match
                    </>
                }
                {
                    newPassword1 === newPassword2 && newPassword1!== "" &&
                    <>
                        <button type = 'submit'>Update Password</button>
                    </>
                }
            </form>
        </div>
    )
}

export default EditProfile
