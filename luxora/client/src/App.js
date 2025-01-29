import React from 'react'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import NavBar  from './components/NavBar'
import Dashboard from './Pages/Dashboard'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Display from './Pages/Display'
import ProductsGrid from './components/ProductsGrid'
import { Route , Routes } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import { useState ,useEffect } from 'react'
import './index.css';
  

export default function App() {

  const [isLoggedin, setLogin]= useState(false);

  return (

    <div className='min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 flex flex-col'>
      <NavBar setLogin={setLogin} isLoggedin={isLoggedin} />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login setLogin={setLogin} isLoggedin={isLoggedin}/>}/>
        <Route path='/Signup' element={<Signup setLogin={setLogin} isLoggedin={isLoggedin}/>}/>
        <Route path="/Display" element={<Display/>}/>
        <Route path="/ProductsGrid" element={<ProductsGrid/>}/>
        <Route  element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}
