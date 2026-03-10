import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-white py-2.5 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto">
        <Image src={"/images/logo.png"} width={151} height={40} alt="로고 이미지"/>
      </div>
    </header>
  );
};

export default Header;
