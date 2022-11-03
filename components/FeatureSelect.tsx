import React from "react";
import Image from "next/image";

type FeatureSelectProps = {
  icons: any;
  title: any;
};

function FeatureSelect({ icons, title }: FeatureSelectProps) {
  return (
    <div className="  pt-[1.15rem] pb-7 px-10 rounded-[19px] h-auto flex flex-col justify-center items-center text-center ">
      <div className="w-[300px]  flex flex-row justify-start items-center gap-3  ">
        <Image src={icons} width={26} height={26} alt="tick" />
        <h3 className=" text-black font-poppins font-normal text-lg ">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default FeatureSelect;
