import axios from 'axios';
import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RegisterStudent.css'
import userContext from '../Context/UserContext';

function LoginStudent() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const {getUser} = useContext(userContext);
    const history = useHistory();

    async function loginStudent(e) {
        e.preventDefault();

        try {
            const loginStudentData = {
                email,
                password,
            };

            await axios.post("http://localhost:5000/auth/loginStudent", loginStudentData);
            await getLoggedIn();
            await getUser();
            
            history.push("/");

        }catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Login to an account</h1>
            <form className="create"
                onSubmit = {loginStudent}
            >
                <div className="props">
                <label >Email: </label>
                <input 
                    type='email' 
                    placeholder = 'Email' 
                    onChange = {(e) => setEmail(e.target.value)}
                    value= {email}
                />
                </div>
                <div className="props">
                <label htmlFor="">Password</label>
                <input 
                    type='password'    
                    placeholder = 'Password'
                    onChange = {(e) => setPassword(e.target.value)}
                    value= {password} 
                />
                </div>
                <button type = 'submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginStudent
