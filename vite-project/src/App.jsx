import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import Login from './Pages/Login'

function App() {

  return (
    <>
    <Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/signup' element={<Signup />} />
<Route path='/login' element={<Login />} />
<Route path='/cart' element={<Cart />} />

</Routes>
    </>
  )
}

export default App
