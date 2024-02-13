import React from "react";

export default function Middle() {
  return (
    <main className="main">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="bt">
            <button className="shop">Shop Now </button>
            <button className="cat">Catogory</button>
        </div>
        <p>Also Available On</p>
        <div className="fa">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
        </div>
      </div>

      <div className="shoe">
        <img src="/images/shoe_image.png" alt="SHOE" />
      </div>
    </main>
  );
}
