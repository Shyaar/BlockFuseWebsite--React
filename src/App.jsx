import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Teams from './pages/Teams'
import Nav from './components/Nav'
import { ThemeContext } from './Context/ThemeProvider'
import Footer from './components/Footer'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(()=>{
  
  },[theme])

  return (
    <>
    
        <Nav />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/teams' element={<Teams />} />

        </Routes>

        <Footer />
    </>
  )
}

export default App
