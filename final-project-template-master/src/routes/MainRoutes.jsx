import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                
            </Routes>
        </div>
    )
}

export default MainRoutes
