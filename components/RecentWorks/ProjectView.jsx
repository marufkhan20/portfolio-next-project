import { useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ProjectView = ({ viewProject, setViewProject }) => {
  const videoRef = useRef(null);

  const { video, technology, title, description } =
    viewProject?.attributes || {};
  const { url } = video?.data?.attributes || {};

  useEffect(() => {
    if (Object.keys(viewProject)?.length === 0) {
      videoRef.current.pause();
    }
  }, [viewProject]);

  return (
    <div
      className={`transition-all duration-300 ${
        Object.keys(viewProject)?.length > 0 ? "scale-100" : "scale-0"
      } fixed top-0 left-0 right-0 bottom-0 bg-black/70 w-full h-full z-50 flex items-center justify-center`}
    >
      <div className="bg-white px-12 py-20 rounded-xl w-[50%] h-[80vh] overflow-y-scroll relative">
        <video
          controls
          autoPlay
          src={url}
          ref={videoRef}
          className="h-[430px] w-full border rounded-md"
        ></video>
        <div>
          <span className="text-[#55527c] text-lg font-medium uppercase block mt-7">
            {technology}
          </span>
          <h3 className="text-primary font-bold text-2xl mt-3">{title}</h3>
          <p className="mt-5 text-body text-lg leading-[35px]">{description}</p>
        </div>

        <div
          className="absolute top-5 right-12 text-xl p-2 rounded-full border-2 text-secondary border-secondary transition-all hover:bg-secondary hover:text-white cursor-pointer"
          onClick={() => setViewProject({})}
        >
          <IoCloseSharp />
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
