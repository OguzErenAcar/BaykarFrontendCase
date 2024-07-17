import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
 
function Navi() {

  const [enabled,setEnabled]=useState(false)
 

  return (  
      <div id="navi"   className="position-relative d-flex align-items-center w-100  container   ">
        <div className="w-100">
          <label >Collers</label>
        </div>
         <button onClick={()=>{setEnabled(i=>!i)}} id="menubtn"><IoMenu /></button>
         <div className={`menu ${enabled ? 'active' : ''}`}>
            <div className="d-flex">
            <Link  to="/" className="  ">Products</Link>  
            <Link  to="/" className="   ">Solutions</Link>  
            <Link  to="/" className="  ">Pricing</Link>  
            <Link  to="/" className="  ">Resources</Link>  
            <Link  to="/" className="   ">Log In</Link> 
            </div>
          </div>
       
        <div id="list" className="     justify-content-end align-items-center">
            <Link  to="/" className="   ">Products</Link>  
            <Link  to="/" className="   ">Solutions</Link>  
            <Link  to="/" className="  ">Pricing</Link>  
            <Link  to="/" className="  ">Resources</Link>  
            <Link  to="/" className="   ">Log In</Link>   
             <button  id="signupbtn" type="button"  >Sign up now</button>  
        </div>
      </div> 
  );
}

export default Navi;
