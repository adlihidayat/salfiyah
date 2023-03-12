import React from "react";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};

function News({ noService }: Props) {
  return (
    <div className=" relative  w-screen h-[150vh] md:h-screen bg-gray-700 text-white flex flex-col items-center justify-center space-y-20">
      <h1 className=" z-10 text-7xl font-thin">NEWS</h1>
      <div className=" z-10 flex flex-col items-center space-y-10">
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-36">
          <div
            className="flex flex-col items-center space-y-5 group hover:cursor-pointer"
            onClick={noService}
          >
            <img
              src="./news/news-item1.webp"
              alt=""
              className="w-96 h-60 object-cover duration-200 group-hover:w-[410px] group-hover:h-64"
            />
            <p className=" w-60 text-center group-hover:underline">
              2022/2023 METIERS D'ART SHOW
            </p>
          </div>
          <div
            className="flex flex-col items-center space-y-5 group hover:cursor-pointer"
            onClick={noService}
          >
            <img
              src="./news/news-item2.webp"
              alt=""
              className="w-96 h-60 object-cover duration-200 group-hover:w-[410px] group-hover:h-64"
            />
            <p className=" w-60 text-center group-hover:underline">
              FASHION TECH SERIES: SUPPLY CHAIN TRANSFORMATION
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center space-y-5 group hover:cursor-pointer"
          onClick={noService}
        >
          <img
            src="./news/news-item3.webp"
            alt=""
            className="w-96 h-60 object-cover duration-200 group-hover:w-[410px] group-hover:h-64"
          />
          <p className=" w-60 text-center group-hover:underline">
            INDONESIAN FASHION WEEK (IFW)
          </p>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        src="/news-bg.mp4"
        className=" -top-20 absolute h-[150vh] md:h-screen w-screen z-0 object-cover"
      />
    </div>
  );
  //   <p></p>
  //   <p> /p>
}

export default News;
