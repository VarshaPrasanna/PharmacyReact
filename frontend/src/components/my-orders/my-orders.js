import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './my-orders.css';
import MyOrderCard from "./MyOrderCard";


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

  return (

    <>
      {/* <PDFExport ref={pdfExportComponent}>
 */}
      <section className="h-100 gradient-custom">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">My Orders</h4>
          </div>
        </div>

        <div className="container py-5 h-100">

          <div className="row d-flex justify-content-center align-items-center h-100">

            <div className="col-lg-10 col-xl-8">
              {orders.filter((item) => {
                if (item.userId == localStorage.getItem('userId')) {
                  return item;
                }
                console.log(item);
                console.log(localStorage.getItem('userId'));
              }).map((item) => {
                return (
                  <MyOrderCard order={item} key={item._id} />
                )

              })}

            </div>
          </div>
        </div>
      </section>
      {/* </PDFExport> */}
    </>

  );
}
export default MyOrders;