import { useEffect, useRef, useState } from "react";
import CommentItem from "./CommentItem";


interface commentsProps{
  left:number,
  right:number

}

function CommentsItems(  { left,right}:commentsProps) {
  const sliderItems = [
    {
      id: 0,
      productName: "productname",
      comment:
        "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      name: "NAME0",
      job: "JOB0",
    },
    {
      id: 1,
      productName: "productname",
      comment:
        "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      name: "NAME1",
      job: "JOB1",
    },
    {
      id: 2,
      productName: "productname",
      comment:
        "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      name: "NAME2",
      job: "JOB2",
    },
    {
      id: 3,
      productName: "productname",
      comment:
        "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      name: "NAME3",
      job: "JOB3",
    },
    {
      id: 4,
      productName: "productname",
      comment:
        "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      name: "NAME4",
      job: "JOB4",
    },
    {
      id: 5,
      productName: "productname",
      comment:
        "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      name: "NAME5",
      job: "JOB5",
    },
  ];
  const itemsRef = useRef(document.createElement("div"))
  const [isMouseDown, setisMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(0);
  const [walk, setwalk] = useState(0);

  let scrollTimeout:number;

  useEffect(() => {
    console.log("leftCounter")
   itemsRef.current.scrollLeft=itemsRef.current.scrollLeft+10

  }, [left]);
 
  useEffect(() => {
    console.log("rightCounter")
   itemsRef.current.scrollLeft=itemsRef.current.scrollLeft-10

  }, [right]);

  const slider = () => {
    const handleonMouseDown = (e:any) => {
      console.log(e);
      setisMouseDown(true);
      setStartX(e.pageX - -itemsRef.current.offsetLeft);
      setscrollLeft(
        itemsRef.current.scrollLeft - itemsRef.current.offsetLeft * 2
      );
      clearTimeout(scrollTimeout);
    };
    const handleonMouseMove = (e:any) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - itemsRef.current.offsetLeft;
      //console.log(x - startX)
       setwalk(x - startX);
      itemsRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleonMouseLeave = () => {
      setisMouseDown(false);
    };
    const handleonMouseUp = () => {
      setisMouseDown(false);
    };

    return (
      <div
        id="sample_item"
        ref={itemsRef}
        onMouseDown={handleonMouseDown}
        onMouseLeave={handleonMouseLeave}
        onMouseUp={handleonMouseUp}
        onMouseMove={handleonMouseMove}
      >
        {sliderItems.map((item) => (
          <div>
            <div className="sample_img">
              <div
                style={{
                  marginTop: 30,
                  boxShadow:
                    "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.07)",
                  borderRadius: "20px",
                  backgroundColor: "rgb(255 255 255)",
                  width: 384,
                  height: 430,
                  marginRight: 30,
                }}
              >
                <CommentItem
                  productName={item.productName}
                  comment={item.comment}
                  name={item.name}
                  job={item.job}
                ></CommentItem>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="slider">{slider()}</div>
    </div>
  );
}

export default CommentsItems;
