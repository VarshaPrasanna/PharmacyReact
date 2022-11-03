import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from '../Header/Header';
// import styles from "./styles.module.css";

const ProductList = () => {

    const [product, setProduct] = useState([]);

    const getProductList = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/products/"
            );
            console.log(data.data);
            // console.log(data.data.users)
            setProduct(data.data.products);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getProductList();
    }, []);

    return (
        <section className="container2">
            <Header />
        <div>
          <div className="col-md-3 col-sm-6">
            <div className="our-team">{product.map((item)=>{
                return(

                <div>
              <div className="pic">
                <img src={item.image} />
              </div>
              <div className="card-body">
                <h6 className="card-title font-weight-bold">{item.title}</h6>
                <div>
                  <p className="card-text text-truncate">
                   
                    <small> {item.description} </small>
                  </p>
                </div>
                <div>
                  <p className="font-weight-bold"> {item.price}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-info mb-2"
                data-toggle="modal"
                data-target="#modalCart"
              >
                Add to Cart
              </button>
              </div>
              )
            })}
              </div>
          </div>
        </div>
      </section>
    );
}
export default ProductList;





              {/* <div
                className="modal fade right"
                id="modalCart"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
                data-backdrop="false"
              > */}
                {/* <div
                  className="modal-dialog modal-side modal-bottom-right modal-notify modal-info"
                  role="document"
                >
                  <div className="modal-content"> */}
                    {/* <div className="modal-header">
                      <p className="heading text-success">
                        Product is added to the cart
                      </p>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" className="white-text">
                          
                        </span>
                      </button>
                    </div> */}
                   {/*Footer*/}
                    {/* <div className="modal-footer justify-content-center">
                      <link type="button" className="btn btn-success" to="/cart" />
                      Go to cart
                      <a
                        type="button"
                        className="btn btn-outline-success waves-effect"
                        data-dismiss="modal"
                      >
                        Cancel
                      </a>
                    </div> */}
                  {/* </div> */}
                 {/*/.Content*/}
                  {/*Content*/}
                  {/* <div className="modal-content border border-warning border-50"> */}
                    {/*Header*/}
                    {/* <div className="modal-header">
                      <p className="heading text-dark">
                        Please Login or Signup to add products to the cart
                      </p>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" className="white-text">
                          
                        </span>
                      </button>
                    </div> */}
                   {/*Footer*/}
                    {/* <div className="modal-footer justify-content-center">
                      <a
                        type="button"
                        className="btn btn-warning"
                        routerlink="/login"
                      >
                        Login
                      </a>
                      <a
                        type="button"
                        className="btn btn-warning waves-effect"
                        routerlink="/signup"
                      >
                        Signup
                      </a>
                    </div> */}
                  {/* </div> */}
                  {/*/.Content*/} 
                {/* </div>
              </div> */}
