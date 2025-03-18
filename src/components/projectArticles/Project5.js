// import IconsWithText from "./IconsWithText";
// import PROJECTS from "./../../data/projects";
// import { FaCode } from "react-icons/fa6";
// import { LuBookOpen } from "react-icons/lu";

// // import ReactPlayer from "react-player";

// const Project5 = () => {
//   const projectWithId = PROJECTS.find((project) => project.id === 5);
//   const { technologies, date } = projectWithId;

//   return (
//     <div className="container w-[70rem] mt-20 text-left">
//       <div className="flex items-start">
//         <div className="mt-4 flex flex-wrap ml-2">
//           {technologies.map((technology, index) => (
//             <span
//               key={index}
//               className="bg-gray-200 not-italic rounded-full px-4 py-2 text-xl font-normal text-gray-800 mr-2 mb-2 sm:mr-2"
//             >
//               {technology}
//             </span>
//           ))}
//         </div>
//       </div>

//       <h3 className="leading-tight text-[4rem] font-black">
//         Lens Regeneration Data Analysis
//       </h3>
//       <h3 className="text-neutral-500 text-[1.9rem] font-normal mt-8 leading-relaxed">
//         How I Represented Cell Counts with a Negative Binomial Regression Model
//       </h3>
//       <hr className="mt-8"></hr>
//       <div className="flex items-start justify-between">
//         <IconsWithText
//           leftText={date}
//           className="mt-4"
//         />
//         <div className="mt-2 flex flex-wrap xs:w-[175px]">
//           <a
//             className="xs:pr-[10px] pr-[30px] hover:opacity-70"
//             target="_blank"
//             rel="noreferrer"
//             href="https://github.com/sadovsd/lens-regeneration-analysis"
//           >
//                       <FaCode className="inline mr-2 text-3xl" />
//             <span className="ml-1 leading-none whitespace-nowrap font-medium">
//               Code
//             </span>
          
          
//           <a className="xs:pr-[10px] pr-[20px] hover:opacity-70" target="_blank" rel="noreferrer" href="https://github.com/sadovsd/lens-regeneration-analysis/blob/main/report.pdf">
      
//             <LuBookOpen className="inline mr-2 text-3xl"/>
//             <span className="ml-0 leading-none whitespace-nowrap font-medium">
//               Writeup
//             </span>
//           </a>

//           </a>
//         </div>
//       </div>
//       <hr className="w-[66.5rem] my-2"></hr>

//       {/* <div className='mt-20 mb-40'>
//                 <ReactPlayer
//                     url="https://vimeo.com/586971565"
//                     controls='true'
//                 />
//             </div> */}

//       <div className="relative pt-[56.25%] mt-20 mb-40">
//         <iframe
//           src="https://player.vimeo.com/video/904323169?badge=0&autopause=0&player_id=0&app_id=58479"
//           allow="autoplay; fullscreen; picture-in-picture"
//           className="absolute top-0 left-0 w-full h-full"
//           title="portfolioVideo"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Project5;


import IconsWithText from "./IconsWithText";
import PROJECTS from "./../../data/projects";
import { FaCode } from "react-icons/fa6";
import { LuBookOpen } from "react-icons/lu";

const Project5 = () => {
  const projectWithId = PROJECTS.find((project) => project.id === 5);
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
        Lens Regeneration Data Analysis
      </h3>
      <h3 className="text-neutral-500 text-[1.9rem] font-normal mt-8 leading-relaxed">
        How I Represented Cell Counts with a Negative Binomial Regression Model
      </h3>
      
      <hr className="mt-8"></hr>

      <div className="flex items-start justify-between">
        <IconsWithText leftText={date} className="mt-4" />
        <div className="mt-2 flex flex-wrap xs:w-[175px]">
          <a
            className="xs:pr-[10px] pr-[20px] hover:opacity-70"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sadovsd/lens-regeneration-analysis/blob/main/analysis.Rmd"
          >
            <FaCode className="inline mr-2 text-3xl" />
            <span className="ml-0 leading-none whitespace-nowrap font-medium">
              Code
            </span>
          </a>

          <a
            className="xs:pr-[10px] pr-[00px] hover:opacity-70"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sadovsd/lens-regeneration-analysis/blob/main/report.pdf"
          >
            <LuBookOpen className="inline mr-2 text-3xl" />
            <span className="ml-0 leading-none whitespace-nowrap font-medium">
              Writeup
            </span>
          </a>
        </div>
      </div>

      <hr className="my-2"></hr>

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

export default Project5;
