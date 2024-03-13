import React from 'react'

const AnimatedMenu = () => {
  return (
    <div className='mt-10 flex justify-center'>
        <nav>
            <ul className='flex relative border py-2 '>
                <div className='absolute h-full rounded-3xl w-16 bottom-0 bg-slate-900 z-10 transition-all left-0'></div>
                <li className='w-16 text-center z-30'><a href="" className='text-center text-red-600'>Home</a></li>
                <li className='w-20 text-center'><a href="" className='text-center text-red-600'>Products</a></li>
                <li className='w-20 text-center'><a href="" className='text-center text-red-600'>Pricing</a></li>
                <li className='w-12 text-center'><a href="" className='text-center text-red-600'>Docs</a></li>
                <li className='w-12 text-center'><a href="" className='text-center text-red-600'>Blog</a></li>
            </ul>
        </nav>

    </div>
  )
}

export default AnimatedMenu