import React, { useEffect, useRef } from "react";

const SendIcon = () => {
  const shareref = useRef(null);

  useEffect(() => {
    const canvas = shareref.current;
    if (!canvas) return;

    // Set canvas size
    canvas.width =  30;
    canvas.height = 30;

    const cx = canvas.getContext("2d");

    // Optional: clear before drawing
    cx.clearRect(0, 0, canvas.width, canvas.height);

    cx.beginPath();
    cx.moveTo(0, 0);
    cx.lineTo(30, 14);
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.moveTo(30, 14);
    cx.lineTo(0, 30);
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();


    // bottom left

    cx.beginPath();
    cx.moveTo(0,30);
    cx.lineTo(10, 18);
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.moveTo(10, 18);
    cx.lineTo(16, 15);
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();

    

   

    // top left
    
    cx.beginPath();
    cx.moveTo(0, 0);
    cx.lineTo(8, 12);
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.moveTo(8, 12);
    cx.lineTo(15, 15);
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();

    

  }, []); // run once after mount

  return (
    <canvas
      ref={shareref}
      style={{ background: "none", display: "block" }}
      className="cursor-pointer"
    />
  );
};

export default SendIcon;
