import React from 'react'
import Header from './Header'
import { BG_IMG_URL } from '../utils/links'

const Netflix = () => {
  return (
    <div className='relative'>
      <Header/>
      <div>
        <img src={BG_IMG_URL} alt="hero" loading='lazy' className='w-full h-auto'/>
      </div>
      
        
    </div>
  )
}

export default Netflix