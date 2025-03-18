import IconsWithText from "./IconsWithText";
import PROJECTS from "./../../data/projects";
import { FaCode } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { LuBookOpen } from "react-icons/lu";
// import { MdOutlineArticle } from "react-icons/md";
// import ReactPlayer from "react-player";

const Project1 = () => {
  const projectWithId = PROJECTS.find((project) => project.id === 1);
  const { technologies, date } = projectWithId;

  return (
    <div className="container w-[70rem] mt-20 text-left">
      <div className="flex items-start">
        <div className="mt-4 flex flex-wrap ml-2">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="bg-gray-200 not-italic rounded-full px-4 py-2 text-xl font-normal text-gray-800 mr-2 mb-2 sm:mr-2"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <h3 className="leading-tight text-[4rem] font-black">
        Research Paper Visualizer
      </h3>
      <h3 className="text-neutral-500 text-[1.9rem] font-normal mt-8 leading-relaxed">
        How I used Semantic Scholar API to Retrieve Raw Data about Large
        Langauge Model Publications, BERTopic to Cluster Papers, and an RShiny
        Dashboard to Interactively Visualize Aspects of the Research Landscape
      </h3>
      <hr className="mt-8"></hr>
      <div className="flex items-start justify-between">
        <IconsWithText leftText={date} className="mt-4 " />
        <div className="mt-2 flex flex-wrap xs:w-[175px]">
          
        <a
            className="xs:pr-[10px] pr-[20px] hover:opacity-70"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sadovsd/semantic-scholar-visualizer"
          >
            <FaCode className="inline mr-2 text-3xl" />
            <span className="ml-0 leading-none whitespace-nowrap font-medium">
              Code
            </span>
          </a>
          
          <a
            className="xs:pr-[10px] pr-[20px] hover:opacity-70"
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@sadovsd/visualizing-the-sea-of-llm-research-published-in-2023-af40298adf4e"
          >
            <LuBookOpen className="inline mr-2 text-3xl" />
            <span className="ml-0 leading-none whitespace-nowrap font-medium">
              Article
            </span>
          </a>


            <a
              className="xs:pr-[10px] hover:opacity-70"
              target="_blank"
              rel="noreferrer"
              href="https://davydsadovskyy.shinyapps.io/llm-papers-2023-dashboard/"
            >
            <MdMonitor className="inline mr-2 text-3xl" />
            <span className="ml-0 leading-none whitespace-nowrap font-medium">
              Use App
            </span>
          </a>
        </div>
      </div>
      <hr className="w-[65rem] my-2"></hr>

      {/* <div className='mt-20 mb-40'>
                <ReactPlayer
                    url="https://vimeo.com/586971565"
                    controls='true'
                />
            </div> */}
      <div className="relative pt-[56.25%] mt-20 mb-40">
        <iframe
          src="https://player.vimeo.com/video/904323169?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full"
          title="portfolioVideo"
        ></iframe>
      </div>
    </div>
  );
};

export default Project1;
