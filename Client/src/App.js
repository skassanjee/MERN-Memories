import React, { useState, useEffect,  } from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import Posts from './Components/Posts/Posts.js'
import Form from './Components/Form/Form.js'
import useStyles from './styles';

import Auth from './Pages/Auth/Auth.js'
import Home from './Pages/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';

const App = () => {
  

  return (
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </div>
  )
};

export default App;