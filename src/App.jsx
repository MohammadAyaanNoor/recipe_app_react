import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'
import { useDispatch } from 'react-redux'
import { asyncload } from './store/actions/recipeAction'


const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncload())
  },[])
  return (
    <div>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App