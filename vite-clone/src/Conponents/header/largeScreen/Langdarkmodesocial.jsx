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
    
    <div className='Langdarksocial'>

    <div className="language">
                <div className='active' onClick={() => setLangToggle((prev) => !prev)}>
                  
                  {
                    selectindex? language[selectindex].lang :  <p>English</p>
                  }
    
                </div>

                {
               
                  language.map((item, index)=>{
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

              <div className="appearance">
                <div className='appear-Text'>
                  <p>
                    Appearance
                  </p>
                </div>
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
    
    
    </>
  )
}




export default Langdarkmodesocial