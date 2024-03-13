import React, { useState } from 'react'

const States = () => {
    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount( count => {
            const updatedCount = count + 1;
            console.log(updatedCount);
            return updatedCount;
        })

        
    }
  return (
    <div className='flex justify-center my-10'>
        
        <button className='px-4 py-2 border' onClick={() => handleClick()}>
            Click
        </button>
        <span className='font-semibold text-lg'>
            {
                count
            }
        </span>
    </div>
  )
}

export default States;