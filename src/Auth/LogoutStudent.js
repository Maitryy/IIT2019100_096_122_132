import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import AuthContext from '../Context/AuthContext';

function LogoutStudent() {
    const {getLoggedIn} = useContext(AuthContext);

    const history = useHistory();

    async function logout(){
        await axios.get("http://localhost:5000/auth/logoutStudent"); 
        await getLoggedIn(); 
        history.push("/");
    }
    return <button onClick = {logout}>
        Log Out
    </button>;
}

export default LogoutStudent
