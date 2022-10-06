import React from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Service from './service/Service';
import Sponsor from './sponsor/Sponsor';
import Footer from './footer/Footer';


const Home = () => {
  return (
   
    <div>

      <Header /> 

      
      <main>

      <Hero />
      <Service />
      <Sponsor />
      <Footer />
      
      

      </main>

    </div>
  )
}

export default Home