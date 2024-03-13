import React, { useRef } from 'react'

const UseRefHook = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }
  return (
    <div className=' flex flex-col items-center space-y-4'>
        <h1 className='font-bold text-2xl'>Form</h1>
        <div>
            <input className='border px-4 focus:outline-blue-400' type='text' placeholder='type something....' ref={inputRef} />
            <button className='bg-slate-400' onClick={handleClick}>Change Name</button>
        </div>


    </div>
  )
}

export default UseRefHook