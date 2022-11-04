import HomeCarousel from "./Carousel/Carousel";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
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
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/h_and_n.png" className="category-img"/>
                            <Card.Body>
                                <Card.Title className="category-title">Nutrients</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="category">
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg" className="category-img"/>
                            <Card.Body>
                                <Card.Title className="category-title">Ayurveda</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="category">
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png"/>
                            <Card.Body>
                                <Card.Title className="category-title">Health Devices</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="category">
                            <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/category/logo.jpg"/>
                            <Card.Body>
                                <Card.Title className="category-title">Covid Essentials</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>

            <div className="categories">
                <h2 className="section-heading">New Arrivals</h2>
                <p></p>
            </div>
        </>
    );
}