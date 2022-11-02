import React from 'react'
import Image from 'next/image'

type ButtonBoxProps ={
    image: any,
    feature: any,
}

function ButtonBox({image,feature}:ButtonBoxProps) {
  return (
    <div className='relative'>
    <div className='absolute gap-4 py-0.5 pr-9 flex justify-content align-middle items-center  p-0.5 rounded-lg border border-engageprimary '>
      <Image alt='logo' src={image} width={32} height={30} />
      <h1 className='font-poppins font-medium
           bg-clip-text text-transparent 
             bg-gradient-to-r from-[#3B006A] to-[#71157A]'>{feature}</h1>

    </div>
    </div>
  )
}

export default ButtonBox
