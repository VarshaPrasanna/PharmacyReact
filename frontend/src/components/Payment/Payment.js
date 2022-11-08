import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { deleteCart, getCart } from '../../service/cart.service';
import './Payment.css';

export default function Payment() {

    const totalAmount = localStorage.getItem('totalAmount');

    const [data, setData] = useState({
        streetAddress: "",
        city: "",
        pincode: "",
        state: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target);
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        console.log('handle submit');
        e.preventDefault();
        try {
            const url = "http://localhost:3000/orders";
            const { data: res } = await axios.post(url, {
                address: data,
                userId: localStorage.getItem('userId'),
                products: await getCart(),
                amount: totalAmount,
                status: 'pending'
            });
            console.log(res);
            deleteCart();
            navigate("/");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <div className="form-wrapper">
                        <h4>Payment Details</h4>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="streetAddress">
                                        <Form.Label>Street Address</Form.Label>
                                        <Form.Control type="text"
                                            name='streetAddress'
                                            value={data.streetAddress}
                                            onChange={handleChange} />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="city">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text"
                                                    name='city'
                                                    value={data.city}
                                                    onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="pincode">
                                                <Form.Label>Pincode</Form.Label>
                                                <Form.Control type="text"
                                                    name='pincode'
                                                    value={data.pincode}
                                                    onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="state">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text"
                                            name='state'
                                            value={data.state}
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="cardName">
                                        <Form.Label>Cardholder's Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group controlId="cardNumber">
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="expDate">
                                                <Form.Label>Exp Date</Form.Label>
                                                <Form.Control type="date" 
                                                pattern="\d{3,4}"/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="cvv">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="submit-button">
                                <Button variant="dark" size="lg" type="submit">Place Order</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col md={3}>

                    <div className="card border rounded flex-row bill-card">
                        <div className="card-body">

                            <Table borderless striped>
                                <thead>
                                    <th><h4>Order Summary</h4></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Total sum</td>
                                        <td>{totalAmount - 50}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Shipping charges</td>
                                        <td>{50}</td>
                                    </tr>

                                    <tr className="total">
                                        <td scope="row">Total Amount</td>
                                        <td>{totalAmount}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}