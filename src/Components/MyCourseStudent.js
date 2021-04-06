import React , { useContext, useState,useLayoutEffect } from 'react'
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext'
import { Link } from 'react-router-dom';

function MyCourseStudent() {

    const {userName} = useContext(userContext);
    const {userCourse} = useContext(userContext);

    return (
        <div>
            
        </div>
    )
}

export default MyCourseStudent
