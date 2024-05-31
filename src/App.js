import React from 'react';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Header from "./components/Layout/Header/Header.jsx"
import Courses from './components/Courses/Courses.jsx';

function App() {
  return (
    <Router>
      < Header ></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
