import HomeCarousel from "./Carousel/Carousel";
import ProductCard from "./ProductCard"
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Home.css';
import { useEffect, useState } from "react";
import axios from "axios";
import PopularProducts from "./popularProducts/PopularProducts";

export default function Home() {

    const [newProducts, setNewProducts] = useState([]);
    const [popProducts, setPopProducts] = useState([]);

    const getNewProductList = async () => {
        try {
            const data = await axios.get("http://localhost:3000/products?new=1")
            console.log(data.data);
            // console.log(data.data.users)
            setNewProducts(data.data.products);
        } catch (e) {
            console.log(e);
        }
    };

   /*  const getPopularProductList = async () => {
        try {
            const data = await axios.get("http://localhost:3000/orders/popular")
            console.log("pop", data.data);
            let products = [], ids = [];
            ids = data.data.data;

            await ids.map(async obj => {
                let res = await axios.get(`http://localhost:3000/products/${obj._id}`);
                setPopProducts([...popProducts, res.data.product]);
            })
            console.log(popProducts);
        } catch (e) {
            console.log(e);
        }
    } */

    useEffect(() => {
        getNewProductList();
        //getPopularProductList();
    }, []);

    return (
        <>
            <HomeCarousel />
            <hr />
            <div className="categories">

                <h2 className="section-heading">Shop By Category</h2>
                <p className="section-heading">The best Online Pharmacy to shop for your health</p>
                <Row>

                    <Col>
                        <Card className="category">
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/h_and_n.png" className="category-img" />
                            <Card.Body>
                                <Card.Title className="category-title">Nutrients</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="category">
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg" className="category-img" />
                            <Card.Body>
                                <Card.Title className="category-title">Ayurveda</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="category">
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png" />
                            <Card.Body>
                                <Card.Title className="category-title">Health Devices</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="category">
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/logo.jpg" />
                            <Card.Body>
                                <Card.Title className="category-title">Covid Essentials</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>

            <div className="categories">
                <h2 className="section-heading mb-5">New Arrivals</h2>
                <p></p>

                {newProducts.map(product => {
                    return (
                        <ProductCard product={product} key={product._id}/> 
                    )
                })}

            </div>

            <PopularProducts />
        </>
    );
}