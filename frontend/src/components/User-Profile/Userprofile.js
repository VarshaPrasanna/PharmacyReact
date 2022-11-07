import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './Userprofile.css'
import { useEffect, useState } from 'react';



const UserProfile = () => {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const fullname = localStorage.getItem('userName')
    const [userData, setuserData] = useState([]);
    const getUserprofile = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/users/" + userId
            );
            console.log(data.data);
            console.log(data.data.data)
            setuserData(data.data.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getUserprofile();
    }, []);
    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            navigate('/')
        }
    }, {})



    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <div className="d-flex sticky-top">

                <nav className=" d-flex sticky-top user-container1">

                    <nav className='navheight' id="sidebar" >

                        <div>
                            <h3>Your Profile</h3>
                        </div>

                        <ul className="list-unstyled components">

                            <li >
                                <a href="#homeSubmenu" aria-expanded="false" className="dropdown-toggle">Home</a>

                            </li>
                            <li>
                            <Link className="nav-link" to={{ pathname: "/MyOrders" }}>My Orders</Link>
                            </li>
                            <li>
                                <a href="#pageSubmenu" aria-expanded="false" className="dropdown-toggle">Shop Now</a>

                            </li>
                            <li>
                                <a href="#">Change Password</a>
                            </li>
                            <li>
                                <a href="#">Cart</a>
                            </li>
                        </ul>

                        <ul className="list-unstyled CTAs">
                            <li>

                                <a ><Link to={{ pathname: `/EditProfile` }} >Edit Profile </Link></a>
                            </li>
                            <li>
                                <a >Logout</a>
                            </li>
                        </ul>
                    </nav>


                </nav>



                <div className="row" >

                    <div className="arrange1" >
                        <div className="w3-row-padding w3-margin-bottom">

                            <div className="user-container">

                                <div >
                                    <div className="card bg-c-blue order-card">
                                        <div className="card-block">
                                            <h6 className="m-b-20">Total Orders</h6>
                                            <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>486</span></h2>
                                            <p className="m-b-0"><span className="f-right"></span></p>
                                        </div>
                                    </div>
                                </div>

                                <div >
                                    <div className="card bg-c-green order-card">
                                        <div className="card-block">
                                            <h6 className="m-b-20">Pending Orders </h6>
                                            <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span>486</span></h2>
                                            <p className="m-b-0"><span className="f-right"></span></p>
                                        </div>
                                    </div>
                                </div>

                                <div >
                                    <div className="card bg-c-pink order-card">
                                        <div className="card-block">
                                            <h6 className="m-b-20">Orders Received</h6>
                                            <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>486</span></h2>
                                            <p className="m-b-0"><span className="f-right"></span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <aside className="profile-card">
                    <header>
                        <h1>
                            {fullname}
                        </h1>
                        <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" width="100" height="100"
                            className="mx-auto mt-3 d-inline-block align-top rounded-circle" alt=""></img>
                        <p>
                            My profile
                        </p>
                    </header>
                    <div className="profile-bio">
                        <h2>User Name :{userData.username}</h2>
                        <h2>First Name :{userData.firstName}</h2>
                        <h2>Last Name :{userData.lastName}</h2>
                        <h2>Email:{userData.email}</h2>
                        <h2>Gender  :{userData.gender}</h2>

                    </div>



                </aside>




            </div>



        </>



    );

}

export default UserProfile;