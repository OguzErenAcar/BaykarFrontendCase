import React from "react";
import { MdOutlineDone } from "react-icons/md";

function WhyJoin() {
  return (
    <div>
      <div
        className="container   d-flex align-items-center"
        style={{
          backgroundColor: "#fffcf1",
          height: 818,
          position: "relative",
        }}
      >
        <img id="Deco" src="./assets/Deco-video.png" alt="" />
        <div 
          className=" container h-100 d-flex justify-content-center align-items-center"
        >
          <div id="whyjoincontent" className="z-1 w-100 align-items-center  d-flex">
            <div id="whyjointop" className=" d-flex align-items-center">
              <div className="w-100 d-flex justify-content-center">
                <div  >
                  <h1>Why Join us</h1>
                  <ul className="w-100 mt-5" style={{ listStyleType: "none" }}>
                    <li>
                      <MdOutlineDone style={{ color: "green" }} /> Est et in
                      pharetra magna adipiscing ornare aliquam.
                    </li>
                    <li>
                      {" "}
                      <MdOutlineDone style={{ color: "green" }} /> Tellus arcu
                      sed consequat ac velit ut eu blandit.
                    </li>
                    <li>
                      {" "}
                      <MdOutlineDone style={{ color: "green" }} /> Ullamcorper
                      ornare in et egestas dolor orci.
                    </li>
                  </ul>
                  <div id="btndiv">
                   <button>Sign up now</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="whyjoinbot" className="  d-flex align-items-center justify-content-center">
              <iframe
                className="w-75 h-50"
                src="https://www.youtube.com/embed/O-JXUhhIRHU"
                allow="autoplay; encrypted-media"
                title="video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyJoin;
