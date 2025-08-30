
import './Hero.scss'

// import { Carousel } from 'flowbite-react';
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
    <div className="h-56 sm:h-64 xl:h-72 2xl:h-96 pt-16 mb-6">
    {/* <Carousel pauseOnHover slide={false}> */}
      {/* <img src="/sd6.jpeg" alt="..." className='h-full object-center object-cover' /> */}
      {/* <img src="/sd5.jpeg" alt="..." />
      <img src="/sd7.jpeg" alt="..." /> */}
      <img src="hero.jpeg" alt="..." className='h-full object-center object-cover'/>
    {/* </Carousel> */}
  </div>
  )
}

export default Hero