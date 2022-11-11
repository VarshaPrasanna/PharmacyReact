import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from '../ManageProducts/Images/GetMeds.jpg'

import axios from "axios";

function AddProduct(props) {
    const initialState = {
        title: "",
        image: "",
        price: "",
        description: "",
        categories: ""
    };

    const [product, setProduct] = useState(initialState);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        async function postProduct() {
            try {
                await axios.post("http://localhost:3000/products/", product);
                window.confirm("Product Added Succesfully")
                navigate(`/ProductList`)

            } catch (error) {
                console.log(error);
            }
        }
        postProduct();
    }

    function handleChange(event) {
        setProduct({ ...product, [event.target.name]: event.target.value })

    }

    function handleCancel() {
        navigate("/ProductList");
    }



    return (
        <div style={{ backgroundImage: `url(${background})` }}>



            <div className="container" style={{ maxWidth: "400px" }}>
                {/*             <img className="card-img-top" src={GetMeds} />
 */}            <h1>Add Product</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <input type="text"
                            name="title"
                            className="form-control"
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="form-group">
                        <label className="form-label"> Product Price</label>
                        <input type="text"
                            name="price"
                            className="form-control"
                            onChange={handleChange}
                            pattern= '[0-9]'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label"> Product Categories</label>
                        <select className="custom-select form-control" name="categories" onChange={handleChange} required >
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
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="btn-group ">
                        <input type="submit" value="Submit" className="btn btn-primary m-1" />
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="btn btn-secondary m-1">
                            Cancel
                        </button>

                    </div>

                </form>
            </div>
        </div>

    )

}
export default AddProduct;