import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../product-card/ProductCard";

var popProducts = [];

async function getPopularProducts() {
    try {
        let products = [];
        const data = await axios.get("http://localhost:3000/orders/popular")
        console.log("pop", data.data);
        data.data.data.map(dta => {
            products.push(dta.product[0])
        })
        // console.log("test", test)
        popProducts = products;
        console.log("test", popProducts)
    } catch (e) {
        console.log(e);
    }
}

function PopularProducts() {



    useEffect(() => {
        //getPopularProductList();
        if (popProducts.length == 0) {
            getPopularProducts();
        }
    }, []);

    return (
        <div className="categories">
            <h1 className="section-heading mb-5">Popular Products</h1>
            <p></p>

            {popProducts.map(product => {
                return (
                    <ProductCard product={product} key={product._id} />
                )
            })}
        </div>
    )
}

export default PopularProducts;