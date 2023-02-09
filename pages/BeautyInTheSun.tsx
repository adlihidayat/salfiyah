import React from "react";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};

function BeautyInTheSun({ noService }: Props) {
  return (
    <div className=" w-screen h-auto py-40 bg-white flex flex-col items-center justify-center space-y-20">
      <div className=" flex flex-col items-center justify-center w-80 sm:w-[600px] md:w-[700px] lg:w-[1000px] space-y-5">
        <h1 className=" text-2xl sm:text-4xl lg:text-6xl font-extrabold border-b-4 border-orange-400 pb-5">
          BEAUTY IN THE SUN
        </h1>
        <p className=" lg:text-lg text-center ">
          Combining recurrent themes seen throughout Salfiyah’s girls
          collections, the Spring- Summer 2023 collection features bright
          colours, playful details, and oversized volumes, elevating the symbols
          of childhood through the savoir-faire of the Maison.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
        <div
          className="h-[400px] w-96  flex flex-col items-center cursor-pointer"
          onClick={noService}
        >
          <div className=" duration-200 h-80 w-96 object-cover mb-2 bg-BITS-item1-1 hover:bg-BITS-item1-2 bg-cover" />
          <p className=" text-xl font-bold">Grecca’s hijab</p>
          <p>US$ 72.00</p>
        </div>
        <div
          className="h-[400px] w-96  flex flex-col items-center cursor-pointer"
          onClick={noService}
        >
          <div className=" duration-200 h-80 w-96 object-cover mb-2 bg-BITS-item2-1 hover:bg-BITS-item2-2 bg-cover" />
          <p className=" text-xl font-bold">Cardigan T1 daily</p>
          <p>US$ 92.00</p>
        </div>
        <div
          className="h-[400px] w-96  flex flex-col items-center cursor-pointer"
          onClick={noService}
        >
          <div className=" duration-200 h-80 w-96 object-cover mb-2 bg-BITS-item3-1 hover:bg-BITS-item3-2 bg-cover" />
          <p className=" text-xl font-bold">Overcoat Barocco</p>
          <p>US$ 132.00</p>
        </div>
        <div
          className="h-[400px] w-96  flex flex-col items-center cursor-pointer"
          onClick={noService}
        >
          <div className=" duration-200 h-80 w-96 object-cover mb-2 bg-BITS-item4-1 hover:bg-BITS-item4-2 bg-cover" />
          <p className=" text-xl font-bold">Trouser Laced</p>
          <p>US$ 102.00</p>
        </div>
      </div>
    </div>
  );
}

export default BeautyInTheSun;
