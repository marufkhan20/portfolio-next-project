/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "./Container";
import Button from "./ui/Button";

const Banner = () => {
  return (
    <header className="min-h-[100vh] bg-[#effbf8] py-[140px]">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-primary font-extrabold text-[40px] sm:text-[50px] md:text-[64px] leading-[70px] mb-9">
              Hi, I'm <span className="text-secondary">Maruf!</span> <br />
              Creative Designer
            </h2>
            <span className="text-body text-lg">
              I'm a Florida based web designer & front‑end developer <br />
              with <span className="text-secondary">10+ years</span> of
              experience
            </span>
            <div className="flex items-center gap-3 mt-11">
              <Button>Got a project?</Button>
              <Button type="secondary">Let's talk</Button>
            </div>
            <div className="flex flex-col gap-3 border-l-4 border-[#FF972D] pl-3 mt-[150px]">
              <li className="text-lg font-semibold transition-all hover:text-[#FF972D]">
                <a href="tel:+8801960038965">+8801960038965</a>
              </li>
              <li className="text-lg font-semibold transition-all hover:text-[#FF972D]">
                <a href="#">mdm326040@gmail.com</a>
              </li>
              <li className="text-lg font-semibold transition-all hover:text-[#FF972D]">
                <a href="#">Senbag, Noakhali, Chattogram, Bangladesh</a>
              </li>
            </div>
          </div>
          <div>
            <Image src="/banner.png" alt="banner" width={550} height={600} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Banner;
