import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './product-info.css';
import Carousel from 'react-bootstrap/Carousel';




const ProductInfo = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    const getProduct = async () => {
        try {
            const data = await axios.get(
                `http://localhost:3000/products/${id}`
            );
            console.log(data);
            // console.log(data.data.users)
            setProduct(data.data.product);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getProduct();
    }, []);

    return(
        
         <>
  <section className="page-header">
  <Carousel variant="dark">
  <Carousel.Item interval={5000}>
    <div className="carousel-img"> <img className="d-block img-fluid"  src="https://img.freepik.com/free-vector/tiny-pharmacists-with-rx-prescription-drugs_74855-7882.jpg?w=1380&t=st=1667457058~exp=1667457658~hmac=96cd4b40bef9360dc1945306b62d31513bebc14e372fcde9f36a90403f6504bd"/> </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
        <Carousel.Caption>
          <div className="content text-center">
            <h1 className="mb-3">Product Information</h1>
            <p>
              GetMeds Provides the finest tested medicines and provides expected
              home delivery
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent justify-content-center">
                <li className="breadcrumb-item">
                  <a routerlink="/">Home</a>
                </li>
              </ol>
            </nav>
          </div>
          </Carousel.Caption>
        </div>
      </div>
    </div>
    </Carousel.Item>
    </Carousel>
  </section>
  <section className="single-product">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="single-product-slider">
            <div
              className="carousel slide"
              data-ride="carousel"
              id="single-product-slider"
            >
              <img src={product.image} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="single-product-details mt-5 mt-lg-0">
            <h2> title:{product.title}  </h2>
            <div className="sku_wrapper mb-4">
              Expiry Date: <span className="text-muted">24/06/2024 </span>
            </div>
            <hr />
            <h3 className="product-price">
              price: {product.price}
              <del>price: {product.price + 50}</del>
            </h3>
            <p className="product-description my-4 ">{product.description}</p>
            <form className="cart" action="#" method="post">
              <button
                type="button"
                className="btn btn-info mb-2"
                data-toggle="modal"
                data-target="#modalCart"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    )



}
export default ProductInfo;