import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import IntroVideo from "@/components/IntroVideo";
import MobileMenu from "@/components/MobileMenu";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Sidebar from "@/components/Sidebar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <MobileMenu />
      <main className="flex justify-between ">
        <div className="hidden lg:block sticky sm:w-[25%] xl:w-[20%] border-r border-gray-200 top-0 left-0 max-h-[100vh]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[75%] xl:w-[80%]">
          <Banner />
          <About />
          <Experience />
          <Services />
          <IntroVideo />
          <RecentWorks />
          <Testimonial />
          <Contact />
        </div>
      </main>
    </div>
  );
}
