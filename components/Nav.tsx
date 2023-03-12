import React, { useEffect, useRef, useState } from "react";
import {
  MagnifyingGlassIcon,
  RectangleGroupIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
  hijabs: (event: React.MouseEvent<HTMLElement>) => void;
  clothes: (event: React.MouseEvent<HTMLElement>) => void;
  pants: (event: React.MouseEvent<HTMLElement>) => void;
  Cart: (event: React.MouseEvent<HTMLElement>) => void;
  News: (event: React.MouseEvent<HTMLElement>) => void;
  Gallery: (event: React.MouseEvent<HTMLElement>) => void;
  navStatus: any;
};

// 403570061004-3kuhlc7naqtv8v1rjelru82klh92ooss.apps.googleusercontent.com

function Nav({
  noService,
  clothes,
  navStatus,
  pants,
  hijabs,
  Cart,
  News,
  Gallery,
}: Props) {
  const [isNavHidden, setIsNavhidden] = useState(false);
  const [width, setWidth] = useState(1620);
  const [data, setData] = useState<any>();
  const hijab = () => {
    hijabs;
    setIsNavhidden(false);
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      setData(userInfo.data);
      console.log(data);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsNavhidden(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, [width]);

  // console.log(isNavHidden);

  return (
    <div className=" z-50 fixed top-0 w-screen text-white flex justify-between pt-5 pb-5 bg-gradient-to-b from-black to-transparent items-center pr-0 pl-6 md:pl-10 md:pr-14 ">
      <div
        className=" space-y-[3px] md:hidden cursor-pointer"
        onClick={() => setIsNavhidden(!isNavHidden)}
      >
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
      {isNavHidden && (
        <nav className=" absolute top-16 text-black text-center md:hidden">
          <p
            onClick={hijabs}
            className={` ${
              navStatus === "hijabs" && "text-yellow-500"
            } bg-white py-2 px-4 active:bg-slate-100 rounded-t-xl`}
          >
            HIJABS
          </p>
          <p
            onClick={clothes}
            className={` ${
              navStatus === "clothes" && "text-yellow-500"
            } bg-white py-2 px-4 active:bg-slate-100`}
          >
            CLOTHES
          </p>
          <p
            onClick={pants}
            className={` ${
              navStatus === "pants" && "text-yellow-500"
            } bg-white py-2 px-4 active:bg-slate-100`}
          >
            PANTS
          </p>
          <p
            onClick={News}
            className={` ${
              navStatus === "News" && "text-yellow-500"
            } bg-white py-2 px-4 active:bg-slate-100`}
          >
            NEWS
          </p>
          <p
            onClick={Gallery}
            className={` ${
              navStatus === "Gallery" && "text-yellow-500"
            } bg-white py-2 px-4 active:bg-slate-100 rounded-b-xl`}
          >
            GALLERY
          </p>
        </nav>
      )}
      <nav className=" hidden md:flex space-x-10 text-white font-bold hover:text-gray-500">
        <p
          onClick={hijabs}
          className={`${
            navStatus === "hijabs" && "text-yellow-500"
          } hover:text-white`}
        >
          HIJABS
        </p>
        <p
          onClick={clothes}
          className={`${
            navStatus === "clothes" && "text-yellow-500"
          } hover:text-white`}
        >
          CLOTHES
        </p>
        <p
          onClick={pants}
          className={`${
            navStatus === "pants" && "text-yellow-500"
          } hover:text-white`}
        >
          PANTS
        </p>
        <p
          onClick={News}
          className={`${
            navStatus === "News" && "text-yellow-500"
          } hover:text-white`}
        >
          NEWS
        </p>
        <p
          onClick={Gallery}
          className={`${
            navStatus === "Gallery" && "text-yellow-500"
          } hover:text-white`}
        >
          GALLERY
        </p>
      </nav>
      <div className="flex space-x-6 hover:text-gray-400 duration-300">
        <div onClick={noService}>
          <MagnifyingGlassIcon className="w-6 cursor-pointer hidden md:block hover:text-white" />
        </div>
        <div onClick={Cart}>
          <ShoppingBagIcon className="w-6 cursor-pointer hover:text-white" />
        </div>
        <div>
          {data ? (
            <img
              src={data.picture}
              alt=""
              className="w-6 h-6 rounded-full cursor-pointer hidden md:block"
            />
          ) : (
            <UserCircleIcon
              className="w-6 cursor-pointer hidden md:block hover:text-white"
              onClick={() => {
                login();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
