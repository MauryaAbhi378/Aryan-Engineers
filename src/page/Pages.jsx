import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Product from "./ProductList"

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default Pages
