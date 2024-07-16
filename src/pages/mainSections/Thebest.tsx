import React from "react";
import ProductItem from "../../components/ProductItem";

function Thebest() {
  return (
    <div id="thebestcont" className="  ">
      <div id="cont" className="d-flex justify-content-center"> 
        <div className="  d-flex   h-100 "> 
        <div className="container " > 
            <div className=" thebestmin position-relative  align-items-center" style={{height:180}}>
            <h3 className="  start-0" style={{fontSize:55}}>The best of the best</h3>
            <button id="signupbutton" className=" " >Sign up now</button>
            </div>
            <div id="thebest" className=" mt-5">
            <img id="backlights" src="./assets/Backlights.png"  alt="" />
            <div id="productsdiv" className="d-flex justify-content-between  ">
              <ProductItem imgurl="./assets/Picture.png"></ProductItem> 
              <ProductItem imgurl="./assets/Picture (1).png"></ProductItem>
              <ProductItem imgurl="./assets/Picture (2).png"></ProductItem>
 
            </div>
          </div>  
        </div>
        </div>
      </div>
    </div>
  );
}

export default Thebest;
