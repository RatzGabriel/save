import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Products from './components/products';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';
import Users from './components/admin/users';
import Posts from './components/admin/posts';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products test="test1" />} />
          <Route path="/posts/:year/:month" element={<Posts />} />
          <Route path="admin" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />} />
          </Route>
          <Route path="/messages" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
