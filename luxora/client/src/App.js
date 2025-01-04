import React from 'react'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import NavBar  from './components/NavBar'
import Dashboard from './Pages/Dashboard'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { Route , Routes } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import { useState ,useEffect } from 'react'
import './index.css';  

export default function App() {

  const [isLoggedin, setLogin]= useState(false);

  return (

    <div className='h-screen w-full px-20 py-6'>
      <NavBar setLogin={setLogin} isLoggedin={isLoggedin} />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login setLogin={setLogin} isLoggedin={isLoggedin}/>}/>
        <Route path='/Signup' element={<Signup setLogin={setLogin} isLoggedin={isLoggedin}/>}/> 
        <Route  element={<PageNotFound/>}/>
      </Routes>

      
    </div>
  )
}
