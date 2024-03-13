import React from 'react'
import { menuItems } from './MenuItems'
import MenuItem from './MenuItem'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex items-center gap-8 relative'>
            {
                menuItems.map( (menu, index) => {
                    const depthLevel = 0;
                    return (
                        <MenuItem items={menu} key={index} depthLevel={depthLevel}/>
                        
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Navbar