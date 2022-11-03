import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import engage from  '../public/assets/engage.png'
import FeatureCards from '../components/FeatureCards'
import messages from '../public/assets/message.png';
import messbox from '../public/assets/messbox.png'
import chat from '../public/assets/chat.png'
import chatbox from '../public/assets/chatbox.png'
import mail from '../public/assets/mail.png'
import twomess from '../public/assets/twomess.png'
import monitor from '../public/assets/monitor.png'
import object from '../public/assets/Object.png'
import setting from '../public/assets/setting.png'
import FeatureSelect from '../components/FeatureSelect'
import tick from '../public/assets/tick.png'
import ButtonBox from '../components/ButtonBox'
import one from '../public/assets/one.png'
import two from '../public/assets/two.png'
import three from '../public/assets/three.png'
import four from '../public/assets/four.png'
import five from '../public/assets/five.png'
import six from '../public/assets/six.png'
import arrow from '../public/assets/arrow.png'
import second from '../public/assets/second.png'
export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden ">
    <div className="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
      {/* <Image className=' h-[20px] w-auto '  src={engage}  alt='EngageSpot Logo' /> */}
    </div>
    <div className="relative pt-8 pb-16 sm:pb-24 ">
      <div>
        <nav className="relative mx-auto  flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div className="flex flex-1  items-center justify-between">
            <div className="flex w-full  items-center justify-between md:w-auto">
              <a >
              
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
  
              <a href="#" className="font-semibold text-engageprimary hover:text-gray-300">Integrations</a>
  
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
                <div className="  items-center rounded-full  py-1 pr-2  sm:text-base lg:text-sm xl:text-base">
                  <span className=" leading-[75px] text-[49px] font-bold  font-poppins bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#7D1874] ">Build Notification <br/> Infrastructure for your Product</span>
                  
                  
                </div>
                <h1 className="mt-4 text-4xl font-poppins font-normal tracking-tight bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#7D1874] sm:text-5xl md:text-xl mb-16">Say goodbye to building & maintaining a notification <br/> micro-service.</h1>
                <div className='relative flex justify-between align-middle items-center px-3 rounded-lg  border-engageprimary border-solid border-2 h-[4.7rem] w-auto '>
                  
                  <input type='email' placeholder='Enter your mail id ' className=' w-96 focus:outline-none border-0 border-none h-[60%] align-middle items-center pl-7 placeholder:font-mont placeholder:text-black placeholder:opacity-50 placeholder:text-lg placeholder:font-semibold   '/>
                  <button className='items-center
                    border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] h-[54px] w-[169px] flex justify-center align-middle px-[2.5%] py-3 text-lg font-medium 
                   rounded-lg font-mont text-white hover:bg-gray-700 '>Get Started </button>
                  
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
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 relative sm:mt-24 lg:col-span-6 lg:mt-0">
              <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                <div className="px-4 py-8 sm:px-10">
                  <div className='absolute'>
                    {/* <Image src={second} height={1500} width={1200} /> */}
  
                   
                  </div>
  
                
                </div>
                
              </div>

            
            </div>
          </div>


        </div>
        <div className='w-full mt-20 flex justify-center font-poppins font-semibold text-white pt-7 text-3xl bg-gradient-to-r from-[#3B006A] to-[#7D1874]  h-[311px]'>
          <h1>TRUSTED BY DEVELOPERS AT</h1>

        </div>

        
        <div className='flex justify-center text-center'>
          <h1 className='bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#71157A] font-poppins font-semibold text-[3.5rem] pt-[5rem] '>Features to build the <br/> Best notification experience</h1>

        </div>
        <div className='relative  flex justify-center text-center mx-auto max-w-7xl  items-center mt-[8.5rem] gap-x-10  px-4 sm:px-6 '>
          
                    <FeatureCards heading='In-App Notification'message='In-app notification component for front-end apps' icon={messages}   />
                    <FeatureCards icon={messbox} heading='Email Notifications' message='Send email to users via Amazon SES, Sendgrid etc.' />
                    <FeatureCards icon={chatbox} heading='Web Push' message='Built in support for browser push notification ' />
        </div>
        <div className='relative  flex justify-center text-center mx-auto max-w-7xl items-center mt-14  gap-x-10  px-4 sm:px-6 '>
          
                    <FeatureCards icon={chat} heading='Mobile Push' message='Deliver push notification via FCM, APNS etc.' />
                    <FeatureCards icon={mail} heading='SMS' message='Send SMS notification to your users.' />
                    <FeatureCards icon={twomess} heading='Chat' message='Send chat messages to your users via Slack' />
        </div>
        <div className='relative  flex justify-center text-center mx-auto max-w-7xl items-center mt-14  gap-x-10  px-4 sm:px-6'>
          
                    <FeatureCards icon={object} heading='User Preferences' message='Allow your users to set their notification preferences. UI components included' />
                    <FeatureCards icon={setting} heading='Fully Customizable' message='Customize front-end components and our backend SDKs and APIs to suit your needs.' />
                    <FeatureCards icon={monitor} heading='Logs and Monitoring' message='Get access to logs from providers to debug cross-channel delivery and analyze performance.'/>
        </div>

        <div className='w-full mt-14 flex text-2xl justify-center mx-auto max-w-7xl font-poppins  font-medium text-black pt-7  '>
          <h1>And many more features out-of-the box to build a notification system in minutes.</h1>

        </div>
        <div className='relative flex w-full  justify-start align-middle   mt-[3rem] mx-auto max-w-7xl gap-x-5   px-4 sm:px-6 '>
          <div className='grid grid-cols-4 pl-[7.8rem] gap-9 grid-wrap justify-between gap-x-[13.5rem] '>
              <FeatureSelect icons={tick} title='Delivery Reciept' />
              <FeatureSelect icons={tick} title='Read Reciept' />
              <FeatureSelect icons={tick} title='SMTP Support' />
              <FeatureSelect icons={tick} title='Notification' />
        
    
              <FeatureSelect icons={tick} title='HMAC Auth' />
              <FeatureSelect icons={tick} title='User Identifiers' />
              <FeatureSelect icons={tick} title='Paginated Notifications' />
              <FeatureSelect icons={tick} title='React Hooks' />
        
        
              <FeatureSelect icons={tick} title='Notification Images' />
              <FeatureSelect icons={tick} title='Emoji Support' />
              <FeatureSelect icons={tick} title='Notification Sounds' />
              <FeatureSelect icons={tick} title='Custom Actions' />
      
        
              <FeatureSelect icons={tick} title='Fast Response Time' />
              <FeatureSelect icons={tick} title='Scalable Infrastructure' />
              <FeatureSelect icons={tick} title='Dedicated Support' />
              <FeatureSelect icons={tick} title='Enterprise SLA' />
              </div>
        </div>

        <div className='relative flex flex-col items-center justify-center mt-24 '>
          <h1 className=' font-poppins text-5xl font-semibold
           bg-clip-text text-transparent 
             bg-gradient-to-r from-[#3B006A] to-[#71157A] p-2 mb-3 '>Pick channels for your messages</h1>
          <h2 className=' font-poppins font-medium text-2xl pb-12 '>and setup your first notification in 5 minutes</h2>

          <div className=' bg-engagerose relative mb-40 rounded-xl  '>
             
            <div className='px-32 py-28 flex flex-col gap-12  '>
                 <Image src={one} alt='first' width={676} height={53} />
                 <Image src={two} alt='first' width={809} height={53} />
                 <Image src={three} alt='first' width={494} height={53} />
                 <Image src={four} alt='first' width={427} height={53} />
                 <Image src={five} alt='first' width={279} height={53} />
                 <Image src={six} alt='first' width={402} height={53} />
            </div>
           
  
          </div>
        </div>

        <div className='flex justify-center'>
          <div className=' w-[90%] text-white  flex justify-center items-center
             bg-gradient-to-r from-[#3B006A] to-[#71157A] rounded-[1.25rem] '>
              <div className=' pt-16 pb-8 w-[77%] text-center flex justify-center items-center flex-col'>
              <h3 className=' font-mont text-[2.5rem] text-4xl font-bold pb-8  '>A complete notifications system, setup in minutes</h3>
              <p className='text-2xl w-[76%] leading-9 pb-6 '>Get a complete product notification system that includes batching, cross-channel delivery, and preference management all within a few minutes. 10k notifications included per month for free.</p>
              <button className='bg-white font-mont font-bold text-xl
               py-5 pl-6 pr-7 rounded-[10px] flex gap-3 justify-center items-center text-engageprimary  '>Get Started for free <Image alt='arrow' height={12} width={22} src={arrow}/></button>
              </div>
          </div>

        </div>

        

        


      </main>
    </div>
  </div>
    </div>
  )
}
