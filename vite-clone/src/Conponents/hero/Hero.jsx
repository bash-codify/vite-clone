import React from 'react';
import './hero.css'
import HeroImage from '../../assets-vite/logo-with-shadow.png';
import { useGlobalHeader } from '../header/context';

const Hero = () => {

    const {setResource, setVersion, setLanga, setLargeMenuIcon} = useGlobalHeader();

   
  return (
    <section className="hero-container" onMouseOver={()=>{
        setResource(false)
        setVersion(false)
        setLanga(false)
        setLargeMenuIcon(false)

    } }>
        <article className="hero-wrapper" >
            <div className="hero-content"  >

                <div className="hero-text">
                    

                    <h1>

                        Vite

                    </h1>

                    <h2>
                        next generation <br />
                        frontend tooling
                    </h2>
                    <p>

                        Get ready for a development environment that <br /> can finally catch up with you.

                    </p>
                        
                    

                    <div className='hero-btn'>
                        <button type='button' className='get-started'>Get Started</button>
                        <button type='button' className='btn'>why Vite?</button>
                        <button type='button' className='btn'>view on  github</button>
                    </div>

                </div>

                <div className="hero-image">
                    <div className='shadow'></div>
                    <div className='shadow2'></div>
                    <img className='hero-img' src={HeroImage} alt="" />
                </div>

            </div>
        </article>
    </section>
  )
}

export default Hero