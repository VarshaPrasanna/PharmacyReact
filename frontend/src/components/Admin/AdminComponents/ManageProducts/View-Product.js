import React from "react";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../pagination/pagination";



let PageSize = 3;
const ViewProduct = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const [product, setProduct] = useState([]);

    const getProductData = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/products/"
            );
            console.log(data.data);
            console.log(data.data.products)
            setProduct(data.data.products);
            setCurrentPage(1);          

        } catch (e) {
            console.log(e);
        }
    };
    const currentTableData = useMemo(() => {    

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(product);
        return product.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    //Delete Product
    const DeleteProduct = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:3000/products/" + id)
            getProductData()

                .then(console.log("Deleted"))
                .catch(err => console.log(err));
        }
    }



    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div>
        <div classname="ViewProducts">


            <div  />

            <div className="col flex-column col-md-11 ml-5" style={{ paddingTop: '30px' }}>
                <div className="card product-card" style={{backgroundColor:'#ADD8E6'}} >
                    < div className="card-body">
                        <h1 style={{ color: "Black" }}>Manage Products</h1>
                        <Link size="10px" type="button" to={{ pathname: "/Addproduct" }} className="btn btn-success">
                            + Add Product
                        </Link>

                    </div>
                </div>
            </div>

            <div className="col flex-column col-md-11 ml-5">
                {currentTableData

                    .map((item) => {
                        return (

                            <div className="card product-card" style={{backgroundColor:'#ADD8E6'}} >
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-sm-2">
                                            <img className="cart-img" src={item.image} />
                                        </div>

                                        <div className="col-sm-9 ">
                                            <h4> {item.title}</h4>
                                            <h5> {item.categories} </h5>
                                            <h6> ₹{item.price} </h6>
                                            <h6> {item.description} </h6>

                                        </div>

                                        <div className="col-sm-1  " >
                                            <Link type="button" to={{ pathname: `/UpdateProduct/${item._id}` }} className="btn btn-outline-success btn-sm m-1">Update </Link>

                                            <button type="button" class="btn btn-outline-danger btn-sm m-1 " onClick={() => DeleteProduct(item._id)} >Delete</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={product.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
        </div>

    );
};

export default ViewProduct;

