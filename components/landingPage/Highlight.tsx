import React from "react";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};

function Highlight({ noService }: Props) {
  return (
    <div className=" w-screen h-screen bg-white flex flex-col items-center justify-center space-y-10 md:space-y-36">
      <h1 className=" text-2xl md:text-5xl font-bold">HIGHLIGHTS</h1>
      <div className="flex w-[85vw] justify-start space-x-5 overflow-x-scroll 2xl:w-auto 2xl:overflow-x-hidden">
        <div onClick={noService}>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem1 bg-cover cursor-pointer"></div>
          <p className="cursor-pointer font-bold text-xl">Greca blazers</p>
          <p className="cursor-pointer">US$ 150.00</p>
        </div>
        <div onClick={noService}>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem2 bg-cover cursor-pointer"></div>
          <p className="cursor-pointer font-bold text-xl">Barocco hijabs</p>
          <p className="cursor-pointer">US$ 820.00</p>
        </div>
        <div onClick={noService}>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem3 bg-cover cursor-pointer"></div>
          <p className="cursor-pointer font-bold text-xl">T1 daily</p>
          <p className="cursor-pointer">US$ 100.00</p>
        </div>
        <div onClick={noService}>
          <div className="w-80 h-96 bg-gray-300 bg-LP-HIghlightsItem4 bg-cover cursor-pointer"></div>
          <p className="cursor-pointer font-bold text-xl">Laced pant</p>
          <p className="cursor-pointer">US$ 120.00</p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
