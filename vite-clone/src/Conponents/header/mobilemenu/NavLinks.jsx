import React,{useState} from 'react'
import { MdNorthEast, MdAdd} from "react-icons/md";
import './navlinks.css';


const NavLinks = () => {

    const [subToggle, setSubToggle] = useState(false);
    const [subToggle2, setSubToggle2] = useState(false);


  return (
    <>
    

      
      <div className="nav-list-mobile">

              <ul className="navlinks">
                <li className='links'><a href="/">Guide</a></li>
                <li className='links'><a href="/">Config</a></li>
                <li className='links'><a href="/">Plugins</a></li>
                <li className='links ' onClick={() =>{ 
                  
                  setSubToggle((prev)=> !prev)
                  setSubToggle2(false)
                  }}>Resource<span className='plus'><MdAdd/></span>
                {
                  subToggle &&

                  <ul className='resources'>
                    <li><a href="">Team</a><span className='icon' ><MdNorthEast/></span></li>
                    <li><a href="">Twitter</a><span className='icon' ><MdNorthEast/></span></li>
                    <li><a href="">Discord Chat</a><span className='icon' ><MdNorthEast/></span></li>
                    <li><a href="">Awesome Vite</a><span className='icon'> <MdNorthEast/></span></li>
                    <li><a href="">DEV Community</a> <span className='icon' ><MdNorthEast/></span></li>
                    <li><a href="">Rollup Plugins Compat</a><span className='icon' ><MdNorthEast/></span></li>
                    <li><a href="">Changelog</a><span className='icon' ><MdNorthEast/></span></li>
                  
                  </ul>

                }
                  </li>
                
                <li className='links' onClick={() =>{
                  
                  setSubToggle2((prev)=> !prev) 
                  setSubToggle(false)
                  }}>Version <span className='plus'><MdAdd/></span>

                {subToggle2 &&

                  <ul className='version'>
                    <li><a href="/">Vite 2 Docs</a><span className='icon' ><MdNorthEast/></span></li>
                  </ul>
                
                }

                </li>
                
                
              </ul>


       </div>
      
      
    
    
    </>
  )
}

export default NavLinks