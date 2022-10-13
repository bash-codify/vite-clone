import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import logo from '../../../../assets-vite/logo.svg';
import { List, Api } from '../guideList';
import './sidenavbar.css'

const SideNavBar = () => {
    const [guideLinks, setGuideLinks] = useState(List);
    const [guideApi, setGuideApi] = useState(Api);
  return (
    <div className='header-container'>

    <div className="header-wrapper">

        <div className="menu">
            
            <Icon icon="pepicons:menu" className='menuIcon'/>

            <p>
                Menu
            </p>

        </div>

        <div className="list-container">

            <div className='lists'>

                <div className="guide-list">

                <div className="logo-Container">

                    <div>
                        <a href="">
                            <img className='logo-Image' src={logo} alt="" />
                        </a>

                        </div>

                        <div>

                        <h2><a href="">Vite</a></h2>

                    </div>
                        
                </div>
                <div className='guide-text'>
                    <h2>
                        Guide
                    </h2>
                </div>
                <ul className='guide-links'>
                {

                    guideLinks.map((guideItem)=>{
                        const {id, link} = guideItem;
                        return (

                                <li key={id} >
                                    <a href="">
                                        {link}
                                    </a>
                                </li>
                        
                            

                        )
                    })

                }
                </ul>

                </div>
                <div className="api-list">
                    <div className='api-text'>
                        <h2>
                            APIs
                        </h2>
                    </div>
                    <ul className='api-links'>
                        {
                            guideApi.map((apiItem)=>{
                                const {id, api} = apiItem;
                                return (

                                    

                                    <li key={id}>
                                        <a href="">
                                           {api}
                                        </a>
                                    </li>
                            
                                


                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

        <div className="top">
            <a href="top"> Return to top</a>
        </div>

    </div>

</div>
  )
}

export default SideNavBar