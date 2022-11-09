import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
import { useEffect, useState } from "react";
const firstName = localStorage.getItem('userName')


function Header() {
    const [isLogged, setisLogged] = useState(false);

    useEffect(() => {
        checkStorage();
        return () => { };
    }, [isLogged]);
    function checkStorage() {
        if (localStorage.getItem("userId")) {
            setisLogged(true);
        } else {
            setisLogged(false);
        }
    }
    const logout = () => {
        localStorage.removeItem("userId");
        localStorage.clear();
        setisLogged(false);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light w-100 navigation" id="navbar">
            <div className="container">

                <Link className="navbar-brand font-weight-bold" to={{ pathname: "/" }}>GetMeds</Link>


                <img src="assets/images/pharmacy.png" width="50" height="50" alt=""></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
                    aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="main-navbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={{ pathname: "/" }}>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={{ pathname: "/discussion-board" }}>Dicussion Board</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={{ pathname: "/prescription" }}>Prescription</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={{ pathname: "/product-list" }}>All Products</Link>
                        </li>

                    </ul>
                </div>
                {/* SIGNUP - LOGIN-LOGOUT  */}
                {!isLogged ? (
                    <ul className="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
                        <Link className="button-1" to={{ pathname: "/signup" }}>Signup</Link>
                        <Link className="button-1" to={{ pathname: "/login" }}>Login</Link>
                    </ul>
                ) : (
                    <div>
                        <Link size="10px" type="button" to={{ pathname: "/Myprofile" }} className="button-1">Welcome,{firstName}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-person" viewBox="0 0 16 16">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg></Link>
                        <Link className="button-1" onClick={logout}>Logout</Link>
                    </div>
                )}
                <ul className="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
                    <li className="dropdown cart-nav dropdown-slide list-inline-item">
                        <Link to={{ pathname: "/cart" }} className="cart-icon">
                            <i className="tf-ion-android-cart"></i>
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}
export default Header;