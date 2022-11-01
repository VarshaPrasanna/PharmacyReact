import './App.css';
import React, { createContext } from 'react';
import Layout from './components/Layout';
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import AdminApp from './components/Admin/AdminApp';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import ManageUsers from './components/Admin/AdminComponents/ManageUsers/ManageUsers';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route exact path="/admin" element={<AdminApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;