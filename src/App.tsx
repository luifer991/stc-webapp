"use client";

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './UI/NavBar.jsx';
import './App.css';
import Home from './Components/pages/Home.tsx';
import About from './Components/pages/About.jsx';
import Blog from './Components/pages/Blog.jsx';
import Services from './Components/pages/Services.jsx';

function App() {
  // local storage function to save the chages on client
  const currentTheme = localStorage.getItem('currentTheme');
  // State of dark theme
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(()=>{
    localStorage.setItem('currentTheme',theme);
  },[theme])

  return (
    <>
    {/* data theme to select variables in css stylesheet to dark mode */}
    <div className='container' data-theme={theme}>
    {/* Nav BAr to select the dark mode */}
      <NavBar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} /> 
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
      
    </>
  )
}

export default App

