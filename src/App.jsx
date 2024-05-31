import React from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Recipes from './components/Recipes'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App