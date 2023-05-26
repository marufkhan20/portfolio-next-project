/* eslint-disable react/no-unescaped-entities */
import Container from "./Container";
import Heading from "./shared/Heading";
import Button from "./ui/Button";

const About = () => {
  return (
    <section id="about" className="py-[120px] bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full sm:w-[40%]">
            <Heading subTitle="- NICE TO MEET YOU!" title="Rashedul Islam" />
            <span className="text-xl font-semibold text-primary mt-2 block">
              Web designer & Developer
            </span>
            <div className="mt-8">
              <Button>Got a project?</Button>
            </div>
          </div>
          <div className="w-full sm:w-[60%]">
            <p className="text-lg text-body font-normal">
              Hello there! My name is Robert Elisc. I am a web designer &
              developer, and I'm very passionate and dedicated to my work.{" "}
              <br /> <br />
              With 20 years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </p>

            <div className="mt-16 flex flex-wrap items-center gap-10">
              <div>
                <span className="text-lg uppercase text-body border-b border-body leading-[18px]">
                  age
                </span>
                <h3 className="text-lg font-bold text-primary uppercase mt-2">
                  21
                </h3>
              </div>
              <div>
                <span className="text-lg uppercase text-body border-b border-body leading-[18px]">
                  born in
                </span>
                <h3 className="text-lg font-bold text-primary uppercase mt-2">
                  Noakhali, BD
                </h3>
              </div>
              <div>
                <span className="text-lg uppercase text-body border-b border-body leading-[18px]">
                  mail
                </span>
                <h3 className="text-lg font-bold text-primary uppercase mt-2">
                  mdm326040@gmail.com
                </h3>
              </div>
              <div>
                <span className="text-lg uppercase text-body border-b border-body leading-[18px]">
                  phone
                </span>
                <h3 className="text-lg font-bold text-primary uppercase mt-2">
                  +8801960038965
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-16">
          <div className="py-[60px] px-5 flex items-center flex-col gap-3 bg-[#d3f4ec] rounded-md">
            <h3 className="text-[40px] font-bold">10+</h3>
            <span className="text-lg font-medium text-body">
              YEARS OF EXPERIENCE
            </span>
          </div>
          <div className="py-[60px] px-5 flex items-center flex-col gap-3 bg-[#fce8d4] rounded-md">
            <h3 className="text-[40px] font-bold">50+</h3>
            <span className="text-lg font-medium text-body">
              PROJECTS COMPLETED
            </span>
          </div>
          <div className="py-[60px] px-5 flex items-center flex-col gap-3 bg-[#e3f9e0] rounded-md">
            <h3 className="text-[40px] font-bold">30+</h3>
            <span className="text-lg font-medium text-body">HAPPY CLIENTS</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
