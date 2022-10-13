import React,{useState} from 'react'
import { FiHeart } from "react-icons/fi";
import './sponsor.css'
import Data from './data'

const Sponsor = () => {

    const [sponsors, setSponsors] = useState(Data);


  return (
    <section className="sponsor-container">
        <article className="sponsor wrapper">
            <div className='spon-icon'>
                <FiHeart />
                <p>
                Vite is free and open source, made <br /> possible by wonderful sponsors.
                </p>
            </div>
            <div className="sponsor-content">

                <div className="plati-spon">
                    <h2>
                    Platinum Sponsor
                    </h2>
                </div>

                {
                    sponsors.map((item, index)=>{
                        const {platinum} = item;

                        return (

                        <div className="plati-container" key={index}>

                            {
                                platinum.map((plat, index)=>{
                                    const {plat_icon} = plat;

                                    return (

                                        <div className="sponsor-icons" key={index}>

                                            
                                            <img src={plat_icon} alt="platinum sponsor" />

                                        </div>
                                    )
                               })

                            }

                            <div className="empty-sponsor"></div>


                        </div>


                        )
                    })
                }

                <div className="gold-spon">

                    <h3>
                    Gold Sponsors
                    </h3>

                </div>

                {
                    sponsors.map((goldItem, index)=>{
                        const {gold} = goldItem;
                        return (

                        <div className="gold-sponsors-container" key={index}>
                            {
                                gold.map((goldIcon, index)=>{
                                    const { gold_icon} = goldIcon;
                                    return (

                                    <div className="gold-spon-icons">


                                        <img src={gold_icon} alt="" />

                                    
                                    </div>

                                    )
                                })
                            }

                            <div className="empty-sponsor-gold"></div>
                            <div className="empty-sponsor-gold1"></div>


                            
                        </div>


                        )
                    })
                }


            </div>
            <div className="sponsor-btn">
                <button type='button' className="spon-btn">
                    Become a sponsor
                </button>
            </div>
        </article>
    </section>
  )
}

export default Sponsor