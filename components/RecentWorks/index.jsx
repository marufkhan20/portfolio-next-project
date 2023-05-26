"use client";
/* eslint-disable @next/next/no-img-element */
import { fetchDataFromAPI } from "@/utils/api";
import { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../shared/Heading";
import Button from "../ui/Button";
import ProjectView from "./ProjectView";

const RecentWorks = () => {
  const [data, setData] = useState([]);
  const [viewProject, setViewProject] = useState({});

  // fetch all projects
  const fetchProjects = async () => {
    const { data } = await fetchDataFromAPI("/works?populate=*");
    setData(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <section id="portfolio" className="py-[126px]">
      <Container>
        <Heading title="Recent completed works" subTitle="- PROJECTS" />

        <div className="grid gap-y-10 lg:gap-y-6 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-[70px]">
          {data?.map((project) => {
            const { title, thumbnail, technology } = project?.attributes || {};
            const { url } = thumbnail?.data?.attributes || {};

            return (
              <div key={project?.id}>
                <div
                  className="overflow-hidden rounded-md cursor-pointer"
                  onClick={() => setViewProject(project)}
                >
                  <img
                    src={url}
                    alt="project"
                    className="w-full rounded-md transition-all hover:scale-125"
                  />
                </div>
                <span className="text-[#55527c] text-lg font-medium uppercase block mt-7">
                  {technology}
                </span>
                <h3
                  className="text-primary font-bold text-2xl mt-3 transition-all hover:text-secondary cursor-pointer"
                  onClick={() => setViewProject(project)}
                >
                  {title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button>View all projects</Button>
        </div>
      </Container>

      <ProjectView setViewProject={setViewProject} viewProject={viewProject} />
    </section>
  );
};

export default RecentWorks;
