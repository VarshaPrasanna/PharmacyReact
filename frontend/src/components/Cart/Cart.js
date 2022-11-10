import React from "react";
import { Table } from "react-bootstrap";
import './Cart.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { getCart } from "../../service/cart.service";
import CartProducts from "./CartProducts";

export default class Cart extends React.Component {

    shippingCharges = 50;

    state = {
        userId: localStorage.getItem("userId"),
        cart: [],
        sum: 0,
    }

    componentDidMount() {
        this.setCart();
    }

    async setCart() {
        try {
            let data = await getCart();

            this.setState({
                cart: data,
                sum: this.getSum(data),
                cartId: localStorage.getItem('cartId')
            });

        } catch (err) {
            console.log(err);
            console.log(this.state.cart);
        }
    }

    getSum(products) {
        let sum = 0;
        console.log("getsum")
        products.map(p => {
            sum += p.price * p.quantity;
            console.log(sum);
        })
        return sum
    }

    async changeQty(product, q) {
        try {
            let cart = [...this.state.cart];
            let i = cart.findIndex(p => p.productId === product.productId);
            //console.log(cart[i]);
            cart[i].quantity += q;

            if (cart[i].quantity <= 0) {
                this.delete(product);
            } else {
                this.setState({
                    cart: cart,
                    sum: this.state.sum + q * cart[i].price
                });
            }

            const data = await axios.put(`http://localhost:3000/carts/${this.state.cartId}`, {
                products: cart
            });
            console.log(data);

        } catch (err) {
            console.log(err);
        }
    }

    async delete(product) {
        let cart = [...this.state.cart];
        let i = cart.findIndex(p => p.productId === product.productId);
        let sum = this.state.sum - cart[i].price * cart[i].quantity;
        console.log(cart[i]);
        cart.splice(i, 1)
        console.log("cart splice", cart);
        this.setState({
            cart: cart,
            sum: sum
        });
        const data = await axios.put(`http://localhost:3000/carts/${this.state.cartId}`, {
            products: cart
        });
        console.log(data);
    }

    onSubmit() {
        localStorage.setItem("totalAmount", this.state.sum + this.shippingCharges);
    }

    render() {
        if (this.state.cart.length <= 0) {
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
                                                <td>{this.state.sum}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Shipping charges</td>
                                                <td>{this.shippingCharges}</td>
                                            </tr>

                                            <tr className="total">
                                                <td scope="row">Total Amount</td>
                                                <td>{this.state.sum + this.shippingCharges}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                            <Link to={{ pathname: "/payment" }}>
                                <button className="btn btn-block btn-dark" onClick={this.onSubmit()}>Proceed to Checkout</button>
                            </Link>
                        </div>

                        <div className="col flex-column col-md-7 ml-5">
                            <CartProducts products={this.state.cart}/>
                        </div>
                    </div>
                </>
            );
        }
    }
}