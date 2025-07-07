import { useState } from 'react'
import './App.css'
import Mainscreen from './pages/Mainscreen'
import Header from './pages/Header'
import Sidebar from './pages/Sidebar'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Sidebar />
        <Header />
          <Routes>
            <Route path="/" element={<Mainscreen />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>

          </Routes>
      </Router>
    </>
  )
}

export default App
