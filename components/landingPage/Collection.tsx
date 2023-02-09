import React from "react";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};

function Collection({ noService }: Props) {
  return (
    <div className=" px-1 w-screen h-auto py-1">
      <div className=" space-y-1">
        <div className="grid grid-rows-2 gap-y-1 md:gap-y-0 md:grid-cols-2 md:grid-rows-1 md:gap-x-1">
          <div
            onClick={noService}
            className="w-auto h-[80vh] md:h-[45vw] bg-gray-500 bg-LP-CollectionItem1 bg-cover flex  justify-center group cursor-pointer"
          >
            <p className=" font-extrabold mt-[20vw] md:mt-[6vw] opacity-0 translate-y-6  duration-700 group-hover:translate-y-0 group-hover:opacity-100 text-6xl md:text-4xl lg:text-5xl xl:text-7xl">
              GRECA
            </p>
          </div>
          <div
            onClick={noService}
            className="w-auto h-[80vh] md:h-[45vw] bg-gray-200 bg-LP-CollectionItem2 bg-cover flex justify-center items-end group cursor-pointer"
          >
            <p className=" text-white  font-extrabold mb-[20vw] md:mb-[6vw] opacity-0  -translate-y-6  duration-700 group-hover:translate-y-0 group-hover:opacity-100 text-6xl md:text-4xl lg:text-5xl xl:text-7xl">
              BAROCCO
            </p>
          </div>
        </div>
        <div
          onClick={noService}
          className="w-auto h-[60vw] md:h-[40vw] bg-gray-400 bg-LP-CollectionItem3 bg-cover group flex items-center justify-center md:justify-end cursor-pointer"
        >
          <p className=" text-white  font-extrabold md:mr-[20vw] opacity-0  -translate-x-6  duration-700 group-hover:translate-x-0 group-hover:opacity-100 text-4xl md:text-6xl xl:text-7xl">
            T1 DAILY
          </p>
        </div>
        <div
          onClick={noService}
          className="w-auto h-[40vw] md:h-[20vw] bg-gray-700 bg-LP-Shopnow bg-cover flex items-center justify-center cursor-pointer"
        >
          <p className="text-white  font-extrabold opacity-100 text-4xl md:text-6xl xl:text-7xl">
            Shop now
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
