import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from '../pages/Main.page'
import Signup from '../pages/Signup.page'
import Login from '../pages/Login.page'
import Product from '../pages/Product.page'
import Item from '../pages/Item.page'
import Category from '../pages/Category.page'
import Create from '../pages/Create.page'


const notAuthRoutes = (
    <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/signup" element={<Signup />} exact />       
        <Route path="/login" element={<Login />} exact />
        <Route path="/basket" element={<Main />} exact />
        <Route path="/category/:id" element={<Category />} exact />
        <Route path="/product/:id" element={<Product />} exact />
        <Route path="/item/:id" element={<Item />} exact />
        <Route path="/create/:id" element={<Create />} exact />
        <Route path="*" element={<Main />} exact  />
    </Routes>
)

export default notAuthRoutes
