import React from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Service from './service/Service';
import Sponsor from './sponsor/Sponsor';
import Footer from './footer/Footer';
import { AppProvider } from './header/context';


const Home = () => {
  return (
   
    <AppProvider>

      <div>

        < Header /> 

      </div>


      
      <main>

      <Hero />
      <Service />
      <Sponsor />
      <Footer />
      
      

      </main>

    </AppProvider>
  )
}

export default Home