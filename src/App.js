import axios from 'axios';
import React from 'react';
import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import { CourseContextProvider } from './Context/CourseContext';
import { UserContextProvider } from './Context/UserContext';
import Router from './Router';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <CourseContextProvider>
          <Router />
        </CourseContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
