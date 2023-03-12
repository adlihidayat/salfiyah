import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};

function Highlight({ noService }: Props) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1150) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 750) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    });
  }, []);

  // console.log(isEnd);

  return (
    <div className=" h-screen flex flex-col items-center justify-center space-y-10 md:space-y-20">
      <h1 className=" text-2xl md:text-5xl font-bold">HIGHLIGHTS</h1>
      <div className="w-[90vw]  2xl:w-[70vw] flex space-x-3 md:space-x-6">
        <ArrowLeftIcon
          className={` w-24 md:w-12 ${isEnd ? "text-black" : "text-gray-300"}`}
        />
        <Swiper
          spaceBetween={5}
          slidesPerView={slidesPerView}
          onReachEnd={() => setIsEnd(true)}
          onReachBeginning={() => setIsEnd(false)}
        >
          <SwiperSlide>
            <div onClick={noService}>
              <div className="w-auto h-96 bg-gray-300 bg-LP-HIghlightsItem1 bg-cover cursor-pointer"></div>
              <p className="cursor-pointer font-bold text-xl">Greca blazers</p>
              <p className="cursor-pointer">US$ 150.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={noService}>
              <div className="w-auto h-96 bg-gray-300 bg-LP-HIghlightsItem2 bg-cover cursor-pointer"></div>
              <p className="cursor-pointer font-bold text-xl">Barocco hijabs</p>
              <p className="cursor-pointer">US$ 820.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={noService}>
              <div className="w-auto h-96 bg-gray-300 bg-LP-HIghlightsItem3 bg-cover cursor-pointer"></div>
              <p className="cursor-pointer font-bold text-xl">T1 daily</p>
              <p className="cursor-pointer">US$ 100.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={noService}>
              <div className="w-auto h-96 bg-gray-300 bg-LP-HIghlightsItem4 bg-cover cursor-pointer"></div>
              <p className="cursor-pointer font-bold text-xl">Laced pant</p>
              <p className="cursor-pointer">US$ 120.00</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <ArrowRightIcon
          className={` w-24 md:w-12 ${isEnd ? "text-gray-300" : "text-black"}`}
        />
      </div>
    </div>
  );
}

export default Highlight;
