import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Navi() {
  return (  
      <div id="navi"   className="position-relative d-flex align-items-center w-100  container   ">
        <div className="w-100">
          <label >Collers</label>
        </div>
         <button id="menubtn"><IoMenu /></button>
        <div id="list" className="     justify-content-end align-items-center">
            <Link  to="/" className="  navmenu">Products</Link>  
            <Link  to="/" className="  navmenu">Solutions</Link>  
            <Link  to="/" className=" navmenu">Pricing</Link>  
            <Link  to="/" className=" navmenu">Resources</Link>  
            <Link  to="/" className="  navmenu">Log In</Link>   
             <button  id="signupbtn" type="button"  >Sign up now</button>  
        </div>
      </div> 
  );
}

export default Navi;
