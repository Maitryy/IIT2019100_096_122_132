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


const [inputUsername, setInputUsername] = useState('');
const [inputEmail, setInputEmail] = useState('');
const [inputOldPassword, setInputOldPassword] = useState('');
const [inputNewPassword, setInputNewPassword] = useState('');
const [inputPasswordConfirmation, setInputPasswordConfirmation] = useState('');

// useEffect(() => {
//     const token = new Cookies().get('token');
//     UserInfo(token).then(result => {
//         if(result) {
//             setInputUsername(result.username)
//             setInputEmail(result.email)
//         }else window.location = "/"
//     })
// }, [])

// useEffect(() => {
//     if(inputNewPassword !== inputPasswordConfirmation) setError("Password and confirmation must match.")
//     else setError('');
// }, [inputNewPassword, inputPasswordConfirmation])

// const updateProfile = (e) => {
//     e.preventDefault();
//     const token = new Cookies().get('token');
//     Axios.post("http://localhost:5000/auth/update", {token, username: inputUsername, email: inputEmail})
//     .then(res => {
       
//     })
// }

// const updatePassword = e => {
//     e.preventDefault();
//     const token = new Cookies().get('token');
//     Axios.post("http://localhost:5000/auth/password/update, {token, oldpassword: inputOldPassword, password: inputNewPassword, email: inputEmail})
//     .then(res => {
        
//     })
    
// }

    return (
        // <div>
        //     <h1>Change your Profile details</h1>
       
        //     <form className="create"
        //         onSubmit = {EditProfile}
        //     >
               
        //         <div className="props">
        //         <label htmlFor="">Change the Password</label>
        //         <input 
        //             type='password'    
        //             placeholder = 'Change the Password'
        //             onChange = {(e) => setUpdatedPassword(e.target.value)}
        //             value= {updatedpassword} 
        //         />
        //         </div>
        //         <button type = 'submit'>Change the details</button>
        //     </form>
        // </div>
        <div className="container-fluid">
            <div className="container">
                <form className="margin-top-bottom box box-shadow text-dark" /*onSubmit={updateProfile}*/>
                    <div className="form-group">
                       <p className="form-label">Username:</p>
                       <input type = "text" className="form-control" value={inputUsername} onChange = {({target: {value}}) => setInputUsername(value)} />
                    </div>
                    <div className="form-group">
                       <p className="form-label">Email:</p>
                       <input type = "email" className="form-control" value={inputEmail} onChange = {({target: {value}}) => setInputEmail(value)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control btn btn-dark" />
                    </div>
                </form>
                <form className="margin-top-bottom box box-shadow text-dark" /*onSubmit = {updatePassword}*/>
                    <div className="form-group">
                        <p className = "form-label">Old Password:</p>
                        <input type = "password" className="form-control" value={inputOldPassword} onChange = {({target: {value}}) => setInputOldPassword(value)} />
                    </div>
                    <div className="form-group">
                        <p className = "form-label">New Password:</p>
                        <input type = "password" className="form-control" value={inputNewPassword} onChange = {({target: {value}}) => setInputNewPassword(value)} />
                    </div>
                    <div className="form-group">
                        <p className="form-label">Password Confirmation:</p>
                        <input type ="password" className="form-control" value = {inputPasswordConfirmation} onChange = {({target: {value}}) => setInputPasswordConfirmation(value)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control btn btn-dark" />
                    </div>
                </form>
            </div>
        </div>
        
    )
}



export default EditProfile
