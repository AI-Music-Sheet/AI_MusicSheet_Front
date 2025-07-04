import { useState } from 'react'
import './App.css'
import Mainscreen from './pages/Mainscreen'
import Header from './pages/Header'
import Sidebar from './pages/Sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <Header />
      <Mainscreen />
    </>
  )
}

export default App
