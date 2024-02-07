import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';
import Experience from './pages/Experience';
import Education from './pages/Education';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<About />} >
          <Route index element={<Experience />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Route>
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
