import React, { useContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginStudent from './Auth/LoginStudent';
import Register from './Auth/Register';
import Footer from './Components/footer';
import Header from './Components/Header';
import LandingPage from './Components/landingpage';
import AuthContext from './Context/AuthContext';
import Course from './Components/Course';
import HomeTeacher from './Components/HomeTeacher';
import HomeStudent from './Components/HomeStudent';
import CourseTeacher from './Components/CourseTeacher';
import userContext from './Context/UserContext';
import AddCourses from './Courses/AddCourses';
import CoreCoursePage from './Components/ExploreCourses/CoreCoursePage';

function Router() {
    const {loggedIn} = useContext(AuthContext);
    const {user} = useContext(userContext)

    return (
        <BrowserRouter>
            <Header />
            <Route exact path = '/'>
                    <LandingPage />
                </Route>
            <Switch>
                {!loggedIn && (
                    <>
                        <Route exact path = '/Register'>
                            <Register />
                        </Route>
                        <Route exact path = '/Login'>
                            <LoginStudent />
                        </Route>
                    </>
                )}

                {/* <Route exact path = '/'>
                    <LandingPage />
                </Route> */}
                <Route exact path = '/course'>
                    <Course />
                </Route>
                <Route exact path = '/courseTeacher'>
                    <CourseTeacher />
                </Route>

                { user === "Student" &&
                    <>
                        <Route exact path = '/HomeStudent'>
                            <HomeStudent />
                        </Route>
                    </>
                }
                {/* <Route exact path = '/HomeStudent'>
                    <HomeStudent />
                </Route> */}
                { user === "Teacher" &&
                    <>
                        <Route exact path = '/HomeTeacher'>
                            <HomeTeacher />
                        </Route>
                        <Route exact path = '/AddCourse'>
                            <AddCourses />
                        </Route>
                    </>
                }

                {loggedIn &&
                <>
                
                <Route exact path = '/courseid'>
                    <Course />
                </Route>
                <Route exact path = '/CoreCourses'>
                    <CoreCoursePage />    
                </Route>

                
                </>

                } 
            </Switch>
            <Footer />
        </BrowserRouter>
    
)}

export default Router
