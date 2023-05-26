/* eslint-disable @next/next/no-img-element */
import { TbPlayerPlayFilled } from "react-icons/tb";
import Container from "./Container";

const IntroVideo = () => {
  return (
    <section>
      <Container>
        <div className="relative cursor-pointer">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/40 rounded-md flex items-center justify-center">
            <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center cursor-pointer">
              <TbPlayerPlayFilled className="text-[#735BF3] text-2xl rounded-md" />
            </div>
          </div>
          <img
            src="/into-banner.jpg"
            alt="intro banner"
            className="w-full h-full sm:h-[400px] md:h-[600px] rounded-md"
          />
        </div>
      </Container>
    </section>
  );
};

export default IntroVideo;
