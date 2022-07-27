import React from 'react';
import { BrowserRouter as Router,
        Routes,
        Route
       } from 'react-router-dom';
import { Thanks } from '../components';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Works from '../pages/Works';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={ <About /> }/>
        <Route path="/blog" element={ <Blog /> }/>
        <Route path="/" element={ <Home /> }/>
        <Route path="/project" element={ <Projects /> }/>
        <Route path="/resume" element={ <Resume /> }/>
        <Route path="/thanks" element={ <Thanks /> }/>
        <Route path="/works" element={ <Works /> }/>
      </Routes>
    </Router>
  );
}

export default Routers;
