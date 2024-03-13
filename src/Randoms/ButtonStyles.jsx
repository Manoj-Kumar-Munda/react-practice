import React from 'react'

export const ButtonStyles = () => {
  return (
    <div  className=' relative cursor-pointer block'>
      <div>
        <ul className=' flex space-x-2 bg-slate-600 text-white divide-x-2 divide-slate-50'>
          <li className='py-2 px-4'>Home</li>
          <li className='py-2 px-4'>Home</li>
          <li className='py-2 px-4'>Home</li>
          <li className='py-2 px-4'>Home</li>
        </ul>
      </div>

        <img src={"https://images.unsplash.com/photo-1690876920673-6b2fb8d4966f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}
        alt="background-img"  />

        <div className='absolute inset-0 flex justify-center items-center'>
        <h1 className='text-8xl mix-blend-overlay font-bold'>
          Mount Everest
        </h1>

        </div>

        

        {/* <button className=' ring-0 transition-all hover:ring-8 hover:ring-offset-8 ring-offset-slate-300 rounded-lg hover:ring-teal-400 px-8 py-2 font-bold'>Click</button> */}
    </div>
  )
}
