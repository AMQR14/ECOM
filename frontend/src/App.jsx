import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './admin/AdminDashboard'
import AdminUser from './admin/AdminUser'
import AdminProduct from './admin/AdminProduct'
import AdminOrder from './admin/AdminOrder'
import Dashboard from './user/Dashboard'
import Product from './user/Product'
import Cart from './user/Cart'

function AppRoute(){
  return (
    <Routes>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      <Route path='/admin/user' element={<AdminUser/>}/>
      <Route path='/admin/product' element={<AdminProduct/>}/>
      <Route path='/admin/order' element={<AdminOrder/>}/>

      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </>
  )
}

export default App
