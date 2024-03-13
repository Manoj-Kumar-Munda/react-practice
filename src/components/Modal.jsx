import React from 'react'

const Modal = ({close}) => {
    
  return (
    <div className='absolute top-0 w-full min-h-screen flex justify-center items-center bg-slate-700/60'>
        <div className='p-4 bg-white max-w-sm text-center flex flex-col justify-center items-center space-y-2'>
            <h1 className='font-bold text-lg'>Congratulations</h1>
            <p>You have won $20,000 cash prize.</p>
            <button className='bg-slate-900 text-white px-4 py-1 font-semibold' onClick={() => close()}>Close</button>
        </div>
    </div>
  )
}

export default Modal;