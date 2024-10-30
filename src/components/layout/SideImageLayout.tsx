import React from "react";
import Image from "next/image";
import image from "../../public/sign in/image.png";

interface SideImageLayoutProps {
  children: "";
}

const SideImageLayout: React.FC<SideImageLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-[40%] flex items-center justify-center relative bg-[#500C0B]">
        <Image
          src={image}
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div
          className="
            absolute 
            transform 
            -rotate-90 
            font-bold 
            text-[140px] 
            leading-[140px] 
            text-right 
            text-[#FF0000] 
            whitespace-nowrap
          "
        >
          TREE NEWS
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default SideImageLayout;
