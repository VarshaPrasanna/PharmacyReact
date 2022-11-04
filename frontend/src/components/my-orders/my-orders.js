import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import './my-orders.css';
import Header from "../Header/Header";

const MyOrders = () => {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/orders/"
            );
            console.log(data.data);
            // console.log(data.data.users)
            setOrders(data.data.orders);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    return(
        <>
        {/* <div className="bg"></div> */}
        <Header />

        <section className="h-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-10 col-xl-8">
              {orders.filter((item)=>{
                       if( item.userId == localStorage.getItem('userId')){
                        return item;
                       }
                       console.log(item);
                       console.log(localStorage.getItem('userId'));
                    }).map((item)=>{
                        return(
                <div className="card mb-3" style={{ borderRadius: 10 }}>
                    

                        
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p className="lead fw-normal mb-0" style={{ color: "#2b96dd" }}>
                        Orders
                      </p>
                      <p className="small text-muted mb-0">orderId:{item._id}  </p>
                    </div>
                    <div className="card shadow-0 border mb-4">
                      <div className="card-body">
                        <div>{item.products.map((p)=>{
                            return(
                          <div className="row">
                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0">title</p>
                            </div>
                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0 small">productId: {p.productId} </p>
                            </div>
                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                              <p className="text-muted mb-0 small">Qty: {p.quantity}</p>
                            </div>
                          </div>
                          )
                        })}
                          <hr
                            className="mb-4"
                            style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                          />
                        </div>
                        <div className="row d-flex align-items-center">
                          <div>
                            <p>Order status as on Today:</p>
                          </div>
                          <div className="d-flex justify-content-around mb-1 ml-2">
                            <h6> {item.status} </h6>
                          </div>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Order Details</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Total</span>₹ {item.amount}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">orderId:{item._id}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">order Date :{item.createdAt}</p>
                    </div>
                  </div>
                  <div
                    className="card-footer border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#2b96dd",
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10
                    }}
                  >
                    <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                      Total paid: <span style={{ color: "black" }}>₹ {item.amount}</span>
                    </h5>
                  </div>
                  </div>
                  )
                        
                })}
                
              </div>
            </div>
          </div>
        </section>
      </>
      
    );
}
export default MyOrders;