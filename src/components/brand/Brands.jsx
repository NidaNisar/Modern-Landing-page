import React from 'react'
   import { useEffect } from 'react';
   import { revealaboutText } from '../data/Data';
const Brands = () => {

      useEffect(() => {
          revealaboutText()
        }, []);
  return (
    <div>
      <div className=' container mx-auto mt-30 flex flex-col gap-13 items-center sm:flex-row sm:justify-center sm:gap-25'>
        <div>
            <img src='/landingpics/brands/01.svg '  className='brands--img' /> 
        </div>
        <div>
            <img src='/landingpics/brands/02.svg' className='brands--img'/> 
        </div>
        <div>
            <img src='/landingpics/brands/03.svg ' className='brands--img'/> 
        </div>
        <div>
            <img src='/landingpics/brands/04.svg  ' className='brands--img'/> 
        </div>
        <div>
            <img src='/landingpics/brands/05.svg ' className='brands--img'/> 
        </div>
      </div>
    </div>
  )
}

export default Brands
