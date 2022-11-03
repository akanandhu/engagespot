import React, { ReactComponentElement } from 'react'
import Image from 'next/image'

import arrow from '../public/assets/arrow.png'

type FeatureCardsProps = {
  heading: any,
  message: any,
  icon: any,

}

function FeatureCards({heading,message,icon}:FeatureCardsProps) {
  return (
    <div className='  hover:shadow-[0_0px_16px_0px_rgba(205,205,205,0.46)] w-[40%]  pt-[1.15rem] pb-7 px-6 rounded-[19px] h-auto flex flex-col justify-center items-center text-center '>
        <div className='flex flex-col justify-center items-center gap-3 w-[74%] '>
            
        <div className=' relative flex justify-center  align-middle items-center  bg-engagecard   rounded-[10px] w-[3.7rem] h-14   '>
            <Image className='abosulte' alt='image' src={icon} height={33} width={36}  />
        </div>
        <h1 className=' font-poppins font-semibold text-2xl '>{heading}</h1>
        <h2 className='font-poppins font-medium leading-6 text-sm'>{message}</h2>
        
       
        </div>
        <div className='flex mt-5  '>
          <div>
        <h3 className=' bg-clip-text text-transparent  
         bg-gradient-to-r from-[#3B006A] to-[#71157A] 
         leading-6 font-poppins cursor-pointer text-sm font-semibold pr-4'>
            Learn More </h3>
            </div>
            <div>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>

            </div>
           
        
        </div>
           
    </div>
  )
}

export default FeatureCards
