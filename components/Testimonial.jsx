/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Container from "./Container";
import Heading from "./shared/Heading";
// import required modules
import { fetchDataFromAPI } from "@/utils/api";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";

const Testimonial = () => {
  const [data, setData] = useState([]);

  // fetch all projects
  const fetchProjects = async () => {
    const { data } = await fetchDataFromAPI("/reviews?populate=*");
    setData(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <section id="testimonial">
      <Container>
        <div className="p-[50px] sm:p-[100px] bg-[#fff5f6] rounded-md">
          <div className="text-center">
            <Heading title="What client's say?" subTitle="- TESTIMONIAL" />
          </div>

          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {data?.map((item) => {
              const { image, id, country, name, review } =
                item?.attributes || {};
              const { url } = image?.data?.attributes || {};

              return (
                <SwiperSlide key={id}>
                  <div className="mt-[45px] text-center">
                    <p className="text-2xl font-normal text-body leading-[40px]">
                      {review?.slice(0, 200)}
                    </p>
                    <div className="mt-7 flex items-center justify-center gap-4 mb-2">
                      <img
                        className="rounded-full h-[60px] w-[60px]"
                        src={url}
                        alt="client"
                      />
                      <span className="font-medium text-3xl text-primary">
                        {name}
                      </span>
                    </div>
                    <span className="text-body text-lg font-medium">
                      {country}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
