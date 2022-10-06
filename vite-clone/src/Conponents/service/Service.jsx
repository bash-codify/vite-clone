import React, { useState } from 'react';
import Data from './data'
import './service.css'

const Service = () => {
  const [services, setServices] = useState(Data);
  return (
    <section className="service-container">
        <article className="service-wrapper">

          {
            services.map((item)=>{
              const {id, title, desc, icon} = item;
              return (
                <div className="service-content" key={id}>
                  <div className="service-icon">
                    {icon}
                  </div>
                  <div className="service-text">
                    
                    <h2>
                      {title}
                    </h2>
                    <p>
                      {desc}
                    </p>
                  </div>

                </div>
              )
            })
          }
        </article>
    </section>
  )
}

export default Service