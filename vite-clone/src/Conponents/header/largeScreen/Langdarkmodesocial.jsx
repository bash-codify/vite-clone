import React,{useState} from 'react'
import langs from '../langdata';
import { FaTwitter, FaDiscord,FaGithub } from "react-icons/fa";
import {  MdOutlineWbSunny, MdOutlineBedtime, MdNorthEast } from "react-icons/md";
import './Langdarksocial.css'


const Langdarkmodesocial = () => {

    const [langToggle, setLangToggle] = useState(false);
    const [language, setLanguage] = useState(langs);
    const [selectindex, setSelectIndex] = useState(false);
    const [mode, setMode] = useState(false)


  return (
    <>
    
    <div className='Lang-Dark-Social'>

    <div className="L-language">
                <div className='L-active' onClick={() => setLangToggle((prev) => !prev)}>
                  
                  {
                    selectindex? language[selectindex].lang :  <p>English</p>
                  }
    
                </div>

                {
               
                  language.map((item, index)=>{
                    const {id, lang} = item;
                    return(

                      <div className='L-otherslanguage' onClick={() =>{
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

              <div className="L-appearance">
                <div className='L-appear-Text'>
                  <p>
                    Appearance
                  </p>
                </div>
                <div>
                  <button className='L-darkmodebtn' onClick={() => setMode((prev)=> !prev)}>

                    {
                      !mode && 
                    <span className='L-sun'>

                    <MdOutlineWbSunny />

                    </span>
                    }
                    {
                      mode &&
                    <span className='L-moon'> 

                    <MdOutlineBedtime />

                    </span>
                    }
                  </button>
                </div>
              </div>

              <div className="L-social-media">
                    <div className='L-twitter'>
                    <FaTwitter/>
                    </div>
                    <div className='L-discord'>
                    <FaDiscord/>
                    </div>
                    <div className='L-github'>
                    <FaGithub/>
                    </div>
              </div>
    


    </div>
    
    
    </>
  )
}




export default Langdarkmodesocial