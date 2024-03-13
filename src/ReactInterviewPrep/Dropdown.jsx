import React from "react";
import MenuItem from "./MenuItem";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  console.log(depthLevel);
  return (
    <ul
      className={`absolute top-full ${depthLevel>1?"left-nav-left-1":"left-nav-left-0"}
     mx-4 bg-white border px-2 rounded-xl pt-2 pb-4 ${
       dropdown ? "" : "hidden"
     }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItem items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
