import React from "react";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../pagination/pagination";

let PageSize = 5;
const ManageOrders = () => {
  const [order, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    getOrders();
  }, []); 
  const getOrders = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3000/orders/"
      );
      console.log(data.data);
      setOrder(data.data.orders.reverse());
      setCurrentPage(1);          
    } catch (e) {
      console.log(e);
    }
  }; 
  const currentTableData = useMemo(() => {    

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return order.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
    <div style={{ backgroundColor: "rgb(176, 211, 220)" }}>
      <div style={{ padding: "4%" }}>
        <div
          className="card justify-content-center col-12 border-0"
          style={{ backgroundColor: "rgb(176, 211, 220)" }}
        >
          <div className="card-body">
            <h2 style={{ paddingLeft: "13.5%" }} className="card-title">
              List of Orders
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card bg-dark shadow-2-strong">
                <div className="card-body">
                  <table
                    className="table table-striped table-dark table-borderless text-center"
                    align="center">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">orderId</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Product details</th>
                        <th scope="col">Update status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentTableData.map((item) => {
                        return (
                          <tr>
                            <td scope="row">{item._id} </td>
                            <td>??? {item.amount} </td>
                            <td>{Object.keys(item.address)[0]} : {item.address[Object.keys(item.address)[0]]} <br />
                              {Object.keys(item.address)[1]}: {item.address[Object.keys(item.address)[1]]} <br />
                              {Object.keys(item.address)[2]} : {item.address[Object.keys(item.address)[2]]} <br />
                              {Object.keys(item.address)[3]}: {item.address[Object.keys(item.address)[3]]}
                            </td>
                            <td>{item.status}</td>

                            <td>
                              <div>{item.products.map((p) => {
                                return (
                                  <p className="text-light">Title:{p.title}, quantity:{p.quantity}</p>
                                );
                              })}
                              </div>
                            </td>
                            <td>
                              <div className="row text-center  ">
                                <Link type="button" className="btn  btn-info btn-sm" to={`/update-status/${item._id}`} >
                                  update status
                                </Link>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={order.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ManageOrders;