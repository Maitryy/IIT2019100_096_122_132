import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutStudent from '../Auth/LogoutStudent';

import AuthContext  from '../Context/AuthContext';
import userContext from '../Context/UserContext';
import './Header.css';

function Header() {
    const {loggedIn} = useContext(AuthContext);
    const {user} = useContext(userContext);
    

    const [dropdown, setDropdown] = useState(false);
    const handleDropdown = () => setDropdown(!dropdown)
    
    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetCoreCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data);
    }, [data]);

  
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetTechnicalElectiveCourses");
        const da = await response.json();
        setData1(da);
    }, []);
    useEffect( () => {
        console.log(data1);
    }, [data1]);

    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetNonTechnicalElectiveCourses");
        const da = await response.json();
        setData2(da);
    }, []);
    useEffect( () => {
        console.log(data2);
    }, [data2]);

      return (
        <nav className = 'navbar header  navbar-collapse sticky-top'>
        <div className="container">
          {!loggedIn && (
            <>
              <div className='header-items'>
                <Link className="head-item" to = "/Register">Sign Up</Link>
              </div>
              <div className='header-items'>
                <Link className="head-item" to = "/Login">Log In </Link>
              </div>
            </>
          )}
          {loggedIn && user === "Student" && (
            <>
                  <div className = 'header-dropbox'>
                  <button className="nav-icon stu" onClick = {handleDropdown}><i class="fas fa-user-circle"></i></button>
                  {dropdown && 
                  <>
                  <ul onClick={handleDropdown} className = {dropdown? 'dropdown-active':'dropdown-inactive'}>
                <li className = 'dropdown-item'>
                    <Link to = '/profile' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        User Profile
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Grades
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Calender
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/EditProfile' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Edit Profile
                    </Link>
                </li>
                <li className = 'dropdown-item ' onClick={() => setDropdown(false)} >
                 <LogoutStudent/>
                </li>
            </ul>


                  </>
                  }
              </div>

              <div className = 'header-search'>
                  <input type='text' placeholder='Search Course'/>  
                   
                  
              </div>

              <div className='header-items'>
                <Link className="head-item" to = '/mycoursestudent'>
                  Courses
                </Link>
              </div>    

              <div className='header-items'>
                <Link className="head-item" to = '/HomeStudent'>
                  Home
                </Link>
              </div>
            </>
          )}
          {loggedIn && user === "Teacher" && (
            <>
              <div className = 'header-dropbox'>
                  <button className="nav-icon stu" onClick = {handleDropdown}><i class="fas fa-user-circle"></i></button>
                  {dropdown && 
                  <>
                  <div className="drop">
                  <ul onClick={handleDropdown} className = {dropdown? 'dropdown-active drop':'dropdown-inactive'} >
                
                <li className = 'dropdown-item'>
                    <Link to = '/profile' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        User Profile
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Grades
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Calender
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/EditProfile' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Edit Profile
                    </Link>
                </li>
                <li className = 'dropdown-item logout' onClick={() => setDropdown(false)} ><LogoutStudent />
                </li>
                
            </ul>
            </div>


                  </>
                  }
              </div>

              <div className = 'header-search'>
                
              <input type='text' placeholder='Search Course'/>  
                   
                  
              </div>

              <div className='header-items'>
                <Link className="head-item" to = '/MyCourses'>
                  My Courses
                </Link>
              </div>    
              <div className='header-items'>
                <Link className="head-item" to = '/HomeTeacher'>
                  Home
                </Link>
              </div>
            </>
          )} 
          </div>   
        </nav>
    )
}

export default Header;


