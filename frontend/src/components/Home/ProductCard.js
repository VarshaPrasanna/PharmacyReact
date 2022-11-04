function ProductCard(props){

    const addToCart = () => {
        
    }

    return(
        <div className="col-md-3" class="column">
                            <div className="our-team">
                                <div>
                                    <div className="pic">
                                        <img src={props.product.image} />
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
                                    <button
                                        type="button"
                                        className="btn btn-info mt-0 mb-1"
                                        data-toggle="modal"
                                        data-target="#modalCart">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
    )
}

export default ProductCard;