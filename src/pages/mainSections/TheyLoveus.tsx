import React ,{useEffect, useState,useRef} from "react"; 
import CommentsItems from "../../components/CommentsItems";
 
function TheyLoveus() { 


  const [Right,setRigh]=useState(0);
  const [Left,setLeft]=useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  
  const RighthandleMouseDown = () => {
    if (intervalRef.current) return;
       intervalRef.current = setInterval(() => {
      setRigh(count=>count+1); 
    }, 10);
  };

  const RighthandleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRigh(count=>count-1); 

    }
  };


  const LefthandleMouseDown = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => { 
      setLeft(count=>count+1);  
    }, 10);
  };

  const LefthandleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setLeft(count=>count-1); 

    }
  };
  return (
    <div id="theyloveus" className="position-relative" style={{ height: 732 }}>
              
      <div className=" container h-100 ">
        <div className="w-100">
          <div id="tittle" className=" mt-5 d-flex justify-content-between">
            <h2 >Because they love us</h2>
            <div id="buttons" style={{width:"9%"}} className="  justify-content-between">
              <button
              onMouseDown={LefthandleMouseDown} 
              onMouseUp={LefthandleMouseUp}
              onMouseLeave={LefthandleMouseUp}>
                {" "}
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 7H1H13.5ZM1 7L7 1L1 7ZM1 7L7 13L1 7Z"
                    fill="#78350F"
                  />
                  <path
                    d="M1 7L7 13M13.5 7H1H13.5ZM1 7L7 1L1 7Z"
                    stroke="#78350F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
              
              
              onMouseDown={RighthandleMouseDown} 
              onMouseUp={RighthandleMouseUp}
              onMouseLeave={RighthandleMouseUp}>
                {" "}
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13.5H1ZM13.5 7L7.5 1L13.5 7ZM13.5 7L7.5 13L13.5 7Z"
                    fill="#78350F"
                  />
                  <path
                    d="M13.5 7L7.5 13M1 7H13.5H1ZM13.5 7L7.5 1L13.5 7Z"
                    stroke="#78350F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div id="scrolllist" className="position-relative mt-5 w-100  ">
            <div id="yellowbg"></div>
          </div>
        </div>
      <CommentsItems left={Left} right={Right} />
      </div>
    </div>
  );
}

export default TheyLoveus;
