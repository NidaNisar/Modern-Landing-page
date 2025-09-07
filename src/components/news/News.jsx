import React from 'react'

const News = () => {
  return (
    <div>
         <div className='container mx-auto mt-20 mb-6 flex flex-col gap-7'>
                <div className='text-center'>
                    <h1 className=' text-3xl sm:text-5xl'>News</h1>
                </div>
                <div className='text-center mx-auto w-[350px] sm:w-[600px]'>
                    <p>Stay updated with the latest trends in design, architecture, and innovation. Our curated articles bring you expert insights and fresh perspectives. Explore stories that inspire creativity and elevate your lifestyle.</p>
                </div>
            </div>
      <div className=' lg:ml-5 container mx-auto mt-25 flex flex-col justify-between items-center gap-10 lg:grid lg:grid-cols-3'>
        <div className='w-full max-w-[350px] border border-primary/20 rounded-[62px] p-5'>
            <img src='/landingpics/news/01.png'/>
            <h1 className='mt-5'>Let's Get Solution For Building Construction Work</h1>
            <p className='mt-6'>22 June ,2024</p>
            <div className='flex justify-end mt-3'>
            <button className='bg-gray-100 rounded-full  p-3 lg:mr-10'><i className='ri-arrow-right-s-line text-3xl text-primary'></i></button>
            </div>
        </div>
        <div className='w-full max-w-[350px] border border-primary/20 rounded-[62px] p-5'>
            <img src='/landingpics/news/01.png'/>
            <h1 className='mt-5'>Let's Get Solution For Building Construction Work</h1>
            <p className='mt-6'>22 June ,2024</p>
            <div className='flex justify-end mt-3'>
            <button className='bg-gray-100 rounded-full  p-3 lg:mr-10'><i className='ri-arrow-right-s-line text-3xl text-primary'></i></button>
            </div>
        </div>
        <div className='w-full max-w-[350px] border border-primary/20 rounded-[62px] p-5'>
            <img src='/landingpics/news/01.png'/>
            <h1 className='mt-5'>Let's Get Solution For Building Construction Work</h1>
            <p className='mt-6'>22 June ,2024</p>
            <div className='flex justify-end mt-3'>
            <button className='bg-gray-100 rounded-full  p-3 lg:mr-10'><i className='ri-arrow-right-s-line text-3xl text-primary'></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default News
