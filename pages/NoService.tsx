import { SignalSlashIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  backHome: (event: React.MouseEvent<HTMLElement>) => void;
};

function NoService({ backHome }: Props) {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center space-y-10">
      <SignalSlashIcon className="w-16" />
      <p className=" text-4xl">NO SERVICE</p>
      <button
        onClick={backHome}
        className=" border border-black px-5 py-2 duration-300 hover:bg-black hover:text-white "
      >
        BACK TO HOME
      </button>
    </div>
  );
}

export default NoService;
