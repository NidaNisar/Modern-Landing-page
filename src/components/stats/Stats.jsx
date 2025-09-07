import React from 'react'

const Stats = () => {
  return (
    <div>
      <div className=' bg-gray-200 flex flex-col gap-18  lg:flex lg:flex-row lg:gap-6 lg:p-15 p-10'>
        <div className='container mx-auto  flex flex-col gap- justify-center items-center'>
            <p className='text-7xl text-accentt mx-auto '>12</p>
            
            <p>Years of Experience</p>
            {/* <div class="w-px h-20 bg-black"></div> */}
        </div>
        <div className='container mx-auto  flex flex-col gap- justify-center items-center'>
            <p className='text-7xl text-accentt mx-auto'>85</p>
            <p>Projects Completed</p>
        </div>
        <div className='container mx-auto  flex flex-col gap- justify-center items-center'>
            <p className='text-7xl text-accentt mx-auto'>15</p>
            <p>Years of Experience</p>
        </div>
        <div className='container mx-auto  flex flex-col gap- justify-center items-center'>
            <p className='text-7xl text-accentt mx-auto'>95</p>
            <p>Years of Experience</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
