import React from 'react';
import './footer.css'
import { useGlobalHeader } from '../header/context';

const Footer = () => {

  const {setResource, setVersion, setLanga, setLargeMenuIcon} = useGlobalHeader();

  return (
    <section className="footer-container" onMouseOver={()=>{
      setResource(false)
      setVersion(false)
      setLanga(false)
      setLargeMenuIcon(false)

  } }>
        <article className="footer-wrapper">
            <div className="footer-content">
                <p>
                Released under the MIT License. (cba13e8b)
                </p>
                <p>
                Copyright © 2020-present Evan You & Vite Contributors
                </p>
            </div>

        </article>
    </section>
  )
}

export default Footer