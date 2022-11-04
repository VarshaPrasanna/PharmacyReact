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
import ManageOrders from './components/Admin/AdminComponents/ManageOrders/ManageOrders';
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
import Prescription from './components/Prescription/Prescription';
import ManagePrescription from './components/Admin/AdminComponents/ManagePrescription/ManagePrescription';
import ProductList from './components/product-list/product-list';
import MyOrders from './components/my-orders/my-orders';
import AdminLayout from './components/AdminLayout';

function App() {
  return (
    <div>  {/* className="App" */}

      <BrowserRouter>
        <Routes>


          <Route element={<Layout />}>
            {/* ALL components which needs header should be placed inside layout tag */}
            <Route exact path="/" element={<Home />} />
            <Route path="/prescription" element={<Prescription />} />

          </Route>

          {/* ALL components which "do not" header  */}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path='/payment' element={<Payment />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/ManageOrders' element={<ManageOrders />} />
          <Route path='/MyOrders' element={<MyOrders />} />




          {/* All admin components to be placed inside Admin layout  */}

          <Route element={<AdminLayout />}>
            <Route exact path="/admin" element={<AdminApp />} />
            <Route exact path="/ManageUsers" element={<ManageUsers />} />

            <Route exact path="/managePrescription" element={<ManagePrescription />} />
          </Route>
          {/* End of admin layout */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;