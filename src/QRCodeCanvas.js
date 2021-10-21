import React from "react";

export default function QRCodeCanvas({ text }) {
  const canvasRef = useRef();

  return (
    <div>
      <canvas ref={canvasRef} id="canvas"></canvas>
    </div>
  );
}
