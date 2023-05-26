/* eslint-disable react/no-unescaped-entities */
import Container from "./Container";
import Heading from "./shared/Heading";
import Button from "./ui/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-[120px] bg-[#e9f9ff] mt-[120px]">
      <Container>
        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-[50%]">
            <Heading subTitle="- LET'S CONNECT" title="Get in touch" />
            <p className="mt-7 text-body text-lg leading-[32px]">
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want to run past me. You
              can contact anytime at 24/7
            </p>
            <div className="mt-12 flex flex-col gap-2 text-primary font-semibold text-lg">
              <h3 className="cursor-pointer">+77 022 444 05 05</h3>
              <h3 className="cursor-pointer">support@elisc.com</h3>
              <h3 className="cursor-pointer">Ave Street Avenue, New York</h3>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <form action="" className="flex flex-col gap-6">
              <input
                className="block w-full text-lg py-3 px-[18px] outline-none focus:ring-1 border"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="block w-full text-lg py-3 px-[18px] outline-none focus:ring-1 border"
                type="email"
                placeholder="Your email"
              />
              <textarea
                className="block w-full text-lg py-3 px-[18px] outline-none focus:ring-1 border h-[120px]"
                placeholder="Write something..."
              />
              <div>
                <Button>Submit now</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
