import React from 'react';
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import './Payment.css';

export default function Payment() {
    return (
        <>
            <Row>
                <Col>
                    <div className="form-wrapper">
                        <h4>Payment Details</h4>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="movieName">
                                        <Form.Label>Shipping Address</Form.Label>
                                        <Form.Control type="text" />
                                        {/* value={this.state.shippingAddress}  */}
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="movieDesc">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" />
                                                {/*  value={this.state.city}  */}
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="movieActor">
                                                <Form.Label>Pincode</Form.Label>
                                                <Form.Control type="text" />
                                                {/* value={this.state.movieActor} */}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="movieActor">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" />
                                        {/* value={this.state.movieActor} */}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="movieDesc">
                                        <Form.Label>Cardholder's Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group controlId="movieDesc">
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="movieDesc">
                                                <Form.Label>Exp Date</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="movieActor">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
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
                                        <td>{600}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Shipping charges</td>
                                        <td>{50}</td>
                                    </tr>

                                    <tr className="total">
                                        <td scope="row">Total Amount</td>
                                        <td>{600 + 50}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="submit-button">
                        <Button variant="dark" size="lg">Place Order</Button>
            </div>
        </>
    )
}