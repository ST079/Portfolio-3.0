import React from 'react'
import "../App.css";
import { Route, Routes } from 'react-router-dom'
import PortfolioLayout from './layouts/PortfolioLayout'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import YouTube from './pages/Youtube';
import LandingPage from './pages/LandingPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App