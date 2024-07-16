import React from "react";

interface CommentItemProps {
  productName: string;
  comment: string;
  name: string;
  job: string;
}

function CommentItem({ productName, comment, name, job }: CommentItemProps) {
  return (
    <div className="h-100 d-flex align-items-center justify-content-start">
      <div className=" ms-5 h-75 w-75 position-relative">
        <div style={{marginTop:20}}> 
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16343 0 0 7.16345 0 16C0 24.8366 7.16343 32 16 32ZM20.9915 7.45348C21.2344 6.59044 20.3969 6.08011 19.632 6.62504L8.9545 14.2317C8.12498 14.8226 8.25546 16 9.1505 16H11.9622V15.9782H17.442L12.977 17.5537L11.0086 24.5466C10.7656 25.4096 11.6031 25.9199 12.368 25.375L23.0455 17.7684C23.8751 17.1774 23.7445 16 22.8496 16H18.5857L20.9915 7.45348Z"
              fill="#475569"
            />
          </svg>
          <label id="productname" className="ms-3" >{productName}</label>
        </div>
        <div id="comment" style={{marginTop:60}}>
          {comment}
        </div>
        <div style={{position:"absolute",bottom:0 ,width:"100%"}}>
        <div className="d-flex align-items-center   ">
      <img
        style={{ width: 64 }}
        src="https://thiladhun.com/wp-content/uploads/2020/02/DEMO-PP.png"
        alt="Profile"
      />
      <div className="ms-3">
        <div id="name">{name}</div>
        <div id="job">{job}</div>
      </div>
    </div>
            
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
