import React from 'react'

const Steps = () => {
  return (
    <div>
             <div className='container mx-auto mt-25 xl:mx-auto grid grid-cols-2 xl:grid-cols-3 gap-12 '>
                <div className=' flex flex-col gap-4' >
                    <div>
                        <i className='ri-compasses-2-line text-5xl flex justify-center text-accentt'></i>
                    </div>
                    <h3 className='text-center'>Project Planning</h3>
                    <p className='text-center'>Our team maps out every detail from materials to milestones so your project runs smoothly from start to finish.</p>
                    <a href='#' className='flex justify-center'> Read more
                        <i className='ri-arrow-right-line text-accentt '></i>
                    </a>
                </div>
                <div className=' flex flex-col gap-4' >
                    <div>
                        <i className='ri-magic-line text-5xl flex justify-center text-accentt '></i>
                    </div>
                    <h3 className='text-center'>Gaining Material</h3>
                    <p className='text-center'>We handle the selection of top-grade materials,ensuring your project stays on track with quality you can trust.</p>
                    <a href='#' className='flex justify-center'> Read more
                        <i className='ri-arrow-right-line text-accentt '></i>
                    </a>
                </div>
                <div className=' flex flex-col gap-4' >
                    <div>
                        <i className='ri-tools-line text-5xl flex justify-center text-accentt'></i>
                    </div>
                    <h3 className='text-center'>Project Execution</h3>
                    <p className='text-center'>We turn plans into reality by managing execution process, delivering quality results on time and within budget.</p>
                    <a href='#' className='flex justify-center'> Read more
                        <i className='ri-arrow-right-line text-accentt '></i>
                    </a>
                </div>
             </div>
    </div>
  )
}

export default Steps
