"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Container from "./Container";
import Sidebar from "./Sidebar";

const MobileMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="lg:hidden">
      <div className="fixed z-50 top-0 left-0 right-0 w-full bg-white py-5 shadow-md shadow-slate-200">
        <Container>
          <div className="flex items-center justify-between">
            <a href="#">
              <h3 className="text-secondary">Maruf</h3>
            </a>
            <a href="#">
              <FaBars
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-lg cursor-pointer"
              />
            </a>
          </div>
        </Container>
      </div>
      <div
        className={`absolute z-40 transition-all duration-300 lg:relative ${
          mobileMenu ? "top-0" : "-top-[200%] lg:top-0"
        } top-[70px] right-0 w-[50%] lg:w-full`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default MobileMenu;
