import { PDFExport } from "@progress/kendo-react-pdf";
import { useRef } from "react";
import './MyOrderCard.css';

export default function MyOrderCard(props) {

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };
    return (
        <PDFExport ref={pdfExportComponent}>
            <div className="card mb-3" style={{ borderRadius: 10 }}>
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0" style={{ color: "#2b96dd" }}>
                            Order details
                        </p>

                        <p className="small text-muted mb-0">orderId:{props.order._id}  </p>
                        <a align="center" role="button" onClick={handleExportWithComponent}
                            class="button-5">DOWNLOAD PDF
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </a>
                    </div>

                    <div className="card shadow-0 border mb-4">
                        <div className="card-body">

                            <div>{props.order.products.map((p) => {

                                return (
                                    <>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src={p.image} className="img-fluid" alt="Image" />
                                            </div>

                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <h5 className="text-muted mb-0">{p.title}</h5>
                                            </div>
                                            {/* <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                    <p className="text-muted mb-0 small">productId: {p.productId} </p>
                                  </div> */}
                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-muted mb-0 small">Qty: {p.quantity}</p>
                                            </div>
                                            <div className="col-md-6 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-muted mb-0 small" >price: ₹{p.price * p.quantity}</p>
                                            </div>

                                        </div>
                                        <hr />
                                    </>

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
                                    <h6> {props.order.status} </h6>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between pt-2">
                        <p className="fw-bold mb-0">Order Details</p>
                        <p className="text-muted mb-0">
                            <span className="fw-bold me-4">Total</span>₹ {props.order.amount}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                        <p className="text-muted mb-0">orderId:{props.order._id}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">order Date :{props.order.createdAt.slice(0, 10)}</p>
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
                        Total paid: <span style={{ color: "black" }}>₹ {props.order.amount}</span>
                    </h5>
                </div>

            </div>
        </PDFExport>
    )
}