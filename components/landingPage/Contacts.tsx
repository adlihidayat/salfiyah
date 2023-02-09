import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};

function Contacts({ noService }: Props) {
  return (
    <footer className=" w-screen h-80 flex flex-col items-center justify-evenly bg-black md:flex-row">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex flex-col items-center">
          <RectangleGroupIcon className="w-14 text-white" />
          <p className="text-white font-bold text-lg md:text-2xl">SALFIYAH</p>
        </div>
        <div className="flex">
          <SocialIcon
            bgColor="black"
            fgColor="white"
            className=" text-white "
            network="twitter"
          />
          <SocialIcon
            bgColor="black"
            fgColor="white"
            className=" text-white "
            network="instagram"
          />
          <SocialIcon
            bgColor="black"
            fgColor="white"
            className=" text-white "
            network="facebook"
          />
          <SocialIcon
            bgColor="black"
            fgColor="white"
            className=" text-white "
            network="youtube"
            onClick={() => console.log("aaa")}
          />
        </div>
      </div>
      <div className="flex space-x-10">
        <div className="md:flex md:space-x-10">
          <p
            onClick={noService}
            className=" text-base md:text-2xl text-white cursor-pointer duration-300 hover:text-slate-400"
          >
            About
          </p>
          <p
            onClick={noService}
            className=" text-base md:text-2xl text-white cursor-pointer duration-300 hover:text-slate-400"
          >
            Store
          </p>
          <p
            onClick={noService}
            className=" text-base md:text-2xl text-white cursor-pointer duration-300 hover:text-slate-400"
          >
            Contacts
          </p>
        </div>
        <div className="md:flex md:space-x-10">
          <p
            onClick={noService}
            className=" text-base md:text-2xl text-white cursor-pointer duration-300 hover:text-slate-400"
          >
            FAQ
          </p>
          <p
            onClick={noService}
            className=" text-base md:text-2xl text-white cursor-pointer duration-300 hover:text-slate-400"
          >
            App
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contacts;
