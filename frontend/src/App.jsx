import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './admin/AdminDashboard'
import AdminUser from './admin/AdminUser'
import AdminProduct from './admin/AdminProduct'
import AdminCategory from './admin/AdminCategory'
import AdminOrder from './admin/AdminOrder'
import Dashboard from './user/Dashboard'
import Product from './user/Product'
import Cart from './user/Cart'

import { Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

function PublicRoute(){
  const {loading} = useAuth()
  const token = localStorage.getItem('token')

  if (loading) return <p>Loading...</p>
  if (token) return <Navigate to={'/dashboard'}/>

  return <Outlet/>
}

function UserRoute(){
  const {loading, user} = useAuth()
  const token = localStorage.getItem('token')

  if (loading) return <p>Loading...</p>
  if (!token) return <Navigate to={'/home'}/>
  if (user.data?.role == 'admin') return <Navigate to={'/admin/dashboard'}/>

  return <Outlet/>
}

function AdminRoute(){
  const {loading, user} = useAuth()
  const token = localStorage.getItem('token')

  if (loading) return <p>Loading...</p>
  if (!token) return <Navigate to={'/home'}/>
  if (user.data?.role != 'admin') return <Navigate to={'/dashboard'}/>

  return <Outlet/>
}

function AppRoute(){
  return (
    <Routes>
      <Route element={<PublicRoute/>}>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>

      <Route element={<AdminRoute/>}>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/user' element={<AdminUser/>}/>
        <Route path='/admin/category' element={<AdminCategory/>}/>
        <Route path='/admin/product' element={<AdminProduct/>}/>
        <Route path='/admin/order' element={<AdminOrder/>}/>
      </Route>

      <Route element={<UserRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/product/:slug' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
      
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
