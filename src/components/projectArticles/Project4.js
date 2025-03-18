import React from "react";
// import { ArrowRightIcon } from "../../icons";
// import jeromePowell from "../../assets/jeromePowell.webp";
import IconsWithText from "./IconsWithText";
import PROJECTS from "./../../data/projects";
// import CodeBlock from "../CodeBlock";
// import { FaCode } from "react-icons/fa6";
// import { MdMonitor } from "react-icons/md";
// import { LuBookOpen } from "react-icons/lu";
import { RiPresentationFill } from "react-icons/ri";


// import { Link } from 'react-router-dom';
// import ReactPlayer from "react-player";

const Project4 = () => {
  const projectWithId3 = PROJECTS.find((project) => project.id === 4);
  // const [isUseViewerHovered, setIsUseViewerHovered] = useState(false);
  if (!projectWithId3) {
    return <div>project not found</div>;
  }

  const { technologies, date } = projectWithId3;
  return (
    <div className="container mt-20 w-[70rem] text-left">
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
      Differential HNRNP-C Binding Analysis      </h3>
      <h3
        // leading-none, leading-tight, leading-snug, leading-normal, leading-relaxed, and leading-loose.

        // font-thin: 100
        // font-extralight or font-200: 200
        // font-light or font-300: 300
        // font-normal or font-400: 400
        // font-medium or font-500: 500
        // font-semibold or font-600: 600
        // font-bold or font-700: 700
        // font-extrabold or font-800: 800
        // font-black or font-900: 900
        className="text-neutral-500 text-[1.9rem] font-normal mt-8 leading-relaxed"
      >
        {/* Using SAS on demand to store and manipulate historical government consumer price index data, React to build a user application, and a Flask API to process user requests */}
        CU Anschutz Rotation #3 with David Bentley
      </h3>
      <hr className="mt-8"></hr>

      <div className="flex items-start justify-between">
        <IconsWithText
          // leftIcon={<AiFillCalendar />}
          leftText={date}
          // rightIcon={<GithubIcon />}
          // rightText="sadovsd"
          className="mt-4 "
        />
        <div className="mt-2 flex flex-wrap xs:w-[175px]">

          <a className="xs:pr-[10px] pr-[0px] hover:opacity-70" target="_blank" rel="noreferrer" href="https://github.com/sadovsd/transcriptomics_aging_clock_CORN/blob/main/rotation3_presentation.pdf">
            <RiPresentationFill className="inline mr-2 text-3xl"/>
            <span className="ml-0 leading-none whitespace-nowrap font-medium">
              Presentation Slides
            </span>
          </a>
        </div>
      </div>

      {/* <div
        className="flex items-end gap-4 mt-10 cursor-pointer"
        onMouseEnter={() => setIsUseViewerHovered(true)}
        onMouseLeave={() => setIsUseViewerHovered(false)}
      >
        <h3>Use Viewer</h3>
        <ArrowRightIcon
          className={`${
            isUseViewerHovered ? "translate-x-4" : ""
          } transition-all cursor-pointer`}
        />
      </div> */}

      <hr className="my-2"></hr>

      {/* <ReactPlayer
                    className='mt-20 '
                    url="https://vimeo.com/586971565"
                    controls='true'
      /> */}

            <div className="relative pt-[56.25%] mt-20 mb-40">
                <iframe 
                    src="https://player.vimeo.com/video/904323169?badge=0&autopause=0&player_id=0&app_id=58479" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    className="absolute top-0 left-0 w-full h-full" 
                    title="portfolioVideo"
                ></iframe>
            </div>


      {/* <img
        src={jeromePowell}
        alt="Jerome Powell"
        // className='h-[400px] p-16'
      />
      <p className="mt-4 text-center">Jerome Powell thinks its ok</p> */}
      {/* <p className="text-[1.9rem] leading-relaxed mt-12">
        Data was acquired from U.S bureau of labor statistics
        https://www.bls.gov/cpi/data.htm. The complete file structure used can
        be easily examined here: https://download.bls.gov/pub/time.series/cu/.
        The best way to understand the data here is in terms of series. Each
        series id (ex. ) uniquely identifies How was this underlying dataset
        created? I started off with the cu.data.12.USHousing.txt data that
        contained 58110 observations. Here, there were numerous kinds of
        series_id’s – basically a series of observations corresponding to a
        particular category of housing expense type. The “underlying dataset”
        was an extraction of 169 observations corresponding to a singular
        series_id. Since the user only gave a keyword for the kind of expense
        type to plot (in this case just “housing”), I had to go through the
        trouble of finding out a series_id to connect it to. I did this using
        two other files: cu.items.txt and cu.series.txt. The items file
        contained descriptions of particular consumer products (where keywords
        can be found) and the item_codes they correspond to. The series file
        contained the item_codes and the series_id they correspond to. I used
        proc SQL to query these files and find a series_id from the series file
        that corresponds to the keyword that the user inputted. An additional
        SAS data step was used to parse through the product descriptions
        variable to find a match with the keyword. Sometimes, a keyword can
        appear in multiple observations of the items file. For the purposes of
        the project, I selected just the first observation that matched. Also,
        an item_code relates to multiple series_ids (item_code symbolizes a
        consumer product but series_id symbolizes the product in addition to its
        location in the U.S, collection type, and whether its seasonally
        adjusted). I picked only the series_id symbolizing average value across
        all U.S cities, a monthly collection type, and a non-seasonally adjusted
        method of calculation.
      </p>
      <CodeBlock
        code={`// Your code snippet goes here
const greet = () => {console.log('Hello, World!');};`}
        language="javascript"
        className="mt-7"
      /> */}
    </div>
  );
};

export default Project4;
