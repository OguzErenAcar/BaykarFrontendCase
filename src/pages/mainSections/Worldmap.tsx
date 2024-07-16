import React from "react";

function Worldmap() {
  return (
    <div id="worldmap" className="position-relative d-flex justify-content-center " style={{ height:717, backgroundColor: "#78350f" }}>
      <div>asf</div>
     



      <img
        style={{ height:"100%", backgroundColor: "#78350f" }}
        className="  position-absolute z-0"
        src="./assets/chart.png"
        alt=""
      />
           <img
          className="h-75 ps-4 mt-3 ms-5 position-absolute z-1"
          src="./assets/Ellipses.png"
          alt=""
        />
     <div  className="  text-white h-100  d-flex  align-items-center position-absolute  z-2">
          <div >
          <label className="d-block" id="headline1">11,658,467</label>
        <label className="d-block" id="headline2">Shoes Collected</label>
          </div>

      </div>

    </div>
  );
}

export default Worldmap;
