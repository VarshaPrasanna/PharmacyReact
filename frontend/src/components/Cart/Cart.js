import React, { useEffect, useState, useMemo } from "react";
import { Table } from "react-bootstrap";
import './Cart.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { getCart } from "../../service/cart.service";
import Pagination from '../pagination/pagination';

let PageSize = 3;

export default function Cart() {

    let shippingCharges = 50;
    //const userId = localStorage.getItem("userId");
    const [cart, setCart] = useState([]);
    const [sum, setSum] = useState(0);
    const [cartId, setCartId] = useState('');

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getCartData();
    }, [])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(firstPageIndex)
        return cart.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, cart]);

    const getCartData = async () => {
        try {
            let data = await getCart();
            setCart(data);
            setCartId(localStorage.getItem('cartId'));
            getSum(data);
            setCurrentPage(1);
        } catch (err) {
            console.log(err);
        }
    }

    const getSum = (products) => {
        let sum = 0;
        console.log("getsum")
        products.map(p => {
            sum += p.price * p.quantity;
            console.log(sum);
        })
        setSum(sum)
    }

    const changeQty = async (product, q) => {
        try {
            let tempCart = [...cart];
            let i = tempCart.findIndex(p => p.productId === product.productId);
            //console.log(cart[i]);
            tempCart[i].quantity += q;
            if (tempCart[i].quantity <= 0) {
                //deleteProduct(product);
                let tempSum = sum + tempCart[i].price * q;
                tempCart.splice(i, 1);
                setSum(tempSum);
                setCart(tempCart);
                //window.alert("Product removed from cart")
            } else {
                setSum(sum + q * tempCart[i].price);
                setCart(tempCart);
            }
            const data = await axios.put(`http://localhost:3000/carts/${cartId}`, {
                products: tempCart
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    function onSubmit() {
        localStorage.setItem("totalAmount", sum + shippingCharges);
    }


    if (cart.length <= 0) {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Shopping Cart</h4>
                    </div>
                </div>
                <div class="alert alert-warning text-center" role="alert">
                    <strong>Your cart is empty!</strong>
                    <p>Add products to your cart before proceeding to checkout</p>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Shopping Cart</h4>
                    </div>
                </div>

                <div className="d-flex row justify-content-around flex-row-reverse cart mt-4">

                    <div className="col-md-4 d-flex flex-column justify-content-between">
                        <div className="card border rounded flex-row cart-product-card bill">
                            <div className="card-body">

                                <Table borderless striped>
                                    <thead>
                                        <th><h4>Order Summary</h4></th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">Total sum</td>
                                            <td>{sum}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Shipping charges</td>
                                            <td>{shippingCharges}</td>
                                        </tr>

                                        <tr className="total">
                                            <td scope="row">Total Amount</td>
                                            <td>{sum + shippingCharges}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                        <Link to={{ pathname: "/payment" }}>
                            <button className="btn btn-block btn-dark" onClick={onSubmit()}>Proceed to Checkout</button>
                        </Link>
                    </div>

                    <div className="col flex-column col-md-7 ml-5">
                        {currentTableData.map(product => {
                            return (
                                <div className="card cart-product-card" key={product.productId}>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-sm-2">
                                                <img className="cart-img" src={product.image} />
                                            </div>
                                            <div className="col-sm-8 ml-3">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p>  {product.price}</p>
                                                <div>
                                                    <div className="qty"><button className="btn btn-sm qty-button m-1" onClick={() => changeQty(product, 1)}
                                                    >+</button>
                                                        {product.quantity}
                                                        <button className="btn btn-sm qty-button m-1" onClick={() => changeQty(product, -1)}
                                                        >-</button></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <button type="button" className="btn btn-danger btn-sm" onClick={() => changeQty(product, -product.quantity)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={cart.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </>
        );
    }
}
