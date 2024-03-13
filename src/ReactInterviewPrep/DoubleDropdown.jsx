import React, { useState } from "react";
import { countries } from "../utils/constants";

const DoubleDropdown = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  console.log(selectedItemIndex);
  console.log(countries[selectedItemIndex]);
  return (
    <>
      <select value={selectedItemIndex} onChange={(e) => setSelectedItemIndex(e.target.value)}>
        {countries.map((item, index) => (
          <option
            key={index}
            value={index}
          >
            {item.name}
          </option>
        ))}
      </select>

      {
        (selectedItemIndex !== null) && (
            <select>
                {
                    countries[selectedItemIndex].cities.map((item,index) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                }
            </select>
        )
      }
    </>
  );
};

export default DoubleDropdown;
