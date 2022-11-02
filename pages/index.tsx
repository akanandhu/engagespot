import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import engage from  '../public/assets/engage.png'

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden ">
    <div className="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
      {/* <Image className=' h-[20px] w-auto '  src={engage}  alt='EngageSpot Logo' /> */}
    </div>
    <div className="relative pt-6 pb-16 sm:pb-24 ">
      <div>
        <nav className="relative mx-auto  flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div className="flex flex-1  items-center justify-between">
            <div className="flex w-full  items-center justify-between md:w-auto">
              <a href="#">
              
                <Image className=' h-[48px] w-auto '  src={engage}  alt='EngageSpot Logo' />

              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Heroicon name: outline/bars-3 --> */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
               </div>
            </div>
            <div className="hidden space-x-10 md:ml-10 md:flex md:pr-[7%] font-poppins text-lg ">
            <a href="#" className=" font-semibold text-engageprimary hover:text-gray-300">Products</a>

              <a href="#" className=" font-semibold text-engageprimary hover:text-gray-300">Pricing</a>
  
              <a href="#" className="font-semibold text-engageprimary hover:text-gray-300">Integration</a>
  
              <a href="#" className="font-semibold text-engageprimary hover:text-gray-300">Documentation</a>
  
              <a href="#" className="font-semibold text-engageprimary hover:text-gray-300">Blog</a>
            </div>
          </div>
          <div className="hidden md:flex">
            <button className="inline-flex  items-center  border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] px-4 py-2 text-lg font-medium  rounded-[5px] font-poppins text-white hover:bg-gray-700">Get Started</button>
          </div>
        </nav>
  
        {/* <!--
          Mobile menu, show/hide based on menu open state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */}
        <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                {/* <Image width={50} height={50} className="h-8 w-auto" src="https://tailwindui.com/Image/logos/mark.svg?color=indigo&shade=600" alt=""/> */}
              </div>
              <div className="-mr-2">
                <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  {/* <!-- Heroicon name: outline/x-mark --> */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Product</a>
  
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Features</a>
  
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Marketplace</a>
  
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Company</a>
            </div>
            <a href="#" className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</a>
          </div>
          </div>
           </div>
  
      <main className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 py-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <div className=" items-center rounded-full  py-1 pr-2  sm:text-base lg:text-sm xl:text-base">
                  <span className=" text-6xl font-bold leading-10 font-poppins bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#7D1874] ">Build Notification <br/> Infrastructure for your <br/> Product</span>
                  
                  
                </div>
                <h1 className="mt-4 text-4xl font-poppins font-normal tracking-tight bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#7D1874] sm:text-5xl md:text-xl mb-16">Say goodbye to building & maintaining a notification <br/> microservice.</h1>
                <div className='relative flex justify-between align-middle items-center px-3 rounded-lg  border-engageprimary border-solid border-2 h-[4.7rem] w-auto '>
                  
                  <input type='email' placeholder='Enter your mail id ' className=' h-[60%] align-middle items-center pl-10 placeholder:font-mont placeholder:text-black placeholder:opacity-50 placeholder:text-lg placeholder:font-semibold   '/>
                  <button className='items-center  border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] px-6 py-3 text-lg font-medium  rounded-[5px] font-mont text-white hover:bg-gray-700 '>Get Started </button>
                  
                </div>
                <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div className="flex flex-wrap items-start justify-between">
                    <div className="flex justify-center px-1">
                      {/* <Image width={50} height={50} className="h-9 sm:h-10" src="https://tailwindui.com/Image/logos/tuple-logo-gray-400.svg" alt="Tuple"/> */}
                    </div>
                    <div className="flex justify-center px-1">
                      {/* <Image width={50} height={50} className="h-9 sm:h-10" src="https://tailwindui.com/Image/logos/workcation-logo-gray-400.svg" alt="Workcation"/> */}
                    </div>
                    <div className="flex justify-center px-1">
                      {/* <Image width={50} height={50} className="h-9 sm:h-10" src="https://tailwindui.com/Image/logos/statickit-logo-gray-400.svg" alt="StaticKit"/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                <div className="px-4 py-8 sm:px-10">
                  <div>
                    {/* <p className="text-sm font-medium text-gray-700">Sign in with</p> */}
  
                   
                  </div>
  
                
                </div>
                
              </div>

            
            </div>
          </div>


        </div>
        <div className='w-full mt-14 flex justify-center font-poppins font-semibold text-white pt-7 text-3xl bg-gradient-to-r from-[#3B006A] to-[#7D1874]  h-[311px]'>
          <h1>TRUSTED BY DEVELOPERS AT</h1>

        </div>
      </main>
    </div>
  </div>
    </div>
  )
}
