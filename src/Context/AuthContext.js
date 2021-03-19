import axios from 'axios';
import React,{useState,useEffect, createContext} from 'react';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState(undefined);
    
    async function getLoggedIn(){
        const loggedInRes = await axios.get("http://localhost:5000/auth//LoggedInStudent");
        setloggedIn(loggedInRes.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, [])

    return <AuthContext.Provider value={{loggedIn,getLoggedIn}}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;
export {AuthContextProvider};
