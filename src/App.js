import './App.css';
import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './pages/Resume';
import ReactGA from "react-ga4";
const GithubRepository = React.lazy(()=>import("./pages/GithubRepos"))
const GA_ID="UA-78562922-2"
ReactGA.initialize(GA_ID)

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<About />} >
          <Route index element={<Experience />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={
            <React.Suspense fallback={<></>}>
              <GithubRepository/>
            </React.Suspense>
          } />
          <Route path="cv" element={<Resume />} />
        </Route>
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
