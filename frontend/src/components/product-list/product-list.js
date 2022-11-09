import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import './product-list.css';
import ProductCard from '../product-card/ProductCard';
// import styles from "./styles.module.css";

let pro = [];

const ProductList = () => {

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
        if(location.state){
          category(location.state.type);
        }
      })
    }, []);

    function sorting(value){
        if(value == "ZtoA"){
          const p = [...product].sort((a,b)=>a.title > b.title ? -1 : 1,);
          console.log(p);
          setProduct(p);
        }else if(value == "AtoZ"){
          const p = [...product].sort((a,b)=>a.title > b.title ? 1 : -1,);
          console.log(p);
          setProduct(p);
        }
        else if(value == "LtoH"){
          const p = [...product].sort((a,b)=>a.price - b.price );
          console.log(p);
          setProduct(p);
        }
        else if(value == "HtoL"){
          const p = [...product].sort((a,b)=>b.price - a.price );
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
      <Header />
      <div className="row-md-3">
        <div style={{ paddingTop: 1, color: "blue", marginLeft: 10 }}>
           <input type="text" placeholder="Search for products" onChange={(e) => {
                    setSearch(e.target.value);
                }} />
        </div>
      </div> 
      <div className=" mb-4 mt-2">
      <select  onChange={(e)=>{
        sorting(e.target.value);
      }} >
          <option value="" >SortBy</option>
          <option value="AtoZ" >Sort By Name (A to Z)</option>
          <option value="ZtoA">Sort By Name (Z to A)</option>
          <option value="LtoH">Sort By Price (Low to High)</option>
          <option value="HtoL">Sort By Price (High to Low)</option>
      </select>
     </div>  
     <div className=" mb-4 mt-2">
      <select value={type} onChange={(e)=>{category(e.target.value)}} >
        <option value="all" >All</option>
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
          }).map((product)=>{
                return(
          <ProductCard product={product} key={product._id}/>
              )
            })}
              
          
        </div>
      </section>
      </>
    );
}
export default ProductList;





              {/* <div
                className="modal fade right"
                id="modalCart"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
                data-backdrop="false"
              > */}
                {/* <div
                  className="modal-dialog modal-side modal-bottom-right modal-notify modal-info"
                  role="document"
                >
                  <div className="modal-content"> */}
                    {/* <div className="modal-header">
                      <p className="heading text-success">
                        Product is added to the cart
                      </p>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" className="white-text">
                          
                        </span>
                      </button>
                    </div> */}
                   {/*Footer*/}
                    {/* <div className="modal-footer justify-content-center">
                      <link type="button" className="btn btn-success" to="/cart" />
                      Go to cart
                      <a
                        type="button"
                        className="btn btn-outline-success waves-effect"
                        data-dismiss="modal"
                      >
                        Cancel
                      </a>
                    </div> */}
                  {/* </div> */}
                 {/*/.Content*/}
                  {/*Content*/}
                  {/* <div className="modal-content border border-warning border-50"> */}
                    {/*Header*/}
                    {/* <div className="modal-header">
                      <p className="heading text-dark">
                        Please Login or Signup to add products to the cart
                      </p>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" className="white-text">
                          
                        </span>
                      </button>
                    </div> */}
                   {/*Footer*/}
                    {/* <div className="modal-footer justify-content-center">
                      <a
                        type="button"
                        className="btn btn-warning"
                        routerlink="/login"
                      >
                        Login
                      </a>
                      <a
                        type="button"
                        className="btn btn-warning waves-effect"
                        routerlink="/signup"
                      >
                        Signup
                      </a>
                    </div> */}
                  {/* </div> */}
                  {/*/.Content*/} 
                {/* </div>
              </div> */}
