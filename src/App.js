import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Product from './components/pages/Product/Product'
import ProductsAll from './components/pages/Products/ProductsAll'
import Category from './components/pages/Category/Category'
import CategoriesAll from './components/pages/Categories/CategoriesAll'
import Sale from './components/pages/Sale/Sale'
import Cart from './components/pages/Cart/Cart'
import NotFound from './components/pages/NotFound/NotFound'
import Layout from './components/pages/Home/Layout'

export default function App() {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<CategoriesAll />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/products" element={<ProductsAll />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
    </Router>
  );
}
