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
import ContactUs from './components/ContactMe/ContactUs.jsx';
import Request from './components/ContactMe/Request.jsx';
import About from './components/About/About.jsx';
import Notification from './components/Notifications/Notification.jsx';
import Subscribe from './components/Payments/Subscribe.jsx';
import NotFound from './components/NotFound404.jsx';
import PaymentSuccess from './components/Payments/PaymentSuccess.jsx';
import PaymentFail from './components/Payments/PaymentFail.jsx';

function App() {
  return (
    <Router>
      < Header ></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/request' element={<Request />} />
        <Route path='/about' element={<About />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />

        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
