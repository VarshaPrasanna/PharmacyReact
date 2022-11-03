import './App.css';
import React, { createContext } from 'react';
import Layout from './components/Layout';
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import AdminApp from './components/Admin/AdminApp';
import ManageUsers from './components/Admin/AdminComponents/ManageUsers/ManageUsers';
import React from 'react';
import Header from './components/Header';
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
            <Route exact path="/" />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route path="/cart" element={<Cart />} />

          <Route exact path="/admin" element={<AdminApp />} />
          <Route exact path="/ManageUsers" element={<ManageUsers />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;