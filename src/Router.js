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
import Peers from './Components/peers';
import Grades from './Components/grades';
import Faq from './Components/Faq';
import AnswerFaq from './Components/AnswerFaq';
import CourseTeacher from './Components/CourseTeacher';
import userContext from './Context/UserContext';
import AddCourses from './Courses/AddCourses';
import CoreCoursePage from './Components/ExploreCourses/CoreCoursePage';
import NonTechnicalElectiveCoursePage from './Components/ExploreCourses/NonTechnicalElectiveCoursePage';
import TechnicalElectiveCoursePage from './Components/ExploreCourses/TechnicalElectiveCoursePage';
import Profile from './Components/profile';
import MyCourses from './Components/MyCourses';
import EditProfile from './Auth/editprofile';
import MyCourseStudent from './Components/MyCourseStudent';
import Announcement from './Components/Announcement';
import Schedule from './Components/schedule';
import Test from './Components/Test';
import ViewTest from './Components/ViewTest';
import Answer from './Components/Answer';
import ViewTestResponse from './Components/ViewTestResponse';
import StudentResponse from './Components/StudentResponse';
import ViewSchedule from './Components/ViewSchedule';

function Router() {
    const {loggedIn} = useContext(AuthContext);
    const {user} = useContext(userContext)

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path = '/'>
                    <LandingPage />
                </Route>

                <Route exact path = '/peers'>
                    <Peers />
                </Route>

                <Route exact path = '/course'>
                    <Course />
                </Route>        


              
                {/* <Route exact path = '/courseTeacher'>
                    <CourseTeacher />
                </Route> */}

                <Route exact path = '/HomeStudent'>
                    <HomeStudent />
                </Route>


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

                {loggedIn &&
                    <>
                        <Route exact path = '/profile'>
                            <Profile />
                        </Route>
                        
                        
                        {/* <Route path="/Schedule/:id"  >

                        <Schedule />
                        </Route> */}

                        <Route exact path = '/courseid'>
                            <Course />
                        </Route>
                        <Route exact path = '/EditProfile'>
                            <EditProfile />
                        </Route>
                        <Route exact path = '/MyCourses'>
                            <MyCourses />
                        </Route>
                        <Route exact path = '/CoreCourses'>
                            <CoreCoursePage />
                        </Route>
                        <Route exact path = '/NonTechnicalElectiveCourses'>
                            <NonTechnicalElectiveCoursePage />
                        </Route>
                        <Route exact path = '/TechnicalElectiveCourses'>
                            <TechnicalElectiveCoursePage />
                        </Route>
                        <Route exact path = '/mycoursestudent'>
                            <MyCourseStudent />
                        </Route>
                        <Route path="/peers/:id" render={(props) => <Peers  {...props} />} />
                        <Route path="/courseTeacher/:id" render={(props) => <CourseTeacher  {...props} />} />

                        <Route path="/viewtest/:id" render={(props) => <ViewTest {...props} />} />
                        <Route path="/Answer/:id/:id2" render={(props) => <Answer {...props}/>} />
                        
                        { user === "Student" &&
                            <>
                                <Route exact path = '/HomeStudent'>
                                    <HomeStudent />
                                </Route>
                                <Route path = '/Grades/:id' render={(props) => <Grades {...props} />} />
                                <Route path="/Faq/:id" render={(props) => <Faq {...props} />} />
                                <Route path="/ViewSchedule/:id" render={(props) => <ViewSchedule {...props} />} />
                            </>
                        }
                       


                        { user === "Teacher" &&
                            <>
                                <Route exact path = '/HomeTeacher'>
                                    <HomeTeacher />
                                </Route>
                                <Route exact path = '/AddCourse'><AddCourses /></Route>
                                <Route path="/AnswerFaq/:id" render={(props) => <AnswerFaq {...props} />} />
                                <Route path="/Announcement/:id" render={(props) => <Announcement {...props} />} />
                                <Route path="/Schedule/:id" render={(props) => <Schedule {...props} />} />
                                <Route path="/test/:id" render={(props) => <Test {...props} />} />
                                <Route path="/ReviewTest/:id" render={(props) => <ViewTestResponse {...props} />} />
                                <Route path="/StudentResponse/:id/:id2" render={(props) => <StudentResponse {...props}/>} />
                            </>
                        }

                    </>
                }
            </Switch>
            <Footer />
        </BrowserRouter>

)}

export default Router
