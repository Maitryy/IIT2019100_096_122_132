import React, { useContext, useState } from 'react';
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
    

      return (
        <nav className = 'navbar'>
          {!loggedIn && (
            <>
              <div className='header-items'>
                <Link to = "/Register">Sign Up</Link>
              </div>
              <div className='header-items'>
                <Link to = "/Login">Log In </Link>
              </div>
            </>
          )}
          {loggedIn && user === "Student" && (
            <>
                  <div className = 'header-dropbox'>
                  <button onClick = {handleDropdown}><i class="fas fa-user-circle"></i></button>
                  {dropdown && 
                  <>
                  <ul onClick={handleDropdown} className = {dropdown? 'dropdown-active':'dropdown-inactive'}>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
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
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Edit Profile
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <button  onClick={() => setDropdown(false)} ><LogoutStudent /></button>
                </li>
            </ul>


                  </>
                  }
              </div>

              <div className = 'header-search'>
                  <input type='text' placeholder='Search Course'/>              
              </div>

              <div className='header-items'>
                <Link to = '/MyCourses'>
                  Courses
                </Link>
              </div>    

              <div className='header-items'>
                <Link to = '/HomeStudent'>
                  Home
                </Link>
              </div>
            </>
          )}
          {loggedIn && user === "Teacher" && (
            <>
              <div className = 'header-dropbox'>
                  <button onClick = {handleDropdown}><i class="fas fa-user-circle"></i></button>
                  {dropdown && 
                  <>
                  <ul onClick={handleDropdown} className = {dropdown? 'dropdown-active':'dropdown-inactive'}>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
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
                    <Link to = '/' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Edit Profile
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <button  onClick={() => setDropdown(false)} ><LogoutStudent /></button>
                </li>
            </ul>


                  </>
                  }
              </div>

              <div className = 'header-search'>
                  <input type='text' placeholder='Search Course'/>              
              </div>

              <div className='header-items'>
                <Link to = '/MyCourses'>
                  My Courses
                </Link>
              </div>    
              <div className='header-items'>
                <Link to = '/HomeTeacher'>
                  Home
                </Link>
              </div>
            </>
          )}    
        </nav>
    )
}

export default Header;


