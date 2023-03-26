import React,{ useState, useEffect, useRef }  from 'react';
import { MdNorthEast, MdKeyboardArrowDown,MdTranslate, MdOutlineWbSunny, MdOutlineBedtime, MdOutlineClose,MdMoreHoriz } from "react-icons/md";
import { FaTwitter, FaDiscord,FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import './header.css';
import logo from '../../assets-vite/logo.svg';
import langs from './langdata';
import MobileMenu from './mobilemenu/MobileMenu';
import Langdarkmodesocial from './largeScreen/Langdarkmodesocial';
import Search from './search/Search'
import { useGlobalHeader } from './context';
import NavLinksXL from './NavLinkXL/NavLinksXL';




const Header = () => {

  const {resource, setResource, langa, setLanga, version, setVersion, largemenuicon, setLargeMenuIcon} = useGlobalHeader();


  const [menuToggle, setMenuToggle] =useState(false);
  const [languages, setLanguages] = useState(langs);
  const [mode, setMode] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

 
  const MenuToggleBtn = ()=>{
    setMenuToggle((menuToggle)=>{
      return !menuToggle;
    })
    menuToggle? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'; 

  }

  const SearchToggleBtn = ()=>{

    setSearchToggle((searchToggle)=>{

      return !searchToggle;

    })

    searchToggle? document.body.style.overflowY = 'auto' : document.body.style.overflowY = 'hidden';

  }

  const HandleOver = (e)=>{
    
    if(!e.target.className.contains('NavLinksXL')){
      
      setResource(false)
        setVersion(false)
        setLanga(false)
        setLargeMenuIcon(false)
    }
  }



  useEffect(()=>{

    window.addEventListener('resize', ()=>{

      if(window.innerWidth > 769){

        setMenuToggle(false)
        setLargeMenuIcon (false)
        setVersion (false);
        setResource (false)

      }
      else{

        setVersion (false);
        setResource (false)
        setLargeMenuIcon (false)

      }
      
    })
    setMenuToggle(false)
  
  }, []);



  return (

    <header >

      <nav onMouseOver={HandleOver}>

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

              < FiSearch onClick={()=> SearchToggleBtn(false)}/>

            </div>

            <div className="menu-icon">

            {
              !menuToggle && 

              <div className="hambugger" onClick={()=> MenuToggleBtn()}></div>

            }
              
              {
                menuToggle &&

                <div className="bar">
                  <MdOutlineClose onClick={()=> MenuToggleBtn()}/>
                </div>
              }
              

            </div>

          </div>

          <div className='search-button-large'>
            <div className='bttnsearch' onClick={()=> SearchToggleBtn(true)}>
              <span className='searchicon'>
              < FiSearch />
              </span>
              <span className='searchtext'>Search</span>
              <span className='ctrl'>Ctrl K</span>
            </div>
          </div>

          <div className='NavLinksXL'>
            <NavLinksXL/>
          </div>


          <div className='Xlarge-menu-icon'>

            <MdMoreHoriz  onMouseEnter= {()=>{
                setResource(false)
                setVersion(false)
                setLargeMenuIcon(true)
                setLanga(true)
              } } />

          </div>

          <div className='XLangdarksocial'>

              <div className="language" onMouseEnter= {()=>{
                setResource(false)
                setVersion(false)
                setLargeMenuIcon(false)
                setLanga(true)
              } }>

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
                

              <div className='XotherLanguage-container' >

                  {
                    
                    languages.map((item, index)=>{
                      const {id, lang} = item;
                      return(

                        <div className='otherslanguages' onClick={() =>{
                          setSelectIndex(index)
                          setLangToggle(false)
                        } } key={id}>
                          <div>
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

          <div className='mobilemenu-container'>
            
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