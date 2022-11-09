import React from "react";
import PieChart from './AdminComponents/PieChart';

const AdminApp = (props) => {
    return (
        <>
            <div className="App">
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
                <div class="row" style={{ paddingLeft: 260 }}>

                    <div class="col-xl-3 col-sm-6 mb-3">
                        <div className="card bg-c-green order-card">
                            <div className="card-block">
                                <h6 className="m-b-10">Total Users</h6>
                                <h2 className="text-right"><i className="fa fa-users f-left"></i><span>{props.userLength}</span></h2>
                                <p className="m-b-0"><span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-3">
                        <div className="card bg-c-blue order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Total Products</h6>
                                <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>{props.productLength}</span></h2>
                                <p className="m-b-0"><span className="f-right"></span></p>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-3 col-sm-6 mb-3">
                        <div className="card bg-c-pink order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Orders Placed</h6>
                                <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>{props.orderLength}</span></h2>
                                <p className="m-b-0"><span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-3">
                        <div className="card bg-c-yellow order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Prescription Received</h6>
                                <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>{props.preLength}</span></h2>
                                <p className="m-b-0"><span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: 260 }}>
                    <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                    <div className="mb-5" style={{ height: "300px", width: "400px" }}><PieChart /> </div></div>

            </div>



        </>
    )
}

export default AdminApp;