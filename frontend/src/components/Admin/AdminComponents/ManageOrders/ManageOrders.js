import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageOrders = () => {


    const [order, setOrder] = useState([]);

    const getOrders = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/orders/"
            );
            console.log(data.data);
            // console.log(data.data.orders)
            setOrder(data.data.orders);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
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
                align="center"
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">UserId</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Address</th>
                    <th scope="col">Status</th>
                    <th scope="col">Product details</th>
                    <th scope="col">Update status</th>
                  </tr>
                </thead>
                <tbody>
                    {order.map((item)=>{
                        return(                      
                  <tr>
                    <td scope="row">{item.userId} </td>                   
                    <td>₹ {item.amount} </td>
                    <td>{Object.keys(item.address)[0]} : {item.address[Object.keys(item.address)[0]]} <br/>
                    {Object.keys(item.address)[1]}: {item.address[Object.keys(item.address)[1]]} <br/>
                    {Object.keys(item.address)[2]} : {item.address[Object.keys(item.address)[2]]} <br/>
                    {Object.keys(item.address)[3]}: {item.address[Object.keys(item.address)[3]]}                     
                    </td>
                    <td>{item.status}</td>

                    <td>
                      <div>{item.products.map((p)=>{
                        return (
                            <p className="text-light">productId:{p.productId}, quantity:{p.quantity}</p>
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
    );
};

export default ManageOrders;