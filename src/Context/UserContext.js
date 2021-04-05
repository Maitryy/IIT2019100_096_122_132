import axios from 'axios';
import React, { createContext, useState,useLayoutEffect } from 'react'

const userContext = createContext();

function UserContextProvider(props) {

    const [user,setUser] = useState();
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userLastName, setUserLastName] = useState();
  

    const [userSemester, setUserSemester] = useState();
    const [userBranch, setUserBranch] = useState();
    const [userPassword, setUserPassword] = useState();


    async function getUser(){
        const type = await axios.get("http://localhost:5000/auth/TypeOfUser");
        // console.log(type.data);
        // console.log(type.data.proffesion)
        const x = type.data;
        setUser(x.proffesion);
        setUserName(x.firstName);
        setUserEmail(x.email);
        setUserLastName(x.lastName);
        setUserBranch(x.branch);
        setUserSemester(x.semester);
        setUserPassword(x.passwordHash);
        

    }

    useLayoutEffect(() => {
        getUser();
    }, []) 
    return (
        <userContext.Provider value = {{user,userName,userEmail,userLastName,userSemester,userBranch,userPassword,getUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default userContext;
export {UserContextProvider};
