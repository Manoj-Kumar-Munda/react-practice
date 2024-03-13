import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [val, setVal] = useState(1);

  const decreaseCount = () => {
    if (count - val < 0) {
      return;
    } else {
      setCount(count - val);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="flex space-x-3 items-center">
        <button className="border " onClick={() => setCount(count + val)}>
          <span className="text-5xl font-extrabold">+</span>
        </button>
        <h1 className="text-5xl">{count}</h1>
        <button className="border " onClick={() => decreaseCount()}>
          <span className="text-5xl font-extrabold">-</span>
        </button>
      </div>
      <div>
        <form>
          <label>Enter a value you want to increase by or decrease by : </label>
          <input
            type="text"
            className="border "
            placeholder="Enter a value"
            value={val}
            onChange={(e) => setVal(+e.target.value)}
          />
          <button className="border bg-slate-300 px-2">OK</button>
        </form>
      </div>
    </div>
  );
};

export default Counter;
