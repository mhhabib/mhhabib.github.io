import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './pages/Resume';
import GithubRepository from './pages/GithubRepos';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<About />} >
          <Route index element={<Experience />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<GithubRepository />} />
          <Route path="cv" element={<Resume />} />
        </Route>
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
