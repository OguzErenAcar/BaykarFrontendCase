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
          id="whyjoincont"
          className=" container h-100 d-flex justify-content-center align-items-center"
        >
          <div id="whycoincontent" className="z-1 w-100   d-flex">
            <div className="w-50 d-flex align-items-center">
              <div className="w-100 d-flex justify-content-center">
                <div>
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
                  <button>Sign up now</button>
                </div>
              </div>
            </div>
            <div className="w-50  d-flex align-items-center justify-content-center">
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
