import { useEffect } from 'react'
import React from 'react'
import { revealHeroText } from '../data/Data'
const Hero = () => {
  useEffect(() => {
    revealHeroText()
  }, []);
  return (
    <div>
      <main className='max-w-[1920px] max-auto  bg-white overflow-hidden'>
          {/* <h1 className='h1'> Interno</h1> */}
          <div className="xl:bg-[url('/landingpics/grid.jng')] xl:bg-center xl:bg-repeat-y fixed top-0 left-0 right-0 bottom-0 z-10 "></div>
                <section className="  hero h-[640px] xl:h-[640px] bg-[url('/landingpics/hero/bg.jpg')] bg-center  lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
                    <div className='  hero--text container mx-auto h-full flex items-center justify-center xl:justify-start'>
                          <div className=' w-[567px] flex flex-col items-center text-center
                          xl:text-left lg:items-start'> 
                          <h1 className='  h1 mb-8'> Let Your Home Be Unique</h1>
                          <p className='mb-8'>We craft spaces with meaning, elegance, and purpose. Because your home deserves more than ordinary.</p>
                           <button className='btn btn-primary mx-auto '>Get Free Estimation
                            <i className='ri-arrow-right-line text-accentt'></i>
                           </button>
                           </div>    
                    </div>
                    </section>   
      </main>
      {/* <div className='h-[3000px]'>

      </div> */}
    </div>
  )
}

export default Hero
