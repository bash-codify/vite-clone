import React, { useState } from 'react';
import './guide.css'
import { Icon } from '@iconify/react';
import Header from '../../header/Header'
// import SideNavBar from './sideNav/SideNavBar';



const Guide = () => {

    

  return (
    
    <div >

    

            < Header /> 



        <div className='header-container'>

            <div className="header-wrapper">

                <div className="menu">
                    
                    <Icon icon="pepicons:menu" className='menuIcon'/>

                    <p>
                        Menu
                    </p>

                </div>

                <div className="top">
                    <a href="top"> Return to top</a>
                </div>

            </div>

        </div>

        {/* < SideNavBar /> */}
        

    </div>
  )
}

export default Guide