import axios from "axios";
import { useState } from "react";

const userId = localStorage.getItem('userId');



export const createCart = async () => {
    const data = await axios.post('http://localhost:3000/carts', {
        userId: userId,
        products: [],
    })
    console.log(data);
    localStorage.setItem('cartId', data.data.savedCart._id);
    return [];
}

export const getCart = async () => {
    try {
        const data = await axios.get(`http://localhost:3000/carts/${userId}`);
        console.log(data);
        localStorage.setItem('cartId', data.data.cart._id);
        return data.data.cart.products;
    } catch (err) {
        console.log(err);
        return createCart();
    }
}

export const addProductToCart = async (product, q) => {
    //console.log("product", product);
    let cart = [];
    await getCart().then(data => {
        cart = data
        console.log(cart);
    })
    //console.log(cart);
    let i = cart.findIndex(p => p.productId === product._id);

    if (i === -1) {
        cart.push({
            productId: product._id,
            quantity: q,
            price: product.price,
            title: product.title,
            image: product.image
        })
        console.log(cart);
    } else {
        cart[i].quantity += q
        if (cart[i].quantity <= 0) {
            cart.splice(i, 1);
        }
    }
    // });
    const cartId = localStorage.getItem('cartId');
    const data = await axios.put(`http://localhost:3000/carts/${cartId}`, {
        products: cart
    });
    console.log(data);
}

export const deleteCart = async () => {
    const cartId = localStorage.getItem('cartId');
    const data = await axios.delete(`http://localhost:3000/carts/${cartId}`);
    localStorage.removeItem('cartId');
    console.log(data);
}
