import React from 'react'
import { useState } from 'react'

const Header = () => {
  const[menu,setmenu]=useState(false)
  return (
    
           <header className='sticky top-0 h-[90px] z-30 bg-white shadow-xl'>
            <div className='container mx-auto flex  justify-between ' >
              <a href='#'>
                <img src='/landingpics/logo.svg' className='mt-3 ml-4'/>
              </a>
              <nav >
                <div  className='lg:ml-4 lg:hidden mt-4' onClick={()=>setmenu(prev=>!prev)}>
                  <i className='ri-menu-4-line text-4xl text-primary'></i>
                </div>
              <ul
  className={`transition-all duration-700 mr-5 gap-4  
    lg:relative lg:flex-row lg:h-full lg:p-0 lg:top-0 lg:border-none  lg:visible lg:opacity-100
    ${menu
      ? "fixed w-full p-4 bg-white border-t top-[90px] left-0 right-0 flex flex-col h-auto visible opacity-100"
      
       : "fixed w-full h-0 p-0 overflow-hidden top-[90px] left-0 right-0 flex mt-5 invisible opacity-0 "
    }`}
>
  {/* menu items */}


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



// <ul className=  "fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:h-full lg:p-0 lg:top-0  lg:border-none transition-all duration-700 mr-5">