import {React, useState } from 'react'
// import './App.css'
import Tech from './pages/Tech';
import Home from './pages/Home';
import Fashion from './pages/Fashion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/tech' element={<Tech/>}></Route>
       <Route path='/fashion' element={<Fashion/>}></Route>
    </Routes>
   </Router>

   </>
  )
}

export default App
