import React, { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItem = ({ items ,depthLevel}) => {
    const [dropdown, setDropdown] = useState(false);
  return (
    <li className="relative cursor-pointer">
      {items.submenu ? (
        <>
            <button
                className="whitespace-nowrap"
                type="button"
                onClick={() => setDropdown( (prev) => !prev)}            
            >
                {items.title}{' '}
                {depthLevel > 0 ? <span>➡️</span> : <span>⬇️</span>}


            </button>
            <Dropdown submenus={items.submenu} dropdown ={dropdown} depthLevel={depthLevel}/>
        </>
      ) : (
        <span className="cursor-pointer">{items.title}</span>
      )}
    </li>
  );
};

export default MenuItem;
