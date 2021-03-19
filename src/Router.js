import React, { useContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginStudent from './Auth/LoginStudent';
import RegisterStudent from './Auth/RegisterStudent';
import Footer from './Components/footer';
import Header from './Components/Header';
import LandingPage from './Components/landingpage';
import AuthContext from './Context/AuthContext';

function Router() {
    const {loggedIn} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Header />
            <Route exact path = '/'>
                    <LandingPage />
                </Route>
            <Switch>
                {!loggedIn && (
                    <>
                        <Route exact path = '/RegisterStudent'>
                            <RegisterStudent />
                        </Route>
                        <Route exact path = '/LoginStudent'>
                            <LoginStudent />
                        </Route>
                    </>
                )}
                {/* <Route exact path = '/'>
                    <LandingPage />
                </Route> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    
)}

export default Router
