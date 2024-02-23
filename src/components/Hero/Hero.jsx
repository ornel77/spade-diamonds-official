import React from 'react'
import './Hero.scss'
import hero from '../../assets/image/hero.jpeg'
import { Carousel } from 'flowbite-react';
function Hero() {
  return (
    // <section className='hero-container'>
    //     <img src={hero} alt="" />
    //     <div className="hero-text">
    //         <h1>
    //         Sur scéne, la réflexion laisse place à l'expression.
    //         </h1>
    //     </div>
        
    // </section>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel pauseOnHover slide={false}>
      <img src="/sd6.jpeg" alt="..." />
      <img src="/sd5.jpeg" alt="..." />
      <img src="/sd7.jpeg" alt="..." />
      <img src="hero.jpeg" alt="..." />
    </Carousel>
  </div>
  )
}

export default Hero