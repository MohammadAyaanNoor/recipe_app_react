import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from '../components/Create'
import Recipes from '../components/Recipes'
import Contact from '../components/Contact'
import About from '../components/About'
import Layout from '../components/Layout'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
  )
}

export default MainRoutes