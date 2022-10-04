import React,{ useState,useEffect, useRef }  from 'react';
import { MdNorthEast, MdAdd, MdKeyboardArrowDown,MdTranslate, MdOutlineWbSunny, MdOutlineBedtime, MdOutlineClose,MdMoreHoriz } from "react-icons/md";
import { FaTwitter, FaDiscord,FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import './header.css';
import logo from '../../assets-vite/logo.svg';
import langs from './langdata';
import MobileMenu from './mobilemenu/MobileMenu';
import Langdarkmodesocial from './largeScreen/Langdarkmodesocial';
import Search from './search/Search'






const Header = () => {

  const [menuToggle, setMenuToggle] =useState(false);
  const [resource, setResource] = useState(false);
  const [version, setVersion] = useState(false);
  const [largemenuicon, setLargeMenuIcon] = useState(false);
  const [languages, setLanguages] = useState(langs);
  const [mode, setMode] = useState(false);
  const [langa, setLanga] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

 

  const MouseEnter = () =>{
    setResource (true)
  }
  const MouseLeave = () =>{
    setResource (false)
  }
  const MouseEnter2 = () =>{
    setVersion (true)
  }
  const MouseLeave2 = () =>{
    setVersion (false)
  }
  const MouseEnter3 = () =>{
    setLargeMenuIcon (true)
  }
  const MouseLeave3 = () =>{
    setLargeMenuIcon (false)
  }


  useEffect(()=>{

    window.addEventListener('resize', ()=>{

      if(window.innerWidth > 769){

        setMenuToggle(false)

      }
      
    })
    setMenuToggle(false)
  
  }, []);



  return (

    <header>

      <nav>

        <div className="navbar">

          <div className="logo-container">

            <div>
              <a href="">
                <img className='logo-image' src={logo} alt="" />
              </a>

            </div>

            <div>

              <h2><a href="">Vite</a></h2>

            </div>
              
          </div>

          <div className='btn-icons'>

            <div className="search-icon">

              < FiSearch onClick={()=> setSearchToggle((prev) => !prev)}/>

            </div>

            <div className="menu-icon">

            {
              !menuToggle && 

              <div className="hambugger" onClick={()=> setMenuToggle((prev)=> !prev)}></div>

            }
              
              {
                menuToggle &&

                <div className="bar">
                  <MdOutlineClose onClick={()=> setMenuToggle(false)}/>
                </div>
              }
              

            </div>

          </div>

          <div className='search-button-large'>
            <div className='bttnsearch' onClick={()=> setSearchToggle((prev) => !prev)}>
              <span className='searchicon'>
              < FiSearch />
              </span>
              <span className='searchtext'>Search</span>
              <span className='ctrl'>Ctrl K</span>
            </div>
          </div>

          <div className ="large-navlist-container">

            <ul className="large-navlinks-wrapper">

              <li className='large-links'><a href="/">Guide</a></li>
              <li className='large-links'><a href="/">Config</a></li>
              <li className='large-links'><a href="/">Plugins</a></li>
              <li className='large-links hoverLink ' onMouseEnter={()=> MouseEnter()} onMouseLeave={()=> MouseLeave()}>Resource<span className='arrowdown'><MdKeyboardArrowDown/></span></li>
              <li className='large-links hoverLink' onMouseEnter={()=> MouseEnter2()} onMouseLeave={()=> MouseLeave2()} >Version <span className='arrowdown'><MdKeyboardArrowDown/></span></li>
            
            </ul>

          </div>

 
          <div className='large-menu-icon'>

            <MdMoreHoriz  onMouseEnter={()=> MouseEnter3()} onMouseLeave={()=> MouseLeave3()}/>

          </div>

          <div className='XLangdarksocial'>

              <div className="language" onMouseEnter={() => setLanga(true)} onMouseLeave={()=> setLanga(false)}>

                <div className='active' >
                  <div className='langicon'>
                    <MdTranslate/>
                  </div>
                  <div className='langicon'>
                    <MdKeyboardArrowDown/>
                  </div>
              </div>

              {

                langa &&

              <div className='otherLanguage-container'>

                  {
                    
                    languages.map((item, index)=>{
                      const {id, lang} = item;
                      return(

                        <div className='otherslanguage' onClick={() =>{
                          setSelectIndex(index)
                          setLangToggle(false)
                        } } key={id}>
                          <div >
                            <p> {lang} <span><MdNorthEast/></span></p>
                          </div>
                        </div>
                      )
                    })
                  }

              </div>

              }



                </div>

                <div className="appearance">
                  <div>
                    <button className='darkmodebtn' onClick={() => setMode((prev)=> !prev)}>

                      {
                        !mode && 
                      <span className='sun'>

                      <MdOutlineWbSunny />

                      </span>
                      }
                      {
                        mode &&
                      <span className='moon'> 

                      <MdOutlineBedtime />

                      </span>
                      }
                    </button>
                  </div>
                </div>

                <div className="social-media">
                      <div className='twitter'>
                      <FaTwitter/>
                      </div>
                      <div className='discord'>
                      <FaDiscord/>
                      </div>
                      <div className='github'>
                      <FaGithub/>
                      </div>
                </div>
            </div>

          
            {
              largemenuicon &&

              <div className='lang'>

                <Langdarkmodesocial/>

              </div>
              
            
            }
          
        </div>
        
        {

          resource &&

          <div className='resource-container'>

            <ul>
              
              <li><a href="">Team</a><span className='icon' ><MdNorthEast/></span></li>
              <li><a href="">Twitter</a><span className='icon' ><MdNorthEast/></span></li>
              <li><a href="">Discord Chat</a><span className='icon' ><MdNorthEast/></span></li>
              <li><a href="">Awesome Vite</a><span className='icon'> <MdNorthEast/></span></li>
              <li><a href="">DEV Community</a> <span className='icon' ><MdNorthEast/></span></li>
              <li><a href="">Rollup Plugins Compat</a><span className='icon' ><MdNorthEast/></span></li>
              <li><a href="">Changelog</a><span className='icon' ><MdNorthEast/></span></li>

            </ul>

          </div>
        }

        {

          version &&

        <div className='versions-container'>
          <ul >
            <li><a href="/">Vite 2 Docs</a><span className='icon' ><MdNorthEast/></span></li>
          </ul>

        </div>
        }

      </nav>


      {
        menuToggle &&

          <div>
            
          <MobileMenu/>

          </div>

      }

      {

        searchToggle &&

        <Search  searchToggle={setSearchToggle}/>

      }

    </header>
    
  )

}

export default Header