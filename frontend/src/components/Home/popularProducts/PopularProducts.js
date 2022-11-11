import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../product-card/ProductCard";

//var popProducts = [];



function PopularProducts() {

    const [popProducts, setPopProducts] = useState([]);
    const [error, setError] = useState(false)

    async function getPopularProducts() {
        try {
            let products = [];
            const data = await axios.get("http://localhost:3000/orders/popular")
            console.log("pop", data.data);
            data.data.data.map(dta => {
                products.push(dta.product[0])
                if (dta.product == []) {
                    setError(true);
                }
            })
            // console.log("test", test)
            if (!error) {
                //popProducts = products;
                setPopProducts(products);
                console.log("test", popProducts);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPopularProducts();
        /* if (popProducts.length == 0) {
            getPopularProducts();
        } */
    }, []);

    if (!error) {
        return (
            <div className="categories">
                <h1 className="section-heading mb-5">Popular Products</h1>

                {popProducts.map(product => {
                    return (
                        <ProductCard product={product} key={product._id} />
                    )
                })}
            </div>
        )
    }
}

export default PopularProducts;