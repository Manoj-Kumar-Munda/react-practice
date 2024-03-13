import { faSliders, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const RadioButton = () => {
  const [showSortList, setShowSortList] = useState(false);

  const [sortBy, setSortBy] = useState("relevance");

  const handleOnChange = (e) => {
    setSortBy(e.target.value);
  };

  console.log(sortBy);
  return (
    <div className="my-10 mx-auto max-w-xl">
      <button
        className="cursor-pointer px-2 inline-flex gap-3 justify-between border-2 border-blue-950 items-center"
        onClick={() => setShowSortList(!showSortList)}
      >
        <span className="text-blue-950 text-lg font-semibold">Sort</span>
        <FontAwesomeIcon icon={faSort} />
      </button>
      <form>
        <div className="relative ">
          {showSortList ? (
            <div className="absolute left-0 top-0 border shadow-xl px-2 bg-white">
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="relevance"
                  name="sortBy"
                  checked={sortBy === "relevance"}
                  className ={`appearance-none w-3 h-3 rounded-full ring-2 ring-slate-300 focus:ring-2 focus:ring-orange-500 ring-offset-2 ${sortBy === 'relevance'?'bg-orange-500 ring-orange-500':'bg-white'}` }
                  
                  onChange={(e) => handleOnChange(e)}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-orange-500 dark:text-orange-500"
                >
                  Relevance
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked={sortBy === "rating"}
                  id="rating"
                  type="radio"
                  value="rating"
                  name="sortBy"
                  onChange={(e) => handleOnChange(e)}
                  className ={`appearance-none w-3 h-3 rounded-full ring-2 ring-slate-300 focus:ring-2 focus:ring-orange-500 ring-offset-2 ${sortBy === 'rating'?'bg-orange-500 ring-orange-500':'bg-white'}` }
                  
                />
                <label
                  htmlFor="rating"
                  class="ml-2 text-sm font-medium text-orange-500 dark:text-orange-500"
                >
                  Checked state
                </label>
              </div>
            </div>
          ) : null}
        </div>
      </form>

      {sortBy === "relevance" ? <h1>Relevance</h1> : <h1>Rating</h1>}
    </div>
  );
};

export default RadioButton;
