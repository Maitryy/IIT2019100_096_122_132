import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutStudent from '../Auth/LogoutStudent';

import AuthContext  from '../Context/AuthContext';
import userContext from '../Context/UserContext';
import './Header.css';

function Header() {
    const {loggedIn} = useContext(AuthContext);
    const {user} = useContext(userContext);
    const [data,setData] = useState([]);
    const [searchTerm,setSearchTerm] = useState([]);
  
    const [dropdown, setDropdown] = useState(false);
    const [Dropdown, setdropdown] = useState(false);
    useEffect(async() => {
      const response = await fetch("http://localhost:5000/course/GetAllCourses");
      const da = await response.json();
      setData(da);
  }, []);
  useEffect( () => {
      console.log(data);
  }, [data]);
  console.log("data  ", data);


    const handleDropdown = () => setDropdown(!dropdown)
    const handledropdown = () => setdropdown(!Dropdown)
    
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
                  <ul onClick={handleDropdown} className = {dropdown? 'dropdown-active drop':'dropdown-inactive'}>
                <li className = 'dropdown-item'>
                    <Link to = '/profile' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        User Profile
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/grades' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Grades
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <a href = 'https://docs.google.com/document/d/1tw-n6FJAtuYNnpbxnlIqWSi7c9S2wxR6c33bKrGBfCo/edit' className = 'dropdown-link' onClick={() => setDropdown(false)}>
                        Calender
                    </a>
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
              <button className="nav-icon stu" onClick = {handledropdown}>  <input type='text' placeholder='Search Course' onChange={event => {setSearchTerm(event.target.value) }}/> </button> 
                
                  {Dropdown && 
                  <>
                   <ul onClick={handledropdown} className = {Dropdown? 'dropdown-active drop':'dropdown-inactive'}>
                  {
                    data.filter((val)=>
                    {
                      if(searchTerm == "")
                      {
                        return val
                      }
                      else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                      }
                    })
                    .map((val,key) =>{
                      return(
                        <div className="searching" key={key}>
                          <li className = 'dropdown-item'  ><button ><Link  to= {`/courseTeacher/${val._id}`}  >  {val.name}</Link></button> </li>
                          </div>
                      )

                    })
                 
                  
                  }
                  </ul>
                  </>
}
                   
                  
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
                
              <button className="nav-icon stu" onClick = {handledropdown}>  <input type='text' placeholder='Search Course' onChange={event => {setSearchTerm(event.target.value) }}/> </button> 
                
                {Dropdown && 
                <>
                 <ul onClick={handledropdown} className = {Dropdown? 'dropdown-active drop':'dropdown-inactive'}>
                {
                  data.filter((val)=>
                  {
                    if(searchTerm == "")
                    {
                      return val
                    }
                    else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val
                    }
                  })
                  .map((val,key) =>{
                    return(
                      <div className="searching" key={key}>
                        <li className = 'dropdown-item'  ><button ><Link  to= {`/courseTeacher/${val._id}`}  >  {val.name}</Link></button> </li>
                        </div>
                    )

                  })
               
                
                }
                </ul>
                </>
}
                  
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


