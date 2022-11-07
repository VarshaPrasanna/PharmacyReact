import { Link } from 'react-router-dom';
import { addProductToCart } from '../../service/cart.service'
import './ProductCard.css';

function ProductCard(props){

    const addToCart = (product) => {
        addProductToCart(product, 1);
    }

    return(
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
                                        {/* <div>
                                            <p className="card-text text-truncate text-muted">
                                                {product.description}
                                            </p>
                                        </div> */}
                                        <div>
                                            <p className="text-dark"><b> ₹{props.product.price}</b></p>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                        <button
                                            type="button"
                                            className="btn btn-info mt-0 mb-1"
                                            data-toggle="modal"
                                            data-target="#modalCart"
                                            onClick={() => addToCart(props.product)} >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default ProductCard;