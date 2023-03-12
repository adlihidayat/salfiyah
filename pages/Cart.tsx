import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  backHome: (event: React.MouseEvent<HTMLElement>) => void;
};

function Cart({ backHome }: Props) {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center space-y-5">
      <ShoppingCartIcon className="w-14" />
      <p className=" text-xl">You haven't add any item</p>
      <button
        onClick={backHome}
        className=" border border-black px-5 py-2 duration-300 hover:bg-black hover:text-white "
      >
        BACK TO STORE
      </button>
    </div>
  );
}

export default Cart;
