import React from 'react'
import Image from 'next/image'

import lines from "../public/assets/moblines.png";
// import mainline from "../public/assets/mobline.png";

type MobileImageProps = {
    main : any,
    second : any,

}


function MobileImage({main,second}:MobileImageProps) {
  return (
    <div className='flex w-[100%] justify-center flex-col gap-2 items-center'>

      <Image className=' flex-1 object-fill'  alt='mob' src={main} width={206} height={63} />
      <Image className=' flex-1 object-fill' alt='mob' src={lines} width={30} height={12} />
      <Image className=' flex-1 object-fill' alt='mob' src={second} width={598} height={109} />
      <div className='mt-8'>
     

        <div className=' border-b-black border-solid border-2 opacity-10  w-[376px]'>

        </div>

        </div>
    </div>
  )
}

export default MobileImage
