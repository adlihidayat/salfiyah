import React from "react";

function Highlight() {
  return (
    <div className=" w-screen h-screen bg-white flex flex-col items-center justify-center space-y-10 md:space-y-36">
      <h1 className=" text-2xl md:text-5xl font-bold">HIGHLIGHTS</h1>
      <div className="flex w-[85vw] justify-start space-x-5 overflow-x-scroll 2xl:w-auto 2xl:overflow-x-hidden">
        <div>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem1 bg-cover cursor-pointer"></div>
          <p>Greca blazers</p>
          <p>US$ 120.00</p>
        </div>
        <div>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem2 bg-cover cursor-pointer"></div>
          <p>Greca blazers</p>
          <p>US$ 120.00</p>
        </div>
        <div>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem3 bg-cover cursor-pointer"></div>
          <p>Greca blazers</p>
          <p>US$ 120.00</p>
        </div>
        <div>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem4 bg-cover cursor-pointer"></div>
          <p>Greca blazers</p>
          <p>US$ 120.00</p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
