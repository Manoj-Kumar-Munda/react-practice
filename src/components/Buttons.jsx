import { BookmarkIcon, ChevronDownIcon, ChevronUpIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Buttons = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="relative border flex items-center rounded-lg border-slate-800">
        <span className="px-8 py-2 border-r-2">Cart</span>
        <span className="relative px-2 py-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {
                (isOpen) ? <ChevronUpIcon width={20} /> : <ChevronDownIcon width={20} />
            }
             {
            isOpen && (
                <div className="absolute bg-white left-0 border rounded-md py-1 shadow-xl bottom-8 w-max flex flex-col space-y-1">
                    <button className="px-2 py-1 hover:bg-blue-500 hover:text-white flex items-center space-x-2">
                        <ShoppingCartIcon width={20} />
                        <span className="text-sm font-semibold">Checkout</span>
                    </button>
                    <button className="px-2 py-1 hover:bg-blue-500 hover:text-white flex items-center space-x-2">
                        <ShoppingBagIcon width={20}/>

                        <span className="text-sm font-semibold">Quick Pay</span>
                       
                    </button>
                    <button className="px-2 py-1 hover:bg-blue-500 hover:text-white flex items-center space-x-2">
                        <BookmarkIcon width={20}/>
                        <span className="text-sm font-semibold">Save for later</span>
                        
                    </button>
                </div> 

            )

        }

            
        </span>
       
      </div>
    </div>
  );
};

export default Buttons;
