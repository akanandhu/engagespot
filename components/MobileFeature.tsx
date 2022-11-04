import React from 'react'
import Image from 'next/image'

import lines from "../public/assets/moblines.png";

type MobileFeatureProps = {
    name : any;
}


function MobileFeature({name}:MobileFeatureProps) {
  return (
    <div className='flex w-[100%] justify-center flex-col gap-2 items-center'>

      <Image alt='name' src={name} />

      <div className='mt-8'>
     

        <div className=' border-b-black border-solid border-2 opacity-10  w-[376px]'>

        </div>

        </div>
    </div>
  )
}

export default MobileFeature
