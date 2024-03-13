import React, { useState } from 'react'
import Child from './Child ';
import Sibling from './Sibling';

const Main = () => {
    console.log("Main");
    const [count,setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <Child data={count} />
        {/* <Sibling /> */}
        <div>
            {/* <p>{count}</p> */}
            <button onClick={() => handleClick()} >Count Me</button>
        </div>
    </div>
  )
}

export default Main