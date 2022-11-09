import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './product-info.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../Header/Header';
import { addProductToCart } from '../../service/cart.service'
import { Modal, Button, CloseButton } from 'react-bootstrap';



const ProductInfo = () => {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
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

    const addToCart = (product) => {
      addProductToCart(product, 1);
      setShow(true);
  }
  const handleClose = () => setShow(false);

    return(
<>
{/* <Header/> */}
{/* <div className="bg"></div> */}
<section style={{ backgroundColor: "rgb(176, 211, 220)" }}>
  <div className="container text-center " style={{ backgroundColor: "white" }} >
  <h3>Product Information</h3>
  </div>

  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card" style={{ borderRadius: 15 }}>
          <div
            className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src={product.image}
              style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, marginLeft: 35 }}
              className="img-fluid"
              alt="Laptop"
            />
            <a href="#!">
              <div className="mask" />
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <a href="#!" className="text-dark">
                  {product.title}
                  </a>
                </p>
                <p className="small text-muted">{product.categories}</p>
              </div>
              <div>
                <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p className="small text-muted"></p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p>
                <a href="#!" className="text-dark">
                      price:   ₹ {product.price}
                </a>
              </p>
              <p className="text-dark"> <del>price: ₹ {product.price + 50}</del></p>
            </div>
            <p className="small text-muted">{product.description}</p>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
              
              <button type="button" className="btn btn-primary" onClick={() => addToCart(product)} style={{marginLeft: 80}} >
                Add to Cart
              </button>
              <Modal size="sm" show={show} onHide={handleClose} className="text-center">
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>Product added to cart! </Modal.Body>
                                <Modal.Footer>
                                        <Button variant="info" href='/cart'>Go to Cart</Button>
                                        <Button variant="outline-info" onClick={handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>



    )



}
export default ProductInfo;