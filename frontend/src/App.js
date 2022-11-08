import './App.css';
import React, { createContext } from 'react';
import Layout from './components/Layout';
import UserProfile from './components/User-Profile/Userprofile';
import EditProfile from './components/User-Profile/EditProfile';
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
import PrescriptionReply from './components/Admin/AdminComponents/ManagePrescription/PrescriptionReply';
import ProductList from './components/product-list/product-list';
import MyOrders from './components/my-orders/my-orders';
import AdminLayout from './components/AdminLayout';
import UpdateStatus from './components/Admin/AdminComponents/UpdateStatus/update-status';
import ViewProduct from './components/Admin/AdminComponents/ManageProducts/View-Product';
import AddProduct from './components/Admin/AdminComponents/ManageProducts/Add-Product';
import UpdateProduct from './components/Admin/AdminComponents/ManageProducts/Update-Product';
import ProductInfo from './components/product-info/product-info';
import ManageQuery from './components/Admin/AdminComponents/ManageQuery/manage-query';




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
          <Route exact path='/Myprofile' element={<UserProfile />} />
          <Route exact path="/EditProfile" element={<EditProfile />} />
          <Route path='/MyOrders' element={<MyOrders />} />
          <Route path='/update-status/:id' element={<UpdateStatus />} />
          <Route exact path="/ProductList" element={<ViewProduct />} />
          <Route exact path="/Addproduct" element={<AddProduct />} />
          <Route exact path="/UpdateProduct/:_id" element={<UpdateProduct />} />
          <Route exact path="/product-info/:id" element={<ProductInfo />} />



          {/* All admin components to be placed inside Admin layout  */}

          <Route element={<AdminLayout />}>
            <Route exact path="/admin" element={<AdminApp />} />
            <Route exact path="/ManageUsers" element={<ManageUsers />} />
            <Route exact path="/managePrescription" element={<ManagePrescription />} />
            <Route  path="/prescriptionReply/:_id" element={<PrescriptionReply />} />
            <Route exact path="/ManageMessages" element={<ManageQuery />} />

          </Route>
          {/* End of admin layout */}




        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;