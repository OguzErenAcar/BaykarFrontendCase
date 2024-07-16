import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navi() {
  return (  
      <div id="navi"   className="d-flex align-items-center w-100  container   ">
        <div className="w-100">
          <label >Collers</label>
        </div>
        <div id="list" className="   d-flex   justify-content-end align-items-center">
            <Link  to="/" className="  navmenu">Products</Link>  
            <Link  to="/" className="  navmenu">Solutions</Link>  
            <Link  to="/" className=" navmenu">Pricing</Link>  
            <Link  to="/" className=" navmenu">Resources</Link>  
            <Link  to="/" className="  navmenu">Log In</Link>   
             <button  type="button"  >Sign up now</button>  
        </div>
      </div> 
  );
}

export default Navi;
