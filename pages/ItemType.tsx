import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  closeFilter: (event: React.MouseEvent<HTMLElement>) => void;
  isFilterActive: any;
};

const Filter = ({ closeFilter, isFilterActive }: Props) => {
  return (
    <div className=" absolute top-14 left-10 flex flex-col space-y-3 text-lg  bg-bg shadow-xl px-8 py-5 rounded-xl">
      <div className=" flex space-x-5">
        <div>
          <div className="flex space-x-3">
            <input type="checkbox" name="" id="" className=" cursor-pointer" />
            <p>brown</p>
          </div>
          <div className="flex space-x-3">
            <input type="checkbox" name="" id="" className=" cursor-pointer" />
            <p>pink</p>
          </div>
          <div className="flex space-x-3">
            <input type="checkbox" name="" id="" className=" cursor-pointer" />
            <p>blue</p>
          </div>
          <div className="flex space-x-3">
            <input type="checkbox" name="" id="" className=" cursor-pointer" />
            <p>green</p>
          </div>
        </div>
        <div>
          <div className="flex space-x-3">
            <input type="checkbox" name="" id="" />
            <p>jeans</p>
          </div>
          <div className="flex space-x-3">
            <input type="checkbox" name="" id="" />
            <p>wool</p>
          </div>
          <div className="flex space-x-3">
            <input type="checkbox" name="" id="" />
            <p>fabric</p>
          </div>
        </div>
      </div>
      <button
        onClick={closeFilter}
        className=" bg-gray-900 text-white hover:bg-gray-700 rounded-sm py-1"
      >
        apply Filter
      </button>
    </div>
  );
};

// const SortBy = ({ closeSortBy }: Props) => {
//   return (
//     <div className="absolute bg-white right-5 top-12 rounded-xl shadow-xl">
//       <p onClick={closeSortBy} className=" py-2 px-4 hover:bg-gray-100">
//         best seller
//       </p>
//       <p
//         onClick={closeSortBy}
//         className=" py-2 px-4 hover:bg-gray-100 rounded-t-xl"
//       >
//         new release
//       </p>
//       <p onClick={closeSortBy} className=" py-2 px-4 hover:bg-gray-100">
//         highest price
//       </p>
//       <p
//         onClick={closeSortBy}
//         className=" py-2 px-4 hover:bg-gray-100 rounded-b-xl"
//       >
//         lowest price
//       </p>
//     </div>
//   );
// };

function ItemType({ pic, title }: any) {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSortBy, setIsSortBy] = useState(false);
  const [sortByStatus, setSortByStatus] = useState("best seller");

  return (
    <div className="">
      <div
        className={`bg-clothes-bg h-96 md:h-[600px] w-screen flex items-center justify-center text-3xl md:text-5xl font-light text-white`}
      >
        {title}
      </div>
      <div className="flex justify-between px-10 py-5 text-gray-500 relative">
        <div
          onClick={() => setIsFilterActive(!isFilterActive)}
          className=" flex items-center space-x-3 cursor-pointer hover:text-gray-300 duration-100"
        >
          <Bars3BottomLeftIcon className=" h-5 md:h-8" />
          <p className="text-sm md:text-base">Filter</p>
        </div>
        {isFilterActive && (
          <Filter
            closeFilter={() => setIsFilterActive(false)}
            isFilterActive={isFilterActive}
          />
        )}
        <div
          onClick={() => setIsSortBy(!isSortBy)}
          className="flex space-x-1 cursor-pointer group text-sm md:text-base"
        >
          <p>sortby :</p>
          <p className=" group-hover:stext-gray-300">{sortByStatus}</p>
        </div>
        {isSortBy && (
          <div className="absolute bg-white right-5 top-12 rounded-xl shadow-xl">
            <p
              onClick={() => {
                setIsSortBy(false);
                setSortByStatus("best seller");
              }}
              className=" py-2 px-4 hover:bg-gray-100"
            >
              best seller
            </p>
            <p
              onClick={() => {
                setIsSortBy(false);
                setSortByStatus("new release");
              }}
              className=" py-2 px-4 hover:bg-gray-100 rounded-t-xl"
            >
              new release
            </p>
            <p
              onClick={() => {
                setIsSortBy(false);
                setSortByStatus("highest price");
              }}
              className=" py-2 px-4 hover:bg-gray-100"
            >
              highest price
            </p>
            <p
              onClick={() => {
                setIsSortBy(false);
                setSortByStatus("lowest price");
              }}
              className=" py-2 px-4 hover:bg-gray-100 rounded-b-xl"
            >
              lowest price
            </p>
          </div>
        )}
      </div>
      <div className=" pb-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-4 md:grid-crows-3 xl:grid-rows-2">
        <div className="w-auto h-[360px] md:h-[600px]  flex flex-col items-center ">
          <picture>
            <img
              src={`/${pic}/${pic}-item1.webp`}
              alt=""
              className=" h-72 md:h-[500px] w-screen object-cover"
            />
          </picture>
          <p className=" pt-2 md:pt-5 ">No stock</p>
        </div>
        <div className="w-auto h-[360px] md:h-[600px]  flex flex-col items-center ">
          <picture>
            <img
              src={`/${pic}/${pic}-item2.webp`}
              alt=""
              className=" h-72 md:h-[500px] w-screen object-cover"
            />
          </picture>
          <p className=" pt-2 md:pt-5 ">No stock</p>
        </div>
        <div className="w-auto h-[360px] md:h-[600px]  flex flex-col items-center ">
          <picture>
            <img
              src={`/${pic}/${pic}-item3.webp`}
              alt=""
              className=" h-72 md:h-[500px] w-screen object-cover"
            />
          </picture>
          <p className=" pt-2 md:pt-5 ">No stock</p>
        </div>
        <div className="w-auto h-[360px] md:h-[600px]  flex flex-col items-center ">
          <picture>
            <img
              src={`/${pic}/${pic}-item4.webp`}
              alt=""
              className=" h-72 md:h-[500px] w-screen object-cover"
            />
          </picture>
          <p className=" pt-2 md:pt-5 ">No stock</p>
        </div>
        <div className="w-auto h-[360px] md:h-[600px]  flex flex-col items-center ">
          <picture>
            <img
              src={`/${pic}/${pic}-item5.webp`}
              alt=""
              className=" h-72 md:h-[500px] w-screen object-cover"
            />
          </picture>
          <p className=" pt-2 md:pt-5 ">No stock</p>
        </div>
        <div className="w-auto h-[360px] md:h-[600px]  flex flex-col items-center ">
          <picture>
            <img
              src={`/${pic}/${pic}-item6.webp`}
              alt=""
              className=" h-72 md:h-[500px] w-screen object-cover"
            />
          </picture>
          <p className=" pt-2 md:pt-5 ">No stock</p>
        </div>
        <div className="w-auto h-[360px] md:h-[600px]  flex flex-col items-center ">
          <picture>
            <img
              src={`/${pic}/${pic}-item7.webp`}
              alt=""
              className=" h-72 md:h-[500px] w-screen object-cover"
            />
          </picture>
          <p className=" pt-2 md:pt-5 ">No stock</p>
        </div>
      </div>
    </div>
  );
}

export default ItemType;
