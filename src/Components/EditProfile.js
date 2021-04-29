import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import userContext from '../Context/UserContext';

function EditProfile() {
    const [rep,setRep] = useState();
    const [oldPassword,setOld] = useState();
    const [newPassword1,setNew1] = useState("");
    const [newPassword2,setNew2] = useState("");
    const {userName,userEmail} = useContext(userContext);

    async function update(){
        const x = {oldPassword, newPassword1, newPassword2};
        const y = await axios.post("http://localhost:5000/auth/update",x);
        console.log(y.data);
        setRep(y.data);
    }

    return (
        <div>
            <h1>Edit Password</h1>
            <h3>Name: {userName}</h3>
            <h3>Email: {userEmail}</h3>
            <form onSubmit = {update}>
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
