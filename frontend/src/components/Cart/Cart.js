import React from "react";
import { Table } from "react-bootstrap";
import './Cart.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { addProductToCart, getCart } from "../../service/cart.service";

export default class Cart extends React.Component {

    shippingCharges = 50;

    state = {
        userId: localStorage.getItem("userId"),
        cart: [],
        sum: 0,
        cartId: ''
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

    onSubmit(){
        localStorage.setItem("totalAmount", this.state.sum + this.shippingCharges);
    }

    render() {
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
                        {this.state.cart.map(product => (
                            <div className="card cart-product-card" key={product.productId}>
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-sm-2">
                                            <img className="cart-img" src={product.image} />
                                        </div>
                                        <div className="col-sm-8">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p>  {product.price}</p>
                                            <div>
                                                <div className="qty"><button className="btn btn-sm qty-button m-1" onClick={() => this.changeQty(product, 1)}
                                                >+</button>
                                                    {product.quantity}
                                                    <button className="btn btn-sm qty-button m-1" onClick={() => this.changeQty(product, -1)}
                                                    >-</button></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-1">
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => this.delete(product)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}