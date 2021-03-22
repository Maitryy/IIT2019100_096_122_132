import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutStudent from '../Auth/LogoutStudent';
import AuthContext  from '../Context/AuthContext';
import userContext from '../Context/UserContext';
import Dropdown  from './Dropdown';
import './Header.css';

function Header() {
    const {loggedIn} = useContext(AuthContext);
    const {user} = useContext(userContext);
    

    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

      const [course, setCourse] = useState(false);
      const onmouseEnter = () => {
        if (window.innerWidth < 960) {
          setCourse(false);
        } else {
          setCourse(true);
        }
      };
    
      const onmouseLeave = () => {
        if (window.innerWidth < 960) {
          setCourse(false);
        } else {
          setCourse(false);
        }
      };

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
          {loggedIn && !user && (
            <>
              <div className='header-items'>
                <Link to = '/HomeStudent'>
                  Home
                </Link>
              </div>

              {/* <div className = 'header-coursesoffered' onMouseEnter={onmouseEnter}
              onMouseLeave={onmouseLeave}>
                  Courses Offered
                  {course && <CourseOffered />}
              </div>               */}

              <div className = 'header-search'>
                  <input type='text' placeholder='Search Course'/>              
              </div>

              <div className='header-items'>
                <Link to = '/MyCourses'>
                  Courses
                </Link>
              </div>    

              <div className = 'header-dropbox' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
                  <i class="fas fa-user-circle"></i>
                  {dropdown && <Dropdown />}
              </div>
              <div className = 'dropdown-item'>
                    <LogoutStudent />
              </div>
            </>
          )}
          {loggedIn && user && (
            <>
              <div className='header-items'>
                <Link to = '/HomeTeacher'>
                  Home
                </Link>
              </div>

              {/* <div className = 'header-coursesoffered' onMouseEnter={onmouseEnter}
              onMouseLeave={onmouseLeave}>
                  Courses Offered
                  {course && <CourseOffered />}
              </div>               */}

              <div className = 'header-search'>
                  <input type='text' placeholder='Search Course'/>              
              </div>

              <div className='header-items'>
                <Link to = '/MyCourses'>
                  My Courses
                </Link>
              </div>    

              <div className = 'header-dropbox' onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
                  <i class="fas fa-user-circle"></i>
                  {dropdown && <Dropdown />}
              </div>
              <div className = 'dropdown-item'>
                    <LogoutStudent />
              </div>
            </>
          )}    
        </nav>
    )
}

export default Header;


