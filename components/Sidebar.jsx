import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className={` bg-white p-[50px] flex-col items-center flex`}>
      <div>
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={125}
          height={125}
          className="rounded-full border-[3px] border-secondary"
        />
      </div>
      <h3 className="font-bold text-3xl mt-5 text-center">Rashedul Islam</h3>
      <div className="mt-[125px] flex flex-col gap-6 items-center">
        <li className="text-lg text-body transition-all hover:text-secondary">
          <a href="#">Home</a>
        </li>
        <li className="text-lg text-body transition-all hover:text-secondary">
          <a href="#about">About</a>
        </li>
        <li className="text-lg text-body transition-all hover:text-secondary">
          <a href="#services">Services</a>
        </li>
        <li className="text-lg text-body transition-all hover:text-secondary">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="text-lg text-body transition-all hover:text-secondary">
          <a href="#testimonial">Testimonial</a>
        </li>
        <li className="text-lg text-body transition-all hover:text-secondary">
          <a href="#contact">Contact</a>
        </li>
      </div>
      <div className="flex items-center gap-1 mt-[120px]">
        <li className="w-10 h-10 bg-[#F3F3F6] flex items-center justify-center text-lg text-primary rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white">
          <GrFacebookOption />
        </li>
        <li className="w-10 h-10 bg-[#F3F3F6] flex items-center justify-center text-lg text-primary rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white">
          <RiTwitterFill />
        </li>
        <li className="w-10 h-10 bg-[#F3F3F6] flex items-center justify-center text-lg text-primary rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white">
          <FaLinkedinIn />
        </li>
      </div>
      <p className="text-center mt-5 text-body">
        Copyright © 2023 Rashedul Islam. <br />
        All rights reserved.
      </p>
    </div>
  );
};

export default Sidebar;
