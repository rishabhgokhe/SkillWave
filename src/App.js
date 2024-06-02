import React from 'react';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Header from "./components/Layout/Header/Header.jsx"
import Courses from './components/Courses/Courses.jsx';
import Footer from './components/Layout/Footer/Footer.jsx'
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import ForgetPassword from './components/Auth/ForgetPassword.jsx';
import ResetPassword from './components/Auth/ResetPassword.jsx';

function App() {
  return (
    <Router>
      < Header ></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
