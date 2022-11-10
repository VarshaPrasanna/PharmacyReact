import React from "react";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import './my-orders.css';
import MyOrderCard from "./MyOrderCard";
import Pagination from "../pagination/pagination";

let PageSize = 3;
const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getOrders = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3000/orders/"
      );
      console.log(data.data);
      // console.log(data.data.users)
      let arr = data.data.orders.filter((item) => {
        if (item.userId == localStorage.getItem('userId')) {
          return item;
        }
        console.log(item);
        console.log(localStorage.getItem('userId'));
      }).reverse();

      setOrders(arr);
      setCurrentPage(1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const currentTableData = useMemo(() => {    

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return orders.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
              {currentTableData.map((item) => {
                return (
                  <MyOrderCard order={item} key={item._id} />
                )

              })}

            </div>
          </div>
        </div>
      </section>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={orders.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>

  );
}
export default MyOrders;