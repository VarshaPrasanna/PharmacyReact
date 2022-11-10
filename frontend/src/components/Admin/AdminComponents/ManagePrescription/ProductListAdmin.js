import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import './ProductListAdmin.css';


let pro = [];

const ProductListAdmin = ({ reply }) => {

    const location = useLocation()

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");
    //const [pro, setPro] = useState([]);

    const getProductList = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/products/"
            );
            console.log(data.data.products);
            // console.log(data.data.users)
            setProduct(data.data.products);
            //setPro(product);
            pro = data.data.products;
            console.log(pro);
        } catch (e) {
            console.log(e);
        }

    };

    useEffect(() => {
        getProductList().then(() => {
            if (location.state) {
                category(location.state.type);
            }
        })
    }, []);

    function sorting(value) {
        if (value == "ZtoA") {
            const p = [...product].sort((a, b) => a.title > b.title ? -1 : 1,);
            console.log(p);
            setProduct(p);
        } else if (value == "AtoZ") {
            const p = [...product].sort((a, b) => a.title > b.title ? 1 : -1,);
            console.log(p);
            setProduct(p);
        }
        else if (value == "LtoH") {
            const p = [...product].sort((a, b) => a.price - b.price);
            console.log(p);
            setProduct(p);
        }
        else if (value == "HtoL") {
            const p = [...product].sort((a, b) => b.price - a.price);
            console.log(p);
            setProduct(p);
        }
    }

    function category(type) {
        setType(type);
        console.log(pro);
        console.log(type);
        if (type !== "all") {
            console.log(pro);
            const tempProducts = pro.filter(
                (x) => x.categories == type
            );
            console.log(tempProducts);
            setProduct(tempProducts);
        } else {
            setProduct(pro);
            console.log(pro);
        }
    }



    return (
        <>
            <div className='row justify-content-start'>

                <div className='col-md-2 mb-2 mt-2' style={{ paddingTop: 1, color: "blue", marginLeft: 50 }}>
                    <input type="text" style={{ borderRadius: 10 }} placeholder="Search for products" onChange={(e) => {
                        setSearch(e.target.value);
                    }} />

                </div>
                <div className="col-md-2 mb-2 mt-2 " style={{ marginLeft: 50 }} >
                    <select style={{ borderRadius: 10, height: 50, backgroundColor: 'lightcyan' }} onChange={(e) => {
                        sorting(e.target.value);
                    }} >
                        <option value="all" >Sort</option>
                        <option value="AtoZ" >Sort By Name (A to Z)</option>
                        <option value="ZtoA">Sort By Name (Z to A)</option>
                        <option value="LtoH">Sort By Price (Low to High)</option>
                        <option value="HtoL">Sort By Price (High to Low)</option>
                    </select>
                </div>
                <div className="col-md-2 mb-2 mt-2" style={{ marginLeft: 50 }}>
                    <select value={type} style={{ borderRadius: 10, height: 50, backgroundColor: 'lightcyan' }} onChange={(e) => { category(e.target.value) }} >
                        <option value="all" >All Categories</option>
                        <option value="Homeopathy" >Homeopathy</option>
                        <option value="Ayurveda" >Ayurveda</option>
                        <option value="Health devices" >Health devices</option>
                        <option value="Covid essentials" >Covid essentials</option>
                        <option value="Nutrients" >Nutrients</option>
                        <option value="Clinical" >Clinical</option>
                        <option value="Personal Care" >Personal Care</option>
                        <option value="Home Care" >Home Care</option>
                    </select>
                </div>
            </div>
            <section className="container2">
                <div className='row'>
                    {product.filter((item) => {
                        if (search == "") {
                            return item;
                        } else if (
                            item.title.toLowerCase().includes(search.toLowerCase())
                        ) {
                            return item;
                        }
                    }).map((product) => {
                        return (
                            <div className="col-md-3" class="column my-auto">
                                <div className="our-team">
                                    <div>
                                        <div className="pic">
                                            <img src={product.image} />
                                        </div>
                                        <div className="card-body mb-0 py-0">
                                            <h6 className="card-title"><b>{product.title}</b></h6>
                                            <div>
                                                <p className="card-text text-truncate">
                                                    <p className="text-info m-0 p-0"> {product.categories} </p>
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-dark"><b> ₹{product.price}</b></p>
                                            </div>
                                            <button type="button" className="btn btn-info mt-0 mb-1" onClick={() => reply(`/product-info/${product._id}`)}>
                                                Add to reply
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </section>
        </>
    );
}
export default ProductListAdmin;






