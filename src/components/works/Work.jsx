import React from 'react'
  import { useEffect } from 'react';
  import { revealaboutText } from '../data/Data';
const Work = () => {
   
        useEffect(() => {
            revealaboutText()
          }, []);
  return (
    <div>
        <div>
            <div className='container mx-auto mt-20 mb-10 flex flex-col gap-7'>
                <div className='text-center'>
                    <h1 className=' text-3xl sm:text-5xl work--title'>Follow Our Projects</h1>
                </div>
                <div className='text-center mx-auto w-[350px] sm:w-[600px] work--para'>
                    <p>Discover how we bring ideas to life through thoughtful design and flawless execution.
                   Our projects reflect a blend of creativity, functionality, and attention to detail.
                   Stay connected and watch as we transform spaces into meaningful experiences.</p>
                </div>
            </div>
        </div>
      <div className='container mx-auto mt-20  grid grid-cols-1 lg:grid lg:grid-cols-2 lg:place-items-center  lg:justify-between'>
        <div className=' mb-15 flex flex-col  items-center '> 
        <div >
            <img src='/landingpics/work/01.png' className='work--img ml-4  sm:w-[450px] w-[330px] mr-4'/>
        </div>
        <div className='lg:flex lg:flex-row lg:mt-10 lg:justify-between flex flex-row  mt-10 gap-10   '>
            <div className='ml-5'>
                <h3>Modern Kitchen</h3>
                <p>Decor/Artitecture</p>
            </div>
            <button className='bg-accentt rounded-full  p-3 lg:mr-10'><i className='ri-arrow-right-s-line text-3xl text-primary'></i></button>
            
        </div>
        </div>
         <div className='flex flex-col  items-center mb-15' > 
        <div>
            <img src='/landingpics/work/02.png' className='about--text ml-4  sm:w-[450px] w-[330px] mr-4'/>
        </div >
        <div className='lg:flex lg:flex-row lg:mt-10 lg:justify-between flex flex-row  mt-10 gap-10   '>
            <div className='ml-5'>
                <h3>Modern Kitchen</h3>
                <p>Decor/Artitecture</p>
            </div>
            <button className='bg-accentt rounded-full  p-3 lg:mr-10'><i className='ri-arrow-right-s-line text-3xl text-primary'></i></button>
            
        </div>
        </div>
         <div className='flex flex-col  items-center mb-15' > 
        <div>
            <img src='/landingpics/work/03.png' className='work--img ml-4 sm:w-[450px] w-[330px] mr-4'/>
        </div>
        <div className='lg:flex lg:flex-row lg:mt-10 lg:justify-between flex flex-row  mt-10 gap-10   '>
            <div className='ml-5'>
                <h3>Modern Kitchen</h3>
                <p>Decor/Artitecture</p>
            </div>
            <button className='bg-accentt rounded-full  p-3 lg:mr-10'><i className='ri-arrow-right-s-line text-3xl text-primary'></i></button>
            
        </div>
        </div>
         <div className='flex flex-col  items-center mb-15'  > 
        <div>
            <img src='/landingpics/work/04.png' className='about--text ml-4 sm:w-[450px] w-[330px] mr-4'/>
        </div>
        <div className='lg:flex lg:flex-row lg:mt-10 lg:justify-between flex flex-row  mt-10 gap-10   '>
            <div className='ml-5'>
                <h3>Modern Kitchen</h3>
                <p>Decor/Artitecture</p>
            </div>
            <button className='bg-accentt rounded-full  p-3 lg:mr-10'><i className='ri-arrow-right-s-line text-3xl text-primary'></i></button>
                                        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Work
