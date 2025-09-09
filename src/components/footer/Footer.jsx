import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='mt-15 bg-green-100  lg:flex lg:flex-row lg:justify-center  lg:gap-[50px] p-7'>
          <div className=' lg:flex flex-col mt-5  ' >
            <img src="/landingpics/logo.svg"  className=' mx-auto  ' />
            <p className=' mx-auto text-center w-[300px]'>Stay updated with the latest trends in design, architecture, and innovation.</p>
            <div>
                <ul className='list-none flex flex-row gap-5 justify-center'>
                    <li ><i className='ri-facebook-fill'></i></li>
                    <li ><i className='ri-twitter-fill'></i></li>
                    <li ><i className='ri-linkedin-fill'></i></li>
                    <li ><i className='ri-instagram-fill'></i></li>
                    <li ><i className='ri-whatsapp-fill'></i></li>
                    <li ><i className='ri-tiktok-fill'></i></li>
                </ul>
                
            </div>
          </div>
          <div className='lg:flex lg:flex-row  lg:justify-between lg:gap-[70px] justify-center  mt-5 flex flex-col gap-5 '>
          <div className='flex flex-col  items-center  gap-5'>
            <h3 >Pages</h3>
            <ul className='flex flex-col  items-center text-xl'>
                <li>About </li>
                <li>Testimonal</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
          </div>
           <div className='flex flex-col  items-center gap-5' >
            <h3  >Services</h3>
            <ul className=' flex flex-col  items-center text-xl'>
                <li>Kitchen </li>
                <li>Living Area </li>
                <li>Bathroom</li>
                <li>Bedroom</li>
            </ul>
          </div>
          <div className='flex flex-col  items-center gap-5'>
            <h3>Contact</h3>
            <ul className='flex flex-col  items-center text-xl'>
                <li>Let's get in touch</li>
                <li>+925679076467</li>
                <li>Mon to Sat- 11:00 to 8:00</li>
                <li className='w-[250px]'>Hotel Sunfort Building 24-G,liberty Gulberg Punjab</li>
            </ul>
          </div>
          

          </div>
      </div>
    </div>
  );
}

export default Footer;
