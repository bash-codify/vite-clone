import React from 'react'
import './navLinksXL.css'
import { MdKeyboardArrowDown} from "react-icons/md";
import { useGlobalHeader } from '../context';

const NavLinksXL = () => {
  const { setResource, setVersion, setLanga, setLargeMenuIcon} = useGlobalHeader();

  

  return (
    <div className ="large-navlist-container">

    <ul className="large-navlinks-wrapper">

      <li className='large-links'><a href="/">Guide</a></li>
      <li className='large-links'><a href="/">Config</a></li>
      <li className='large-links'><a href="/">Plugins</a></li>
      <li className='large-links hoverLink' onMouseEnter= {()=>{
        setResource(true)
        setVersion(false)
        setLanga(false)
        setLargeMenuIcon(false)
      } }>Resource<span className='arrowdown'><MdKeyboardArrowDown/></span></li>
      <li className='large-links hoverLink'onMouseEnter= {()=>{
        setVersion(true)
        setResource(false)
        setLanga(false)
        setLargeMenuIcon(false)
      } }>Version <span className='arrowdown'><MdKeyboardArrowDown/></span></li>
    
    </ul>

  </div>
  )
}

export default NavLinksXL