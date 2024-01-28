import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<About />} />
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
