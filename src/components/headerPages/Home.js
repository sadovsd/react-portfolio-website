import React, { Component } from "react";
import midjourney from "../../assets/midjourney.png";
// import headshot from '../../assets/headshot.png';
// import IntroAnimate from '../animations/IntroAnimate';
// import TitlesAnimate from '../animations/TitlesAnimate';
// import TitlesSlowAnimate from '../animations/TitlesSlowAnimate';
import { motion } from "framer-motion";
// import HighlightedProjects from "./HighlightedProjects";
// import { HIGHLIGHTED_PROJECTS } from './Projects';
// import PROJECTS from "../../data/projects";
// import { AiFillLayout } from 'react-icons/cg';
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";

import { GithubIcon, LinkedinIcon, MediumIcon, YoutubeIcon } from "../../icons";

// const TechUsed = ({ tech }) => (
//   <div className="px-[10px] xl:px-[60px] ssm:pb-[50px]">
//     <div className="flex flex-col">
//       <div className="flex items-center justify-center ">
//         {tech.name.startsWith("Tailwind") && (
//           <BiLogoTailwindCss size={70} className="text-black" />
//         )}
//         {tech.name.startsWith("React") && (
//           <RiReactjsFill size={70} className="text-black" />
//         )}
//         {tech.name.startsWith("Azure") && (
//           <img
//             width={100}
//             height={100}
//             className="w-[100px] h-[100px]"
//             src={"./images/static-web-app.png"}
//             alt="Azure static web app logo"
//           />
//         )}
//         {tech.name.startsWith("Midjourney") && (
//           <img
//             width={100}
//             height={100}
//             className="w-[100px] h-[100px]"
//             src={"./images/midjourney.png"}
//             alt="Midjourney logo"
//           />
//         )}
//       </div>
//       <div className="ml-6 mt-[30px]">
//         <h3 className="font-bold">{tech.name}</h3>
//         <p>{tech.description}</p>
//       </div>
//     </div>
//   </div>
// );

const TechUsed = ({ tech }) => (
  <div>
    <div className="flex">
      <div className="bg-green-600 flex items-center justify-center min-w-[4rem] min-h-[4rem] w-16 h-16 rounded-full">
        {tech.name.startsWith("Tailwind") && (
          <BiLogoTailwindCss size={25} className="text-white" />
        )}
        {tech.name.startsWith("React") && (
          <RiReactjsFill size={25} className="text-white" />
        )}
        {tech.name.startsWith("Azure") && (
          <img
            width={25}
            height={25}
            src={"./images/azure.png"}
            alt="Azure logo"
          />
        )}
        {tech.name.startsWith("Midjourney") && (
          <img
            width={25}
            height={25}
            src={"./images/midjourneyWhite.png"}
            alt="Midjourney logo"
          />
        )}
      </div>
      <div className="ml-6">
        <h3 className="font-bold">{tech.name}</h3>
        <p>{tech.description}</p>
      </div>
    </div>
  </div>
);

class Home extends Component {
  // state = { introAnimationComplete: false, titleAnimationComplete: false, showTitles: false, showTitleSlow: false};

  // handleIntroAnimationComplete = () => {
  //     this.setState({ introAnimationComplete: true });
  //     setTimeout(() => {
  //         this.setState({ showTitles: true });
  //       }, 50);
  // };

  // handleTitleAnimationComplete = () => {
  //     this.setState({ titleAnimationComplete: true });
  //     setTimeout(() => {
  //         this.setState({ showTitleSlow: true });
  //       }, 500);
  // };

  render() {
    // const { introAnimationComplete, titleAnimationComplete, showTitles, showTitleSlow } = this.state;
    return (
      <div className="container">
        <div className="flex flex-col md:flex-row m-auto md:m-8 md:mr-0 ssm:mt-8">
          <motion.div
            className="md:w-[42%] xl:ml-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            <div className="mt-60 xs:mt-28">
              <div>
                <h1 className="whitespace-nowrap ssm:px-1 xxs:!text-[8vw] xs:text-[40px] sm:text-[60px] md:text-[30px] lg:text-[35px] xl:text-[42px] 2xl:text-[5rem] md:mb-0 ssm:text-center md:text-left">
                  DAVID SADOVSKYY
                </h1>
                <h3 className="heading-with-line ml-2 font-semibold py-[10px] text-[21px]">
                  {" "}
                  Data scientist
                </h3>
              </div>

              <p className="ml-2 text-justify mt-7 ssm:mb-5 text-[19px]">
                Welcome to my portfolio site! I am a senior at Miami University
                looking to continue my statistics education next year with an
                M.S. I have a specific interest in analyzing unstructured data
                using LLMs. Working on this site and some other projects this
                past half year has introduced to the landscape and process of
                software creation. My goal is to continue learning this skill by
                creating applications that have real world value. If you would
                like to get in touch, feel free to send an email or connect on
                my other social media accounts.
              </p>
            </div>
            <div className="flex  xxs:flex-wrap justify-between pt-[10px] text-[19px]">
              <div className="ml-2">
                <h4 className="text-left font-semibold">Contact:</h4>
                <div className="font-normal">sadovsd@miamioh.edu</div>
              </div>
              <div>
                <div className="flex flex-row justify-start items-center gap-5 relative mb-4 pt-[5px]">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/davyd-sadovskyy-84678a105"
                  >
                    <LinkedinIcon className="h-11 w-11 text-linkedIn hover:text-neutral-500" />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sadovsd"
                  >
                    <GithubIcon className="h-11 w-11 text-neutral-950 hover:text-neutral-500" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://medium.com/"
                  >
                    <MediumIcon className="h-11 w-11 text-neutral-950 hover:text-neutral-500" />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                  >
                    <YoutubeIcon className="h-11 w-11 text-red-600 hover:text-neutral-500" />
                  </a>
                </div>
              </div>
              {/* <div className="hidden xl:block"></div> */}
            </div>
          </motion.div>
          <motion.div
            className="md:w-[58%] mt-24 flex justify-center mr-40 xs:mx-20"
            initial={{ opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, x: -100 }}
          >
            <img
              src={midjourney}
              className="max-w-[90%] ssm:mr-0 md:mr-[-100px] object-contain"
              alt="Midjourney Generated Illustration"
            />
          </motion.div>
        </div>

        {/* <HighlightedProjects projects={PROJECTS} /> */}
        <div className="xl:w-[83%] mt-40 flex flex-col items-center bg-[#EFF6FF] bg-slate-50 min-h-[400px] pt-20 mx-auto mb-24">
          <h4 className="text-green-600 font-semibold mb-6">TECHNOLOGIES</h4>
          <h1 className="pt-[20px] pb-[20px]">
            What I used to build this site
          </h1>
          <div className="grid ssm:grid-cols-1 md:grid-cols-2 gap-5 w-4/5 justify-around mt-20 text-left mb-32">
            <TechUsed
              tech={{
                name: "ReactJS",
                description:
                  "JavaScript library for building user interfaces, offering a component-based architecture and virtual DOM for efficient UI development.",
              }}
            />
            <TechUsed
              tech={{
                name: "Tailwind CSS",
                description:
                  "CSS framework that enables direct styling within HTML elements, eliminating the need for separate CSS files and streamlining the design process.",
              }}
            />
            <TechUsed
              tech={{
                name: "Azure Static Web Apps",
                description:
                  "Microsoft cloud service for hosting static files. I used continuous deployment by integrating with GitHub.",
              }}
            />
            <TechUsed
              tech={{
                name: "Midjourney",
                description:
                  "A generative AI software operating within a Discord server that allows finetuning of an image via prompt parameters.",
              }}
            />
          </div>
          {/* <div className="grid ssm:grid-cols-1 md:grid-cols-4 gap-5 mx-20 mt-20 mb-10 text-left">
            <TechUsed
              tech={{
                name: "ReactJS",
                description:
                  "A JavaScript library for building user interfaces",
              }}
            />
            <TechUsed
              tech={{
                name: "Tailwind CSS",
                description:
                  "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
              }}
            />
            <TechUsed
              tech={{
                name: "Azure Static Web Apps",
                description:
                  "A service that automatically builds and deploys full stack web apps to Azure from a code repository.",
              }}
            />
            <TechUsed
              tech={{
                name: "Midjourney",
                description:
                  "A generative artificial intelligence program and service that generates images from natural language descriptions",
              }}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
