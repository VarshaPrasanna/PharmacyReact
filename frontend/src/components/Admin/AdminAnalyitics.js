import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import AdminApp from "./AdminApp";


var userLength, productLength, orderLength, preLength;
const AdminAnalyitics = () => {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");
    const [product, setProduct] = useState([]);
    const getUserData = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/users/"
            );
            userLength = data.data.users.length
            setUser(data.data.users);
            console.log(userLength)
        } catch (e) {
            console.log(e);
        }
    };
    const getProductData = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/products/"
            );
            console.log(data.data);
            console.log(data.data.products)
            setProduct(data.data.products);
            productLength = data.data.products.length;
            console.log(productLength)
        } catch (e) {
            console.log(e);
        }
    };

    const [order, setOrder] = useState([]);

    const getOrders = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/orders/"
            );
            console.log(data.data);

            setOrder(data.data.orders);
            orderLength = data.data.orders.length;
        } catch (e) {
            console.log(e);
        }
    };
    const [prescription, setprescription] = useState([]);
    const getAllPrescriptions = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/Prescription/"
            );
            console.log(data.data);
            console.log(data.data.pre)
            setprescription(data.data.pre);
            preLength = data.data.pre.length
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        getUserData();
        getProductData();
        getOrders();
        getAllPrescriptions()
    }, []);

    return (


        <div>
            <AdminApp userLength={userLength} productLength={productLength} orderLength={orderLength} preLength={preLength} />

        </div>




    );
};

export default AdminAnalyitics;
