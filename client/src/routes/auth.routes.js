import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Account from '../pages/Account.page'
import Main from '../pages/Main.page'
import Product from '../pages/Product.page'


const authRoutes = (
    <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/account" element={<Account />} exact />
        <Route path="/basket" element={<Main />} exact />
        <Route path="/product/:id" element={<Product />} exact />
        <Route path="*" element={<Main />} exact />
    </Routes>
)     

export default authRoutes