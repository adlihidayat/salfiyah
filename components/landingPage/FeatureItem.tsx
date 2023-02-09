import React from "react";

function FeatureItem({ beautyInTheSun }) {
  return (
    <div className=" w-screen h-screen bg-LP-FeatureItem bg-cover flex items-end justify-center">
      <div className=" text-white flex flex-col items-center space-y-5 mb-20">
        <p className=" text-4xl w-80 font-extrabold md:w-[700px] text-center md:text-7xl">
          BEAUTY IN THE SUN
        </p>
        <button
          onClick={beautyInTheSun}
          className="border border-white py-1 px-6  font-light rounded-3xl md:text-2xl hover:bg-white hover:text-black duration-300"
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default FeatureItem;
