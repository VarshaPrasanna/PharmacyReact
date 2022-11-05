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

    function handleSubmit(event){
        event.preventDefault();
        async function postProduct(){
            try{
                const response = await axios.post("http://localhost:3000/products/",product);
                window.confirm("Product Added Succesfully")
                navigate(`/ProductList`)

            }catch(error){
                console.log(error);
            }
        }
        postProduct();
    }

    function handleChange(event){
        setProduct({...product,[event.target.name]:event.target.value})

    }

    function handleCancel(){
        navigate("/AddProduct");
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
                        
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label"> Product Categories</label>
                    <input type="text"
                        name="categories"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
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
                        row = "10"
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