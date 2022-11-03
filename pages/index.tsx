import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import engage from "../public/assets/engage.png";
import FeatureCards from "../components/FeatureCards";
import messages from "../public/assets/message.png";
import messbox from "../public/assets/messbox.png";
import chat from "../public/assets/chat.png";
import chatbox from "../public/assets/chatbox.png";
import mail from "../public/assets/mail.png";
import twomess from "../public/assets/twomess.png";
import monitor from "../public/assets/monitor.png";
import object from "../public/assets/Object.png";
import setting from "../public/assets/setting.png";
import FeatureSelect from "../components/FeatureSelect";
import tick from "../public/assets/tick.png";
import ButtonBox from "../components/ButtonBox";
import one from "../public/assets/one.png";
import two from "../public/assets/two.png";
import three from "../public/assets/three.png";
import four from "../public/assets/four.png";
import five from "../public/assets/five.png";
import six from "../public/assets/six.png";
import arrow from "../public/assets/arrow.png";
import second from "../public/assets/second.png";
import Footer from "../components/Footer";
import mobilesecond from '../public/assets/mobilesecond.png';
import MobileImage from "../components/MobileImage";
import mailmob from "../public/assets/mailmob.png";
import mobone from "../public/assets/mob1.png";

export default function Home() {
  return (
    <div className=" h-full   ">
      <div className="relative overflow-hidden  ">
        <div
          className="lg:hidden sm:absolute lg:p-0 pt-[6.1rem] pl-[1.5rem]   sm:inset-0 sm:block"
          aria-hidden="true"
        >
          <Image className=' h-[78px] w-auto '  src={engage}  alt='EngageSpot Logo' />
        </div>
        <div className="relative min-w-7xl min-h-[100%]  flex flex-col pt-8  ">
          <div>
            <nav
              className="relative mx-auto  flex max-w-7xl items-center justify-between px-10 sm:px-6"
              aria-label="Global"
            >
              <div className="flex flex-1  items-center justify-between">
                <div className="lg:flex w-full hidden   items-center justify-between md:w-auto">
                  <a>
                    <Image
                      className=" h-[48px] w-auto "
                      src={engage}
                      alt="EngageSpot Logo"
                    />
                  </a>
                  
                </div>
                <div className="hidden space-x-10 lg:ml-10 lg:flex md:pr-[7%] font-poppins text-lg ">
                  <a
                    href="#"
                    className=" cursor-pointer font-semibold text-engageprimary hover:text-gray-300"
                  >
                    Products
                  </a>

                  <a
                    href="#"
                    className=" cursor-pointer font-semibold text-engageprimary hover:text-gray-300"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className=" font-semibold text-engageprimary hover:text-gray-300"
                  >
                    Integrations
                  </a>

                  <a
                    href="#"
                    className="font-semibold text-engageprimary hover:text-gray-300"
                  >
                    Documentation
                  </a>

                  <a
                    href="#"
                    className="font-semibold text-engageprimary hover:text-gray-300"
                  >
                    Blog
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex">
                <button className="inline-flex  items-center  border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] px-4 py-2 text-lg font-medium  rounded-[5px] font-poppins text-white hover:bg-gray-700">
                  Get Started
                </button>
              </div>
            </nav>

           
          </div>

          <main className="mt-16 sm:mt-24 ">
            <div className="mx-auto max-w-7xl ">
              <div className="  lg:grid lg:grid-cols-12 justify-between">
                <div className="  px-4 py-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                  <div>
                    <div className="  md:pt-[5.5rem] lg:pt-0 pt-[2rem]   items-center rounded-full  py-1 pr-2  sm:text-base lg:text-sm xl:text-base">
                      <span className=" leading-[75px] text-[49px] font-bold  font-poppins bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#7D1874] ">
                        Build Notification <br /> Infrastructure for your
                        Product
                      </span>
                    </div>
                    <h1 className="mt-4 text-4xl lg:text-xl   font-poppins font-normal tracking-tight bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#7D1874] sm:text-5xl  mb-16">
                      Say goodbye to building & maintaining a notification{" "}
                      <br /> micro-service.
                    </h1>
                    <div className=" relative md:flex justify-between align-middle items-center md:px-3 rounded-lg  md:border-engageprimary md:border-solid md:border-2 h-[6rem] md:h-[4.7rem] w-auto ">
                      <input 
                        type="email"
                        placeholder="Enter your mail id "
                        className="  md:mb-0 mb-9 rounded-lg md:rounded-none border-engageprimary border-solid border-2 w-[100%] md:w-96 focus:outline-none md:border-0 md:border-none    h-[80%] md:h-[60%] align-middle items-center pl-7 placeholder:font-mont placeholder:text-black placeholder:opacity-50 placeholder:text-lg placeholder:font-semibold   "
                      />
                      <button
                        className="items-center  w-[100%] h-[68px]
                    border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] md:h-[54px] md:w-[169px] flex justify-center align-middle md:px-[2.5%] md:py-3 text-2xl md:text-lg font-medium 
                   rounded-lg font-mont text-white hover:bg-gray-700 "
                      >
                        Get Started
                      </button>
                    </div>

                    <div className="md:hidden mx-auto pt-[25%] flex justify-center">

                      <Image src={mobilesecond} alt='mobile' height={3199} width={366} />

                    </div>

                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-start justify-between">
                        <div className="flex justify-center px-1">
                          {/* <Image width={50} height={50} className="h-9 sm:h-10" src="https://tailwindui.com/Image/logos/tuple-logo-gray-400.svg" alt="Tuple"/> */}
                        </div>
                        <div className="flex justify-center px-1">
                          {/* <Image width={50} height={50} className="h-9 sm:h-10" src="https://tailwindui.com/Image/logos/workcation-logo-gray-400.svg" alt="Workcation"/> */}
                        </div>
                        <div className="flex justify-center px-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-20 lg:visible invisible top-[0.9%]  ">
                  <Image
                    alt="image"
                    src={second}
                    
                  
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-20 flex justify-center font-poppins font-semibold text-white pt-7 text-3xl bg-gradient-to-r from-[#3B006A] to-[#7D1874]  h-[311px]">
              <h1>TRUSTED BY DEVELOPERS AT</h1>
            </div>

            <div className="flex flex-col justify-center text-center">
              <h1 className="bg-clip-text text-transparent   bg-gradient-to-r from-[#3B006A] to-[#71157A] font-poppins font-semibold text-[3.5rem] pt-[5rem] ">
                Features to build the <br /> Best notification experience
              </h1>
              <h3 className="md:hidden mx-auto pt-5 leading-7 w-[85%] font-poppins ">We've built awesome features so you don't have to start from scratch.
              Just integrate our SDKs and APIs to build a scalable notification system for your product.</h3>
            </div>
            <div className="relative  flex flex-col lg:flex-row  justify-start  md:justify-center text-center mx-auto max-w-7xl  items-center mt-[6rem] lg:mt-[8.5rem] gap-x-10  px-4 sm:px-6 ">
              <FeatureCards
                heading="In-App Notification"
                message="In-app notification component for front-end apps"
                icon={messages}
              />
              <FeatureCards
                icon={messbox}
                heading="Email Notifications"
                message="Send email to users via Amazon SES, Sendgrid etc."
              />
              <FeatureCards
                icon={chatbox}
                heading="Web Push"
                message="Built in support for browser push notification "
              />
            </div>
            <div className="relative  flex flex-col lg:flex-row  justify-start  md:justify-center mx-auto max-w-7xl items-center lg:mt-14  gap-x-10  px-4 sm:px-6 ">
              <FeatureCards
                icon={chat}
                heading="Mobile Push"
                message="Deliver push notifications via FCM, APNS etc."
              />
              <FeatureCards
                icon={mail}
                heading="SMS"
                message="Send SMS notifications to your users."
              />
              <FeatureCards
                icon={twomess}
                heading="Chat"
                message="Send chat messages to your users via Slack"
              />
            </div>
            <div className="relative  flex flex-col lg:flex-row  justify-start  md:justify-center mx-auto max-w-7xl items-center lg:mt-14  gap-x-10  px-4 sm:px-6">
              <FeatureCards
                icon={object}
                heading="User Preferences"
                message="Allow your users to set their notification preferences. UI components included"
              />
              <FeatureCards
                icon={setting}
                heading="Fully Customizable"
                message="Customize front-end components and our backend SDKs and APIs to suit your needs."
              />
              <FeatureCards
                icon={monitor}
                heading="Logs and Monitoring"
                message="Get access to logs from providers to debug cross-channel delivery and analyze performance."
              />
            </div>

            <div className="w-[80%] mt-[11rem] lg:mt-14 flex text-2xl justify-center mx-auto max-w-7xl font-poppins  font-medium text-black  lg:pt-7  ">
              <h1>
                And many more features out-of-the box to build a notification
                system in minutes.
              </h1>
            </div>
            <div className="relative flex w-full justify-center  md:justify-center align-middle mt-[3rem] mx-auto max-w-7xl gap-x-5   px-4 sm:px-6 ">
              <div className="grid grid-cols-2 lg:grid-cols-4 pl-[7.8rem] gap-9 grid-wrap  lg:justify-between gap-x-[13.5rem] ">
                <FeatureSelect icons={tick} title="Delivery Reciept" />
                <FeatureSelect icons={tick} title="Read Reciept" />
                <FeatureSelect icons={tick} title="SMTP Support" />
                <FeatureSelect icons={tick} title="Notification" />

                <FeatureSelect icons={tick} title="HMAC Auth" />
                <FeatureSelect icons={tick} title="User Identifiers" />
                <FeatureSelect icons={tick} title="Paginated Notifications" />
                <FeatureSelect icons={tick} title="React Hooks" />

                <FeatureSelect icons={tick} title="Notification Images" />
                <FeatureSelect icons={tick} title="Emoji Support" />
                <FeatureSelect icons={tick} title="Notification Sounds" />
                <FeatureSelect icons={tick} title="Custom Actions" />

                <FeatureSelect icons={tick} title="Fast Response Time" />
                <FeatureSelect icons={tick} title="Scalable Infrastructure" />
                <FeatureSelect icons={tick} title="Dedicated Support" />
                <FeatureSelect icons={tick} title="Enterprise SLA" />
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center mt-24 ">
              <h1
                className=" text-center font-poppins text-5xl font-semibold
           bg-clip-text text-transparent 
             bg-gradient-to-r from-[#3B006A] to-[#71157A] p-2 mb-3 "
              >
                Pick channels for your messages
              </h1>
              <h2 className=" text-center font-poppins font-medium text-2xl pb-12 ">
                and setup your first notification in 5 minutes
              </h2>

              <div className=" bg-engagerose relative  lg:mb-40 rounded-xl  ">

                {/* //For Mobile */}

              <div className="px-32 py-28 flex flex-col gap-9 jus visible lg:hidden ">
                          <MobileImage main={mailmob} second={mobone} />
                          <MobileImage main={mailmob} second={mobone} />
                          <MobileImage main={mailmob} second={mobone} />
                          <MobileImage main={mailmob} second={mobone} />
                          <MobileImage main={mailmob} second={mobone} />
                          <MobileImage main={mailmob} second={mobone} />

                        
                </div>

                {/* For Desktop */}

                <div className="px-32 py-28  lg:flex flex-col gap-12 hidden  ">
                  <Image src={one} alt="first" width={676} height={53} />
                  <Image src={two} alt="first" width={809} height={53} />
                  <Image src={three} alt="first" width={494} height={53} />
                  <Image src={four} alt="first" width={427} height={53} />
                  <Image src={five} alt="first" width={279} height={53} />
                  <Image src={six} alt="first" width={402} height={53} />
                </div>

              </div>
            </div>

            <div className="flex justify-center">
              <div
                className=" w-[90%] text-white mt-[17%] lg:mt-0  flex justify-center items-center
             bg-gradient-to-r from-[#3B006A] to-[#71157A] rounded-[1.25rem] "
              >
                <div className=" pt-16 pb-8 w-[77%] text-center flex justify-center items-center flex-col">
                  <h3 className=" font-mont text-[2.5rem] text-4xl font-bold pb-8  ">
                    A complete notifications system, setup in minutes
                  </h3>
                  <p className="text-2xl w-[76%] leading-9 pb-6 ">
                    Get a complete product notification system that includes
                    batching, cross-channel delivery, and preference management
                    all within a few minutes. 10k notifications included per
                    month for free.
                  </p>
                  <button
                    className="bg-white font-mont font-bold text-xl 
               py-5 pl-6 pr-7 rounded-[10px] flex gap-3 justify-center items-center text-engageprimary cursor-pointer  "
                  >
                    Get Started for free{" "}
                    <Image alt="arrow" height={12} width={22} src={arrow} />
                  </button>
                </div>
              </div>
            </div>

            <footer className="">
              <div className="  mx-auto max-w-9xl mt-[8.5rem] flex relaive flex-col  bg-gradient-to-r from-[#3B006A] to-[#71157A] ">
                <Footer />
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
