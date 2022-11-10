import Pagination from '../pagination/pagination';
import { useState, useMemo } from "react";

let PageSize = 3;

export default function CartProducts(props) {

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(firstPageIndex)
        return props.products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            {currentTableData.map(product => {
                return (
                    <div className="card cart-product-card" key={product.productId}>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-sm-2">
                                    <img className="cart-img" src={product.image} />
                                </div>
                                <div className="col-sm-8 ml-3">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p>  {product.price}</p>
                                    <div>
                                        <div className="qty"><button className="btn btn-sm qty-button m-1" onClick={() => this.changeQty(product, 1)}
                                        >+</button>
                                            {product.quantity}
                                            <button className="btn btn-sm qty-button m-1" onClick={() => this.changeQty(product, -1)}
                                            >-</button></div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.delete(product)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={props.products.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}