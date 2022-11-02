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
    <div className='w-[26%]  pt-[1.15rem] pb-7 px-6 rounded-[19px] h-auto flex flex-col justify-center items-center text-center '>
        <div className='flex flex-col justify-center items-center gap-3 w-[74%] '>
            
        <div className=' relative flex justify-center  align-middle items-center  bg-engagecard   rounded-[10px] w-[3.7rem] h-14   '>
            <Image className='abosulte' alt='image' src={icon} height={33} width={36}  />
        </div>
        <h1 className=' font-poppins font-semibold text-2xl '>{heading}</h1>
        <h2 className='font-poppins font-semibold leading-6 text-sm'>{message}</h2>
        
       
        </div>
        <div className='flex mt-5  '>
        <h3 className=' bg-clip-text text-transparent  
         bg-gradient-to-r from-[#3B006A] to-[#71157A] 
         leading-6 font-poppins text-sm font-semibold pr-5'>
            Learn More </h3>

        <Image src={arrow} alt='arrow' width={10} />
        </div>
           
    </div>
  )
}

export default FeatureCards
