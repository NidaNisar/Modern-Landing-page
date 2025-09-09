import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className=' about--text container mx-auto w-[350px] text-center items-center  lg:w-[900px] bg-primary border border-black rounded-[30px] mt-15'>
        <div className='flex flex-col  gap-4 justify-center items-center  '>
            <p className='text-4xl text-white pt-[2.5rem] pb-[0.6rem]'>Do you want to join Interno?</p>
            <p className='text-white text-center p-2'>Stay updated with the latest trends in design, architecture, and innovation.</p>
             <button className='btn  mx-auto mt-3 mb-5 bg-accentt'>Get Free Estimation
                            <i className='ri-arrow-right-line text-primary'></i>
                           </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
