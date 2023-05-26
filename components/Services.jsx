import { HiArrowNarrowRight } from "react-icons/hi";
import Container from "./Container";
import Heading from "./shared/Heading";

const Services = () => {
  return (
    <section id="services" className="pt-[120px] pb-[70px] bg-white">
      <Container>
        <Heading title="My Services" subTitle="- SERVICES" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="py-12 px-10 border rounded-md cursor-pointer transition-all hover:shadow-xl shadow-slate-300">
            <span className="block text-xl font-medium text-gray-400">01</span>
            <h3 className="my-4 text-xl">Web Design</h3>
            <p className="text-[#55527c] text-lg mb-7">
              Web development is the process of building, programming...
            </p>
            <h4 className="flex items-center gap-3 text-primary text-lg font-medium">
              <span>Read More</span>
              <HiArrowNarrowRight />
            </h4>
          </div>

          <div className="py-12 px-10 border rounded-md cursor-pointer transition-all hover:shadow-xl shadow-slate-300">
            <span className="block text-xl font-medium text-gray-400">02</span>
            <h3 className="my-4 text-xl">Web Design</h3>
            <p className="text-[#55527c] text-lg mb-7">
              Web development is the process of building, programming...
            </p>
            <h4 className="flex items-center gap-3 text-primary text-lg font-medium">
              <span>Read More</span>
              <HiArrowNarrowRight />
            </h4>
          </div>

          <div className="py-12 px-10 border rounded-md cursor-pointer transition-all hover:shadow-xl shadow-slate-300">
            <span className="block text-xl font-medium text-gray-400">03</span>
            <h3 className="my-4 text-xl">Web Design</h3>
            <p className="text-[#55527c] text-lg mb-7">
              Web development is the process of building, programming...
            </p>
            <h4 className="flex items-center gap-3 text-primary text-lg font-medium">
              <span>Read More</span>
              <HiArrowNarrowRight />
            </h4>
          </div>

          <div className="py-12 px-10 border rounded-md cursor-pointer transition-all hover:shadow-xl shadow-slate-300">
            <span className="block text-xl font-medium text-gray-400">04</span>
            <h3 className="my-4 text-xl">Web Design</h3>
            <p className="text-[#55527c] text-lg mb-7">
              Web development is the process of building, programming...
            </p>
            <h4 className="flex items-center gap-3 text-primary text-lg font-medium">
              <span>Read More</span>
              <HiArrowNarrowRight />
            </h4>
          </div>

          <div className="py-12 px-10 border rounded-md cursor-pointer transition-all hover:shadow-xl shadow-slate-300">
            <span className="block text-xl font-medium text-gray-400">05</span>
            <h3 className="my-4 text-xl">Web Design</h3>
            <p className="text-[#55527c] text-lg mb-7">
              Web development is the process of building, programming...
            </p>
            <h4 className="flex items-center gap-3 text-primary text-lg font-medium">
              <span>Read More</span>
              <HiArrowNarrowRight />
            </h4>
          </div>

          <div className="py-12 px-10 border rounded-md cursor-pointer transition-all hover:shadow-xl shadow-slate-300">
            <span className="block text-xl font-medium text-gray-400">06</span>
            <h3 className="my-4 text-xl">Web Design</h3>
            <p className="text-[#55527c] text-lg mb-7">
              Web development is the process of building, programming...
            </p>
            <h4 className="flex items-center gap-3 text-primary text-lg font-medium">
              <span>Read More</span>
              <HiArrowNarrowRight />
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
