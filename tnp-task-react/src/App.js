import './App.css';

import { useState, useEffect } from "react";
import axios from "axios";
import Posts from './pages/postpage';
import Home from './pages/homepage';
import Navbar from './components/Navbar/navbarIndex';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
function App() {
  return (
    // <Router>
    // <Navbar />
    // {/* <Routes>
    //     <Route exact path='/' element={<Home />} />
    //     <Route path='/post' element={<Posts/>} />
    // </Routes> */}
    // </Router>
<div className='App'>
<Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/post' element={<Posts/>} />
    </Routes>
    </Router>
</div>
);

}

export default App;
