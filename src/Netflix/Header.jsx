import React from 'react'
import { LOGO_URL } from '../utils/links'

const Header = () => {
  return (
    <div className='absolute left-0 right-0 z-50 bg-slate-900/60'>
        <div className='mx-auto max-h-16 xl:max-h-24 flex justify-between max-w-screen-2xl px-[6%] border'>
            <div className=''>
                <img src={LOGO_URL} alt="logo" 
                className='h-full' />
            </div>
            <div className='self-center'>
                <button className='bg-red-600'>
                    <span className='whitespace-nowrap'>Sign In</span>
                </button>
            </div>

        </div>

    </div>
  )
}

export default Header