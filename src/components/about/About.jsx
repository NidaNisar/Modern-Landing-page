import React from 'react'
import { revealaboutText } from '../data/Data';
import { useEffect } from 'react';
const About = () => {
    
    useEffect(() => {
        revealaboutText()
      }, []);
  return (
    <div>
        <div className='container mx-auto mt-35 flex flex-col sm:flex-row gap-30'>
            <div>
                <img src='/landingpics/about/img.png ' className=' about--img flex justify-center items-center h-[550px] w-[330px] sm:w-[500px]  sm:h-[626px] ml-8'/>
            </div>
            <div className=' about--text flex flex-col gap-8  xl:mt-15'>
                <h1 className=' mx-auto sm:text-center text-4xl w-[300px] xl:text-6xl xl:w-[650px]'>We Create The Art Of Stylish Living Stylishly</h1>
                <p className='  mx-auto w-[300px] xl:w-[500px]'>At our core, we blend creativity with functionality to design spaces that inspire. From concept to completion, every detail is crafted with purpose and passion. Discover a lifestyle where elegance meets everyday living.</p>
                <div className= 'container  flex gap-9 justify-center'>
                    <i className='ri-phone-fill text-accentt text-4xl  bg-amber-100 rounded-full p-3'></i>
                    <div > 
                        <p className='font-black  text:1xl xl:text-2xl'>92125567896</p>
                        <p>Call us Anytime</p>
                       
                    </div>
                     
                </div>
                <button className='btn btn-primary mx-auto mt-3 '>Get Free Estimation
                            <i className='ri-arrow-right-line text-accentt'></i>
                           </button>
            </div>
        </div>
      
    </div>
  )
}

export default About
