import React, { useRef, useEffect } from "react";

const UseCustomPen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cx = canvas.getContext("2d");
    cx.clearRect(0, 0, canvas.width, canvas.height);

    // Move origin to center for easier rotation
    cx.save();
    cx.translate(200, 250);
    cx.rotate(30 * Math.PI / 180); // tilt like FontAwesome pen (~-30deg)

    // Pen body
    cx.beginPath();
    cx.rect(-10, -80, 20, 100); // thin rectangle
    cx.fillStyle = "#fff";
    cx.fill();
    cx.closePath();

    // Pen tip
    cx.beginPath();
    cx.moveTo(-10, 20);
    cx.lineTo(0, 40);
    cx.lineTo(10, 20);
    cx.closePath();
    cx.fillStyle = "#3b82f6"; // blue nib
    cx.fill();

   

    cx.restore();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ background: "none", position: "absolute" }}
    />
  );
};

export default UseCustomPen;
