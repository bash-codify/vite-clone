import React,{useState} from 'react'
import langs from '../langdata';
import { FaTwitter, FaDiscord,FaGithub } from "react-icons/fa";
import { MdKeyboardArrowDown,MdTranslate, MdOutlineWbSunny, MdOutlineBedtime } from "react-icons/md";
import './menudetails.css';



export const MenuDetail = () => {

    const [langToggle, setLangToggle] = useState(false);
    const [language, setLanguage] = useState(langs);
    const [selectindex, setSelectIndex] = useState(false);
    const [mode, setMode] = useState(false)


  return (
    <>
    
    <div className='M-lang-dark-social-mobile'>

        <div className="M-language">
          <div className='M-active' onClick={() => setLangToggle((prev) => !prev)}>
            <div className='M-langicon'>
              <MdTranslate/>
            </div>
            {
              selectindex? language[selectindex].lang :  <p>English</p>
            }
          
            
          
            
            <div className='M-langicon'>
              <MdKeyboardArrowDown/>
            </div>
          </div>

          {
            langToggle &&
          
            language.map((item, index)=>{
              const {id, lang} = item;
              return(

                <div className='M-otherslanguage' onClick={() =>{
                  setSelectIndex(index)
                  setLangToggle(false)
                } } key={id}>
                  <div >
                    <p> {lang} </p>
                  </div>
                </div>
              )
            })
          }

        </div>

        <div className="M-appearance">
          <div className='M-appear-text'>
            <p>
              Appearance
            </p>
          </div>
          <div>
            <button className='M-darkmodebtn' onClick={() => setMode((prev)=> !prev)}>

              {
                !mode && 
              <span className='M-sun'>

              <MdOutlineWbSunny />

              </span>
              }
              {
                mode &&
              <span className='M-moon'> 

              <MdOutlineBedtime />

              </span>
              }
            </button>
          </div>
        </div>

        <div className="M-social-media">
              <div className='M-twitter'>
              <FaTwitter/>
              </div>
              <div className='M-discord'>
              <FaDiscord/>
              </div>
              <div className='M-github'>
              <FaGithub/>
        </div>
      </div>
    </div>
    
    </>
  )
}


export default MenuDetail