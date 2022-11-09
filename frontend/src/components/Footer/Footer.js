import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left mr-auto">
                            <div class="footer-widget">
                                <a class="navbar-brand font-weight-bold" roterLink="/">GetMeds</a>
                                <p class="lead">GetMeds is a online pharmacy managemnt system for easy and fast delivery of medical essentials</p>

                                <div class="">
                                    <p class="mb-0"><strong>Location : </strong> ABC ,INDIA</p>
                                    <p><strong>Support Email : </strong> support@email.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-2 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left">
                            <div class="footer-widget">
                                <h4 class="mb-4">Category</h4>
                                <ul class="pl-0 list-unstyled mb-0">
                                    <li><Link to={{ pathname: '/product-list'}}>View all Producrs</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Homeopathy'}}>Homeopathy</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Ayurveda'}}>Ayurveda</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Health devices'}}>Health devices</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Covid essentials'}}>Covid essentials</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Nutrients'}}>Nutrients</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Clinical'}}>Clinical</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Personal Care'}}>Personal Care</Link></li>
                                    <li><Link to={{ pathname: '/product-list' }} state={{type: 'Home Care'}}>Home Care</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-2 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left">
                            <div class="footer-widget">
                                <h4 class="mb-4">Useful Link</h4>
                                <ul class="pl-0 list-unstyled mb-0">
                                    <li><a href="#">News &amp; Tips</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Our Shop</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-sm-6 text-center text-sm-left">
                            <div class="footer-widget">
                                <h4 class="mb-4">Opening Hours</h4>
                                <ul class="pl-0 list-unstyled mb-5">
                                    <li class="d-lg-flex justify-content-between">Monday-Friday <span>8.00-20.00</span></li>
                                    <li class="d-lg-flex justify-content-between">Saturday <span>10.00-20.00</span></li>
                                    <li class="d-lg-flex justify-content-between">Sunday <span>12-20.00</span></li>
                                </ul>
                                <h5>Call Now : +(000) 000-000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
           
        </>
    )
}