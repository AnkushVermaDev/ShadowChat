import React, { useState ,useRef, useEffect } from "react";

const Pencil = ({top, left}) => {
  const canvasRef = useRef(null);
  

 const [resultfinalpos, setresultfinalpos] = useState(``)


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size (optional, otherwise default is 300x150)
    canvas.width =  50;
    canvas.height = 50;

    const startx = 50/2-10
    const starty = 50/2+20




    if (left==null) {

      setresultfinalpos(`${5}%`)


        
    }
    else{
         setresultfinalpos(`10%`)
         canvas.style.opacity = "1"   // ✅ correct way

         canvas.style.top='10px'


        }
    
    

    

    


    const width=  8
    const height= 20


    const cx = canvas.getContext("2d");

    

    // Draw a simple white line
    cx.beginPath();
    
    
     cx.rotate((19 * Math.PI) / 180);
     cx.translate(((startx/2/2)+10),-((startx/2/2))-40)

    cx.rect(startx, starty,width,height);


    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();



    cx.beginPath();

    cx.moveTo(startx,starty)
    cx.arc((startx+(width/2)),starty,(width/2),0,3,1*Math.PI)
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();



    cx.beginPath();
    cx.moveTo(startx,(starty+height))
    cx.lineTo(((startx+5)),(starty+height+10))
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.moveTo((startx+width),(starty+height))
    cx.lineTo(((startx+5)),(starty+height+10))
    cx.strokeStyle = "white";
    cx.lineWidth = 2;
    cx.stroke();
    cx.closePath();


  

     
   
  }, []);

  return (

<canvas
  ref={canvasRef}
  style={{
    position: "absolute",
    background: "transparent",
    right:  resultfinalpos

  }}
/>

   

  );
};

export default Pencil;
