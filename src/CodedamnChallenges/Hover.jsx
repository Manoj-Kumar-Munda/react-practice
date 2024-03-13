import React, { useState } from 'react'

const Hover = () => {
    const [count, setCount] = useState(0);
    function increamentByThree(){
      setCount((count) => count+1);
      setCount((count) => count+1);
      setCount((count) => count+1);
    }
  return (
    <div>

        <button onClick={() => increamentByThree()} className='border-2 border-red-500 px-2 py-1 '>Hover Me!</button>
        <h1 data-testid="count">{count}</h1>
    </div>
  )
}

export default Hover