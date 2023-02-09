import React, { useEffect, useRef, useState } from "react";
import {
  MagnifyingGlassIcon,
  RectangleGroupIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};

function Nav({ noService }: Props) {
  return (
    <div className=" fixed top-0 w-screen text-white flex justify-between pt-5 pb-10 bg-gradient-to-b from-black to-transparent items-center px-4 md:pl-10 md:pr-14 ">
      <div className=" space-y-[3px] md:hidden cursor-pointer">
        <div className="w-5 h-[3px] bg-white"></div>
        <div className="w-5 h-[3px] bg-white"></div>
        <div className="w-5 h-[3px] bg-white"></div>
      </div>
      <div
        onClick={() => {
          location.reload();
        }}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <RectangleGroupIcon className="w-6 hidden md:block" />
        <p className=" font-extrabold text-lg">SALFIYAH</p>
      </div>
      <nav className="md:hover:text-gray-500 duration-300 absolute top-16 text-black flex-col hidden md:static md:text-white md:flex-row md:flex md:space-x-10 font-bold">
        <p
          onClick={noService}
          className=" bg-white  px-2 py-1  rounded-t-lg  md:p-0  md:bg-transparent cursor-pointer md:hover:text-white"
        >
          HIJAB
        </p>
        <p
          onClick={noService}
          className=" bg-white  px-2 py-1 md:p-0  md:bg-transparent cursor-pointer md:hover:text-white"
        >
          CLOTHES
        </p>
        <p
          onClick={noService}
          className=" bg-white  px-2 py-1 md:p-0  md:bg-transparent cursor-pointer md:hover:text-white"
        >
          PANTS
        </p>
        <p
          onClick={noService}
          className=" bg-white  px-2 py-1 md:p-0  md:bg-transparent cursor-pointer md:hover:text-white"
        >
          NEWS
        </p>
        <p
          onClick={noService}
          className=" bg-white  px-2 py-1 rounded-b-lg md:p-0  md:bg-transparent cursor-pointer md:hover:text-white"
        >
          GALLERY
        </p>
      </nav>
      <div className="flex space-x-6 hover:text-gray-400 duration-300">
        <div onClick={noService}>
          <MagnifyingGlassIcon className="w-6 cursor-pointer hidden md:block hover:text-white" />
        </div>
        <div onClick={noService}>
          <ShoppingBagIcon className="w-6 cursor-pointer hover:text-white" />
        </div>
        <div onClick={noService}>
          <UserCircleIcon className="w-6 cursor-pointer hidden md:block hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
