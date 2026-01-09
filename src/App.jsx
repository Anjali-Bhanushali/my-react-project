import { useState} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Skill from './components/Skill'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Home from './pages/Home'




function App() {
 

  return (
    <>
     
      <Header />
      <Body />
    <Routes>
     <Route path='/home' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/skills'  element={<Skills />} />
    </Routes>
      {/* <Skill /> */}
      <Footer />
    </>
  )
}

export default App
