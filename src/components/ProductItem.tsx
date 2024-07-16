import React from "react";
import { BsCart2 } from "react-icons/bs";

function ProductItem({ imgurl }: { imgurl?: string }) {
  return (
    <div id="product" className="d-flex justify-content-center">
     <div id="productdiv"> 
        <img src={imgurl} alt="" />
        <div className="d-flex justify-content-center ">
            <div className="w-75">
        <h4 className="mt-5">Title</h4>
        <p className="mt-3">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
        <button className="w-100"> <BsCart2 className="me-3" /> Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
