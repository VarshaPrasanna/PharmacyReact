import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserProfile from "./Userprofile";



var pendingLength, cartLength, orderLength;

const UserAnalytics = () => {
    const userId = localStorage.getItem('userId')
    const [order, setOrder] = useState([]);
    const getOrders = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/orders/user/" + userId
            );
            setOrder(data.data.orders);
            console.log(data.data.orders.length);
            orderLength = data.data.orders.length
            var pending = data.data.orders.filter((p) => p.status !== 'delivered');
            pendingLength = pending.length
            console.log(pendingLength)
        } catch (e) {
            console.log(e);
        }
    };
    const [cart, setCart] = useState([]);
    var q = []
    var qu = []
    const getCart = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/carts/" + userId
            );
            console.log(data.data.cart.products);
            // console.log(data.data.cart[0].quantity);
            data.data.cart.products.map(c => {
                q.push(c.quantity
                )
            })
            qu = q;
            console.log(qu)
            const sum = qu.reduce((partialSum, a) => partialSum + a, 0);
            console.log(sum);
            setCart(data.data.cart);
            console.log(data.data.cart.length);
            cartLength = sum


        } catch (e) {
            console.log(e);
        }
    };





    useEffect(() => {

        getOrders();
        getCart()

    }, []);

    return (


        <div>
            <UserProfile orderLength={orderLength} pendingLength={pendingLength} cartLength={cartLength} />

        </div>




    );
};

export default UserAnalytics;
