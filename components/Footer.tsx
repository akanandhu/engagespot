import React from "react";
import Image from "next/image";
import engagelogo from "../public/assets/whitelogo.png";
import twitter from "../public/assets/twitter.png";
import linkedin from "../public/assets/linkedin.png";
import line from "../public/assets/line.png";

function Footer() {
  return (
    <div className="mx-auto max-w-9xl  pt-[3.4rem] pl-[1.6rem] pb-[1.5rem] pr-[6.5rem] ">
      <div className="flex flex-col">
        <div className="flex pl-[3.4rem] pb-[11rem]">
          <div>
            <Image src={engagelogo} alt="engagelogo" width={260} height={41} />

            <h3 className=" pt-[1.5rem] pb-[1rem] font-poppins font-normal text-white text-xl ">
              Campaigns For Email, Linkedin, and <br /> Twitter
            </h3>

            <div className="flex gap-6">
              <Image
                className=" cursor-pointer"
                alt="linkedin"
                src={linkedin}
                height={26}
                width={26}
              />
              <Image
                className=" cursor-pointer"
                alt="twitter"
                src={twitter}
                height={21}
                width={26}
              />
            </div>
          </div>
          <div className="flex  gap-12 pt-[4rem] pl-[6.8rem] text-xl ">
            <div className="text-white font-poppins ">
              <ul className=" text-[22px] font-semibold pb-[0.9rem]">
                Products
              </ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">Pricing</ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">
                React Notifications
              </ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">
                Notification UI kit
              </ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">
                Features
              </ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">
                Disposabel email Detector
              </ul>
            </div>

            <div className="text-white font-poppins  ">
              <ul className="  text-[22px] font-semibold pb-[0.9rem]">
                Company
              </ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">Blog</ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">Discord</ul>
              <ul className=" cursor-pointer  font-normal pb-[1rem]">Doc</ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">Roadmap</ul>
            </div>
            <div className="text-white font-poppins font-normal">
              <ul className=" text-[22px] font-semibold pb-[0.9rem]">
                Channels
              </ul>
              <ul className=" cursor-pointer   font-normal pb-[1rem]">SMS</ul>
              <ul className=" cursor-pointer font-normal pb-[1rem]">Email</ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={line} alt="line" />
          </div>
          <div className="flex text-white font-poppins pt-[1.25rem] pl-[5.35rem] ">
            <div className="pr-9">© 2022 Engagespot. All rights reserved.</div>
            <div className=" cursor-pointer pr-[1.85rem]">Help</div>
            <div className=" cursor-pointer pr-[1.85rem]">
              Terms and Conditions
            </div>
            <div className=" cursor-pointer pr-[1.85rem]">Privacy Policy</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
