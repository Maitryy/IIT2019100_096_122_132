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
    const [userCourse, setUserCourse] = useState([]);

    

    async function getUser(){
        const type = await axios.get("http://localhost:5000/auth/TypeOfUser");
        const x = type.data;
        setUser(x.proffesion);
        setUserName(x.firstName);
        setUserEmail(x.email);
        setUserLastName(x.lastName);
        setUserBranch(x.branch);
        setUserSemester(x.semester);
        setUserPassword(x.passwordHash);
        setUserCourse(x.course);

    }

    useLayoutEffect(() => {
        getUser();
    }, []) 
    return (
        <userContext.Provider value = {{user,userName,userEmail,userLastName,userSemester,userBranch,userPassword,userCourse,getUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default userContext;
export {UserContextProvider};
