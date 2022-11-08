import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import './update-status.css';
import { useNavigate, useParams } from "react-router-dom";

const UpdateStatus = () => {
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    
    const getOrder = async () => {
        try {
            const data = await axios.get(
                `http://localhost:3000/orders/${id}`
            );
            console.log(data);
            // console.log(data.data.users)
            setOrder(data.data.orders);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getOrder();
    }, []);
    console.log(order);

    async function udpateStatus() {
        try {
            const response = await axios.put(`http://localhost:3000/orders/${order._id}`, order);
            navigate("/ManageOrders")
        } catch (error) {
            console.log(error);
        }
    }
    function handleSubmit(event){
      event.preventDefault();
      udpateStatus();
    }
    function handleChange(event) {
      setOrder({ ...order, [event.target.name]: event.target.value })
  }
  function handleCancel() {
  navigate("/ManageOrders");
}

    return(
        
        
        <div className="container">
    <section className="h-100 gradient-custom">
    <form onSubmit={handleSubmit}>
      <div className="container py-5 h-100" style={{width : 1000}} >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-10 col-xl-8">                           
            <div className="card" style={{ borderRadius: 10 }}>
              <div
                className="card-header px-4 py-5"
                style={{
                  paddingBottom: "0px !important",
                  paddingTop: "0px !important"
                }}
              >
                <h5 className="text-muted mb-0">Update order status</h5>
              </div>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p
                    className="lead fw-normal mb-0"
                    style={{ color: "#a8729a" }}
                  >
                    order
                  </p>
                </div>
                <div className="card shadow-0 border mb-4">
                  <div className="card-body">
                    <div className="row"></div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Order Details</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Total:</span>₹ {order.amount}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      {/* <p className="text-muted mb-0">Address:</p> */}
                      <p className="text-muted mb-0">OrderId :{order._id}</p>
                    </div>
                    {/* <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0"> {Object.keys(order.address)[1]}:{order.address[Object.keys(order.address)[1]]}</p>
                      <p className="text-muted mb-0">Ordered Date :{order.createdAt.slice(0,10)} </p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0"> {Object.keys(order.address)[2]}:{order.address[Object.keys(order.address)[2]]}</p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0"> {Object.keys(order.address)[3]}: {order.address[Object.keys(order.address)[3]]}</p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0"> {Object.keys(order.address)[0]}:{order.address[Object.keys(order.address)[0]]}</p>
                    </div> */}
                    <hr></hr>
                    {/* {order.products.map((p)=>{
                        return(
                       <>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0"> productId:{p.productId} </p>
                      <p className="text-muted mb-0"> quantity:{p.quantity} </p>
                    </div>
                    <hr                   
                    className="mb-4"
                      style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                    />
                    </> 
                    )
                    })} */}
                    
                    <div className="row d-flex align-items-center">
                      <div className="col-md-2">
                        <p className="text-muted mb-0 small">update</p>
                      </div>
                      <div className="card-body">  
                      <div className="form-group">
                        <label className="form-label">Status</label>
                        {/* <input type="text"
                            name="status"
                            className="form-control"
                            value={order.status}
                            onChange={handleChange}
                            required /> */}
                            <select className="custom-select form-control" name="status" value={order.status} onChange={handleChange}  >
                              <option value="">choose</option>
                              <option value="in-transit">in-transit</option>
                              <option value="pending">Pending</option>
                              <option value="cancelled">cancelled</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                    </div>                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-footer border-0 px-4 py-5"
                style={{
                  backgroundColor: "#a8729a",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  paddingTop: "0px!important",
                  paddingBottom: "0px!important"
                }}
              >
                <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                  Total paid: <span className="h2 mb-0 ms-2">₹ {order.amount}</span>
                </h5>
                <div className="btn-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="btn btn-secondary">
                            Cancel
                        </button>

                    </div>              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </section> 
</div>

    )
}
export default UpdateStatus;
