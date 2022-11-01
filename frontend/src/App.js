import './App.css';
import React, { createContext } from 'react';

import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
function App() {


  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;