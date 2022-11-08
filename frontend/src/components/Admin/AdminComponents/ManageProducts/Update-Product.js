import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import background from '../ManageProducts/Images/GetMeds.jpg'

import axios from "axios";

function UpdateProduct(props) {
    const initialState = {
        title: "",
        image: "",
        price: "",
        description: "",
        categories: ""
    };
    const [product, setProduct] = useState(initialState);
    const navigate = useNavigate();
    const { _id } = useParams();

    useEffect(
        function () {
            async function getProduct() {
                try {
                    const response = await axios.get(`http://localhost:3000/products/${_id}`);
                    setProduct(response.data.product)
                    console.log(response.data)
                } catch (error) {
                    console.log("error", error);
                }
            }
            getProduct();
        },
        [props]
    );

    function handleSubmit(event) {
        event.preventDefault();
        async function UpdateProduct() {
            try {
                await axios.put(`http://localhost:3000/products/${product._id}`, product);
                window.confirm("Product updated Succesfully")
                navigate(`/ProductList`)
            } catch (error) {
                console.log(error);
            }
        }
        UpdateProduct();
    }

    function handleChange(event) {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    function handleCancel() {
        navigate(`/ProductList`)
    }

    return (
        <div style={{ backgroundImage: `url(${background})` }}>

            <div>
                <div className="container" style={{ maxWidth: "600px" }}>
                    <h1>Update Product Details</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Product Name</label>
                            <input type="text"
                                name="title"
                                className="form-control"
                                value={product.title}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="form-group">
                            <label className="form-label"> Product Price</label>
                            <input type="text"
                                name="price"
                                className="form-control"
                                value={product.price}
                                onChange={handleChange}

                                required
                            />
                        </div>
                        <div className="form-group">
                    <label className="form-label"> Product Categories</label>
                            <select className="custom-select form-control" name="categories" value={product.categories} onChange={handleChange} required >
                                <option value="">select</option>
                                <option value="Homeopathy">Homeopathy</option>
                                <option value="Ayurveda">Ayurveda</option>
                                <option value="Health devices">Health devices</option>
                                <option value="Covid essentials" >Covid essentials</option>
                                <option value="Nutrients" >Nutrients</option>
                                <option value="Clinical" >Clinical</option>
                                <option value="Personal Care" >Personal Care</option>
                                <option value="Home Care" >Home Care</option>
                            </select>
                        </div>  

                        <div className="form-group">
                            <label className="form-label">image</label>
                            <input type="url"
                                name="image"
                                className="form-control"
                                value={product.image}
                                onChange={handleChange}
                                required
                            />
                            <small>Type Your Image URL</small>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                name="description"
                                row="10"
                                className="form-control"
                                value={product.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="btn-group">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="btn btn-secondary">
                                Cancel
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct;