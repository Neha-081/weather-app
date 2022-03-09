import React from 'react'
import { Route } from 'react-router'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import { Routes } from 'react-router'
import Login from '../Components/Login'
import ProductDetail from '../Pages/ProductDetail'

function RoutesConatiner() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products/:productid' element={<ProductDetail/>}/>
        </Routes>
    </div>
  )
}

export default RoutesConatiner