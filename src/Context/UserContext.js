import axios from 'axios';
import React, { createContext, useState } from 'react'

const userContext = createContext();

function UserContextProvider(props) {

    const [user,setUser] = useState();

    async function getUser(){
        const type = await axios.get("http://localhost:5000/auth/TypeOfUser");
        // console.log(type.data);
        // console.log(type.data.proffesion)
        const x = type.data;
        setUser(x.proffesion);
    }
    return (
        <userContext.Provider value = {{user,getUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default userContext;
export {UserContextProvider};
