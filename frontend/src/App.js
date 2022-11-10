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
import AdminAnalyitics from './components/Admin/AdminAnalyitics';
import AdminRoutes from './components/AdminProtected';

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
import DiscussionBoard from './components/discussion-board/DiscussionBoard';
import ChangePassword from './components/change-password/ChangePassword';
import UserAnalytics from './components/User-Profile/UserAnalytics';
import ProtectedRoutes from './components/ProtectedRoutes';



function App() {
  return (

    <div>

      <BrowserRouter>
        <Routes>

          {/* UNPROTECTED ROUTES */}
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/product-info/:id" element={<ProductInfo />} />
          <Route path='/product-list' element={<ProductList />} />

          {/* PROTECTED ROUTES */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              <Route path="/prescription" element={<Prescription />} />
              <Route exact path="discussion-board" element={<DiscussionBoard />} />
              <Route path='/MyOrders' element={<MyOrders />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route exact path='/payment' element={<Payment />} />
            <Route exact path='/Myprofile' element={<UserAnalytics />} />
            <Route exact path="/EditProfile" element={<EditProfile />} />
            <Route exact path="/changePassword" element={<ChangePassword />} />
          </Route>






          {/* ADMIN ROUTES */}
          <Route path="/" element={<AdminRoutes />}>
            <Route element={<AdminLayout />}>
              <Route exact path="/admin" element={<AdminAnalyitics />} />
              <Route exact path="/ManageUsers" element={<ManageUsers />} />

              <Route exact path="/ManageMessages" element={<ManageQuery />} />

            </Route>

            <Route path='/ManageOrders' element={<ManageOrders />} />
            <Route path='/update-status/:id' element={<UpdateStatus />} />
            <Route exact path="/ProductList" element={<ViewProduct />} />
            <Route exact path="/Addproduct" element={<AddProduct />} />
            <Route exact path="/UpdateProduct/:_id" element={<UpdateProduct />} />

            <Route exact path="/managePrescription" element={<ManagePrescription />} />
            <Route path="/prescriptionReply/:_id" element={<PrescriptionReply />} />
            {/* All admin components to be placed inside Admin layout  */}



          </Route>







        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;