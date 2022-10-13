import React from 'react'
import NavLinks from './NavLinks';
import MenuDetail  from './MenuDetail';

const MobileMenu = () => {
  return (
    <div className='mobilemenu-container'>

        <div className='container'>

            <NavLinks/>

        </div>

        <div>
            <MenuDetail/>
        </div>
        

    </div>
  )
}

export default MobileMenu