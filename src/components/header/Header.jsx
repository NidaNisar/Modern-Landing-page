import React from 'react'

const Header = () => {
  return (
    
           <header className='sticky top-0 h-[90px] z-30 bg-white shadow-xl'>
            <div className='container mx-auto flex flex-row  justify-between ' >
              <a href='#'>
                <img src='/landingpics/logo.svg' className='mt-3'/>
              </a>
              <nav >
                <ul className='flex flex-row gap-6 mt-6 ' >
                  <li  className=' hover:text-accentt'>Home</li>
                  <li className=' hover:text-accentt'>About</li>
                  <li className=' hover:text-accentt' >Testimonal</li>
                  <li className=' hover:text-accentt'>Our Work</li>
                  <li className=' hover:text-accentt'>News</li>
                  <li className=' hover:text-accentt'>Contact</li>
                </ul>
              </nav>
            </div>
           </header>
    
  )
}

export default Header
