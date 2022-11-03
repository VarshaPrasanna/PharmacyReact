import './App.css';
import React, { createContext } from 'react';
import Layout from './components/Layout';
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import AdminApp from './components/Admin/AdminApp';
import ManageUsers from './components/Admin/AdminComponents/ManageUsers/ManageUsers';
import Payment from './components/Payment/Payment';
import Home from './components/Home/Home';


import Cart from './components/Cart/Cart';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Navbar from './components/Admin/AdminComponents/Navbar';

function App() {
  return (
    <div>  {/* className="App" */}

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route exact path="/cart" element={<Cart />} />

          <Route exact path="/admin" element={<AdminApp />} />
          <Route exact path="/ManageUsers" element={<ManageUsers />} />
          <Route exact path='/payment' element={<Payment />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;