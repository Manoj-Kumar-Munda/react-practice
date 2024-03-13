import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='flex items-center gap-10 px-4 bg-gray-200 py-2'>
        <div>
            <h1 className='text-2xl font-bold'>Logo</h1>
        </div>
        <Navbar />

    </header>
  )
}

export default Header