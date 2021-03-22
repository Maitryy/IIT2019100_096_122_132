import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../Context/AuthContext';
import userContext from '../Context/UserContext';
import "./RegisterStudent.css";

function StudentForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordVerify,setPasswordVerify] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [branch,setBranch] = useState("IT");

    const {getLoggedIn} = useContext(AuthContext);
    const {getUser} = useContext(userContext);
    const history = useHistory();

    async function registerTeacher(e) {
        e.preventDefault();

        try {
            const registerTeacherData = {
                email,
                password,
                passwordVerify,
                firstName,
                lastName,
                branch,
            };

            await axios.post("http://localhost:5000/auth/registerTeacher", registerTeacherData);
            await getLoggedIn();
            await getUser();
            history.push("/");

        }catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form className = "create"
                onSubmit = {registerTeacher}
            >
                <div className="prop">
                <label >Email: </label>
                <input 
                    type='email' 
                    placeholder = 'Email' 
                    onChange = {(e) => setEmail(e.target.value)}
                    value= {email}
                />
                </div>
                <div className="prop">
                    <label >Password: </label>
                <input 
                    type='password'    
                    placeholder = 'Password'
                    onChange = {(e) => setPassword(e.target.value)}
                    value= {password} 
                />
                </div>
                <div className="prop">
                <label >Verify Password: </label>
                <input 
                    type='password' 
                    placeholder = 'Verify your Password' 
                    onChange = {(e) => setPasswordVerify(e.target.value)}
                    value= {passwordVerify}
                />
                </div>
                <div className="prop">
                <label >First Name: </label>
                <input 
                    type ='String'
                    placeholder = 'First Name'
                    onChange = {(e) => setFirstName(e.target.value)}
                    value = {firstName}
                />
                </div>
                <div className="prop">
                <label >Last Name: </label>
                <input 
                    type ='String'
                    placeholder = 'Last Name'
                    onChange = {(e) => setLastName(e.target.value)}
                    value = {lastName}
                />
                </div>
                <div className="prop">
                <label >Branch: </label>
                <select 
                    type ='String'
                    placeholder = 'Branch'
                    onChange = {(e) => setBranch(e.target.value)}>
                    <option value="IT">IT</option>
                    <option value="IT-BI">IT-BI</option>
                    <option value="ECE">ECE</option>
                    </select>
                </div>

                <button type = 'submit'>Register</button>
            </form>
            
        </div>
    )
}

export default StudentForm
