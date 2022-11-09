import { Link } from 'react-router-dom';

// import './ProductCard.css';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import { useState } from 'react';

function ProductCardAdmin(props) {

    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);

    return (
        <>
            <div className="col-md-3" class="column my-auto">
                <div className="our-team">
                    <div>
                        <div className="pic">
                            <Link to={{ pathname: `/product-info/${props.product._id}` }} >
                                <img src={props.product.image} /></Link>
                        </div>
                        <div className="card-body mb-0 py-0">
                            <h6 className="card-title"><b>{props.product.title}</b></h6>
                            <div>
                                <p className="card-text text-truncate">
                                    <p className="text-info m-0 p-0"> {props.product.categories} </p>
                                </p>
                            </div>

                            <div>
                                <p className="text-dark"><b> ₹{props.product.price}</b></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCardAdmin;