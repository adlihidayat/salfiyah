import React from "react";

function CollectionList() {
  return (
    <div className="w-screen h-auto pt-40 pb-1 ">
      <div className="flex flex-col items-center space-y-1">
        <h1 className=" text-4xl font-bold pb-5 mb-20 border-b-2 border-orange-300">
          COLLECTION LIST
        </h1>
        <div className="grid gap-y-1 md:gap-y-0 md:grid-cols-2 w-screen gap-x-1">
          <div className=" bg-LP-CollectionItem3 h-screen md:h-[800px] w-auto bg-cover flex flex-col justify-end items-center group cursor-pointer">
            <p className=" text-6xl font-extrabold text-white">T1 DAILY</p>
            <p className="bg-white group-hover:bg-black group-hover:text-white inline-block py-4 px-5 text-xl md:text-3xl mt-5 mb-[10vh] duration-300">
              SEE MORE
            </p>
          </div>
          <div className=" bg-LP-CollectionItem2 h-screen md:h-[800px] w-auto bg-cover flex flex-col justify-end items-center group cursor-pointer">
            <p className=" text-6xl font-extrabold text-white">BAROCCO</p>
            <p className="bg-white group-hover:bg-black group-hover:text-white inline-block py-4 px-5 text-xl md:text-3xl mt-5 mb-[10vh] duration-300">
              SEE MORE
            </p>
          </div>
        </div>
        <div className=" w-screen bg-LP-CollectionItem1 h-screen md:h-[800px] bg-cover flex flex-col justify-end md:justify-center items-center group cursor-pointer">
          <p className="text-6xl font-extrabold">GRECA</p>
          <p className=" bg-black group-hover:bg-white group-hover:text-black text-white inline-block py-4 px-5 text-xl md:text-3xl mt-5 mb-[10vh] md:mb-[30vh] duration-300">
            SEE MORE
          </p>
        </div>
        <div className=" w-screen bg-LP-CollectionItem4 h-screen md:h-[600px] bg-cover flex flex-col justify-center items-center group cursor-pointer">
          <p className=" text-6xl font-extrabold text-white">IVY</p>
          <p className="bg-white group-hover:bg-black group-hover:text-white inline-block py-4 px-5 text-xl md:text-3xl mt-5 mb-[10vh] duration-300">
            SEE MORE
          </p>
        </div>
        <div className=" w-screen bg-LP-CollectionItem5 h-screen md:h-[500px] bg-cover flex flex-col justify-center items-center xl:items-end group cursor-pointer">
          <div className="flex flex-col items-center xl:mr-[30vh]">
            <p className=" text-4xl md:text-6xl font-extrabold">MONOGRAM</p>
            <p className=" bg-black group-hover:bg-white group-hover:text-black text-white inline-block py-4 px-5 text-xl md:text-3xl mt-5  duration-300">
              SEE MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionList;
